import heroDark from "@/assets/images/herodark.jpg";
import heroLight from "@/assets/images/herolight.jpg";
import { Button, TransparentButton } from "@/components/ui/Button";
import { HERO } from "@/data/site";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 径向渐变背景（位于背景图后面），随主题翻转 */}
      <div className="hero-bg absolute inset-0" />

      {/* 背景图：外层负责独立淡入，内层保留原滑入动画；深/浅各一张 */}
      <div className="hero-fade-in absolute inset-0">
        <div
          className="banner-slide-in absolute inset-0 bg-cover bg-center bg-no-repeat dark-only"
          style={{ backgroundImage: `url(${heroDark.src})` }}
        />
        <div
          className="banner-slide-in absolute inset-0 bg-cover bg-center bg-no-repeat light-only"
          style={{ backgroundImage: `url(${heroLight.src})` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent dark-only" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent light-only" />
      {/* 内容容器（相对定位，不受背景动画影响） */}
      <div className="relative h-full text-foreground">
        <div className="ease-bounce max-w-8xl relative z-10 mx-auto flex h-full flex-col items-start justify-center gap-4 px-8 transition-all duration-300 md:gap-8 md:px-12 lg:px-16 xl:px-24">
          <div className="ease-bounce flex flex-col gap-4 transition-all duration-300 md:gap-6">
            <h1
              className="text-4xl leading-snug font-semibold lg:text-5xl xl:text-6xl"
              data-aos="fade-right"
            >
              {HERO.title}
            </h1>
            <h2
              className="gradient-text text-2xl font-semibold lg:text-3xl"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {HERO.subtitle}
            </h2>
            <p
              className="max-w-xl text-lg text-muted lg:text-xl"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {HERO.description}
            </p>
            <div
              className="ease-bounce flex flex-col gap-4 transition-all duration-300 md:flex-row md:gap-8"
              data-aos="fade-right"
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
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sm text-muted transition-colors hover:text-foreground"
      >
        向下滚动 �?
      </a>
    </div>
  );
};

export default Hero;
