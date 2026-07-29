import heroImage from "@/assets/images/hero.jpg";
import { Button, TransparentButton } from "@/components/ui/Button";
import { HERO } from "@/data/site";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 径向渐变背景（位于背景图后面），MacroSTAR 蓝紫星空色系 */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at left bottom, #2b3a67 0%, #1c2340 50%, #3d2e5c 100%)`,
        }}
      />

      {/* 背景图：外层负责独立淡入，内层保留原滑入动画 */}
      <div className="hero-fade-in absolute inset-0">
        <div
          className="banner-slide-in absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      {/* 内容容器（相对定位，不受背景动画影响） */}
      <div className="relative h-full text-white">
        <div className="ease-bounce max-w-8xl relative z-10 mx-auto flex h-full flex-col items-start justify-center gap-4 px-8 transition-all duration-500 md:gap-8 md:px-12 lg:px-16 xl:px-24">
          <div className="ease-bounce flex flex-col gap-4 transition-all duration-500 md:gap-6">
            <h1
              className="text-4xl leading-snug font-semibold lg:text-5xl xl:text-6xl"
              data-aos="zoom-in-right"
            >
              {HERO.title}
            </h1>
            <h2
              className="gradient-text text-2xl font-semibold lg:text-3xl"
              data-aos="zoom-in-right"
              data-aos-delay="100"
            >
              {HERO.subtitle}
            </h2>
            <p
              className="max-w-xl text-lg text-gray-300 lg:text-xl"
              data-aos="zoom-in-right"
              data-aos-delay="200"
            >
              {HERO.description}
            </p>
            <div
              className="ease-bounce flex flex-col gap-4 transition-all duration-500 md:flex-row md:gap-8"
              data-aos="zoom-in-right"
              data-aos-delay="300"
            >
              <Button
                href="/products/lunar-x"
                className="flex w-fit flex-row items-center gap-2"
              >
                <span className="text-lg lg:text-xl">{HERO.explore}</span>
              </Button>
              <TransparentButton
                href="/#contact"
                className="flex w-fit flex-row items-center gap-2"
              >
                <span className="text-lg lg:text-xl">{HERO.contact}</span>
              </TransparentButton>
            </div>
          </div>
        </div>
      </div>
      {/* 向下滚动提示 */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sm text-gray-300 transition-colors hover:text-white"
      >
        向下滚动 ↓
      </a>
    </div>
  );
};

export default Hero;
