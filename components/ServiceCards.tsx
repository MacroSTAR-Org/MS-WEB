import { Button, TransparentButton } from "@/components/ui/Button";
import { CARDS } from "@/data/site";

const ServiceCards = () => {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mb-12 flex flex-col gap-4" data-aos="fade-up">
        <h2 className="text-3xl font-semibold lg:text-4xl">{CARDS.heading}</h2>
        <p className="text-lg text-gray-400">{CARDS.sub}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {CARDS.items.map((card, idx) => (
          <div
            key={card.title}
            id={card.id}
            className="ease-bounce group relative flex scroll-mt-24 flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 lg:p-12"
            data-aos="fade-up"
            data-aos-delay={(idx % 2) * 100}
          >
            {/* 卡片装饰性渐变 */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="text-2xl font-semibold lg:text-3xl">{card.title}</h3>
            <p className="text-lg text-gray-400">{card.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {card.buttons.map((btn) =>
                btn.type === "filled" ? (
                  <Button
                    key={btn.text}
                    href={btn.href}
                    className="!px-4 !py-2 text-sm"
                  >
                    <span>{btn.text}</span>
                  </Button>
                ) : (
                  <TransparentButton
                    key={btn.text}
                    href={btn.href}
                    className="!px-4 !py-2 text-sm"
                  >
                    <span>{btn.text}</span>
                  </TransparentButton>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
