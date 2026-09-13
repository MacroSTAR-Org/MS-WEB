import heroDesktop from "@/assets/images/Frame186.png";
import heroMobile from "@/assets/images/Frame186.png";

const Hero = () => {
  return (
    <a
      href="https://www.bilibili.com/opus/1247261522152914952"
      aria-label="Lunar Valley XI"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={heroDesktop.src}
        alt="LunarValleyXI"
        className="hidden h-full w-full object-contain md:block"
      />
      <img
        src={heroMobile.src}
        alt="LunarValleyXIheromobile"
        className="h-full w-full object-contain md:hidden"
      />
      <span className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-sm whitespace-nowrap text-white/90 shadow-lg backdrop-blur-md">
        ↓ 单击跳转到 Lunar Valley XI 介绍，向下滑动以了解更多
      </span>
    </a>
  );
};

export default Hero;
