import heroDesktop from "@/assets/images/vectra-0.2-hero.png";
import heroMobile from "@/assets/images/vectra-0.2-hero-mobile.png";

const Hero = () => {
  return (
    <a
      href="/products/vectra"
      aria-label="Vectra 0.2"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <img
        src={heroDesktop.src}
        alt="Vectra 0.2 宣传"
        className="hidden h-full w-full object-contain md:block"
      />
      <img
        src={heroMobile.src}
        alt="Vectra 0.2 移动端宣传"
        className="h-full w-full object-contain md:hidden"
      />
      <span className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-sm whitespace-nowrap text-white/90 shadow-lg backdrop-blur-md">
        ↓ 单击跳转到Vectra介绍，向下滑动以了解更多
      </span>
    </a>
  );
};

export default Hero;
