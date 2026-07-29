// @ts-check
/**
 * 字体子集化脚本（自托管 + 瘦身）
 * -------------------------------------------------------------
 * 做法：扫描项目源码里实际用到的字符，用 fontTools(pyftsubset)
 *       把原始 ttf 裁剪成仅含这些字符的 woff2，大幅减小体积。
 *
 * 依赖：Python(可用 `py` 启动器) + fonttools + brotli
 *       脚本会在缺失时自动尝试 `py -m pip install fonttools brotli`。
 *
 * 用法：pnpm subset:fonts   （或 node scripts/subset-fonts.mjs）
 *
 * 换字体：只改下面的 CONFIG（family + 各字重源文件名）即可。
 * 加新中文文案后：重跑本脚本刷新子集。
 */

import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

/* ===================== 配置区（换字体只改这里） ===================== */
const CONFIG = {
  /** CSS font-family 名称 */
  family: "MiSans",
  /** 原始字体目录（仅源文件，不发布） */
  srcDir: path.join(ROOT, "assets", "fonts"),
  /** 子集化产物目录（实际加载，随站点发布） */
  outDir: path.join(ROOT, "public", "fonts"),
  /** 产物文件名前缀 → public/fonts/<prefix>-<weight>.woff2 */
  outPrefix: "misans",
  /** 字重 → 源文件名映射 */
  weights: {
    400: "MiSans-Regular.ttf",
    600: "MiSans-Semibold.ttf",
    700: "MiSans-Bold.ttf",
  },
  /** 扫描这些目录里的源码来收集实际用字 */
  scanDirs: ["data", "components", "pages", "layouts"],
  /** 参与扫描的文件扩展名 */
  scanExts: [
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".astro",
    ".md",
    ".mdx",
    ".json",
    ".html",
  ],
};

/**
 * 基础字符集：确保常用符号一定包含（源码里以 HTML 实体书写的符号扫描不到，
 * 例如 &#8249; &rsaquo; 等，这里显式补齐）。
 */
const BASE_CHARS = [
  // ASCII 可见字符（含英文、数字、常见标点）
  ...Array.from({ length: 0x7e - 0x20 + 1 }, (_, i) =>
    String.fromCharCode(0x20 + i),
  ),
  // 常用中文/全角标点与符号
  ...`，。、；：？！“”‘’「」『』（）【】《》〈〉…—–·•※∙～｜│　`,
  // 箭头与常见排版符号（含站点用到的 ↓ → ‹ › ›）
  ...`↑↓←→‹›«»‰§¶©®™°±×÷≤≥≠∞`,
].join("");

/* ===================== 工具函数 ===================== */

/** 递归收集目录下指定扩展名文件 */
function walk(dir) {
  /** @type {string[]} */
  const files = [];
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      files.push(...walk(full));
    } else if (CONFIG.scanExts.includes(path.extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

/** 运行命令并返回是否成功 */
function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: "inherit", ...opts });
  return res.status === 0;
}

/** 检查 fonttools + brotli 是否可用，缺失则尝试安装 */
function ensureFonttools() {
  const check = spawnSync("py", ["-c", "import fontTools, brotli"], {
    stdio: "ignore",
  });
  if (check.status === 0) return true;
  console.log("• 未检测到 fonttools/brotli，尝试安装 …");
  const ok = run("py", ["-m", "pip", "install", "fonttools", "brotli"]);
  if (!ok) {
    console.error(
      "✗ 安装 fonttools/brotli 失败，请手动运行：py -m pip install fonttools brotli",
    );
    return false;
  }
  return true;
}

/* ===================== 主流程 ===================== */

function main() {
  // 1) 收集字符
  const chars = new Set();
  for (const c of BASE_CHARS) chars.add(c);

  let scanned = 0;
  for (const rel of CONFIG.scanDirs) {
    for (const file of walk(path.join(ROOT, rel))) {
      const text = readFileSync(file, "utf8");
      for (const ch of text) chars.add(ch); // 按码点迭代（含代理对）
      scanned++;
    }
  }
  // 去掉控制字符
  for (const ch of [...chars]) {
    const cp = ch.codePointAt(0) ?? 0;
    if (cp < 0x20 && ch !== "\t") chars.delete(ch);
  }

  const charset = [...chars].join("");
  console.log(`• 扫描 ${scanned} 个源文件，收集到 ${chars.size} 个唯一字符`);

  // 2) 写字符表到临时文件
  mkdirSync(CONFIG.outDir, { recursive: true });
  const charsetFile = path.join(CONFIG.outDir, ".charset.txt");
  writeFileSync(charsetFile, charset, "utf8");

  // 3) 确认工具链
  if (!ensureFonttools()) process.exit(1);

  // 4) 逐字重子集化
  let failed = false;
  for (const [weight, srcName] of Object.entries(CONFIG.weights)) {
    const src = path.join(CONFIG.srcDir, srcName);
    if (!existsSync(src)) {
      console.error(`✗ 缺少源字体：${src}`);
      failed = true;
      continue;
    }
    const out = path.join(CONFIG.outDir, `${CONFIG.outPrefix}-${weight}.woff2`);
    const ok = run("py", [
      "-m",
      "fontTools.subset",
      src,
      `--text-file=${charsetFile}`,
      `--output-file=${out}`,
      "--flavor=woff2",
      "--layout-features=*",
      "--no-hinting",
      "--desubroutinize",
    ]);
    if (!ok) {
      console.error(`✗ 子集化失败：${srcName}`);
      failed = true;
      continue;
    }
    const kb = (statSync(out).size / 1024).toFixed(1);
    console.log(`✓ ${CONFIG.outPrefix}-${weight}.woff2  (${kb} KB)`);
  }

  // 清理临时字符表
  rmSync(charsetFile, { force: true });

  if (failed) process.exit(1);
  console.log("\n完成：public/fonts/ 已更新。");
}

main();
