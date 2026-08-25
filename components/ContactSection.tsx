import { Button, TransparentButton } from "@/components/ui/Button";
import { ABOUT } from "@/data/site";

const ContactSection = () => {
  return (
    <section id="contact" className="flex scroll-mt-24 flex-col gap-16">
      {/* ① 居中标题 */}
      <div className="flex flex-col gap-4" data-reveal="fade-up">
        <h2 className="text-3xl font-semibold lg:text-4xl">{ABOUT.heading}</h2>
        <p className="text-subtle text-lg">{ABOUT.sub}</p>
      </div>

      {/* ② 左右分栏：介绍 + 联系方式卡片 */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* 左侧：介绍文字 */}
        <div className="flex flex-col justify-center gap-4" data-reveal="fade-up">
          <div className="flex items-center gap-3">
            <img
              src="https://img.macrostar.top/blue.svg"
              alt="MacroSTAR logo"
              className="h-10 w-10"
            />
            <span className="gradient-text-static text-2xl font-bold">
              MacroSTAR
            </span>
          </div>
          <p className="text-muted leading-relaxed">{ABOUT.intro}</p>
        </div>

        {/* 右侧：联系方式迷你卡片 */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          data-reveal="fade-up"
          data-reveal-delay="60"
        >
          {ABOUT.methods.map((m, idx) => (
            <a
              key={m.title}
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel={m.href.startsWith("http") ? "noopener" : undefined}
              className="ease-out group border-border bg-card hover:bg-card-hover flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              data-reveal="fade-up"
              data-reveal-delay={Math.min(idx * 60, 240)}
            >
              <span className="bg-translucent flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl">
                {m.icon}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-subtle text-sm">{m.title}</span>
                <span className="text-foreground group-hover:text-accent font-medium transition-colors">
                  {m.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ③ 商务合作 CTA */}
      <div
        className="border-border relative overflow-hidden rounded-2xl border p-12 text-center lg:p-16"
        data-reveal="zoom-in"
      >
        <div className="hero-bg absolute inset-0 opacity-50" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h3 className="text-2xl font-semibold lg:text-3xl">
            {ABOUT.cta.title}
          </h3>
          <p className="text-muted text-lg">{ABOUT.cta.sub}</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <Button
              href="/handbook"
              className="flex w-fit items-center gap-2"
            >
              <span className="text-lg">{ABOUT.cta.emailBtn}</span>
            </Button>
            <TransparentButton
              href="#"
              className="flex w-fit items-center gap-2"
            >
              <span className="text-lg">{ABOUT.cta.communityBtn}</span>
            </TransparentButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
