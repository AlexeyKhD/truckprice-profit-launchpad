
import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { Zap, Clock, TrendingUp } from "lucide-react";

const RewardSystem = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="rewards" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black -z-10"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-tenchat-red/20 rounded-full filter blur-[150px] animate-pulse-light -z-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm font-medium text-white/80">Выгодные условия</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Система вознаграждения
          </h2>
          <p className="text-white/70 text-lg">
            Зарабатывайте с первой сделки и получайте дополнительные бонусы за активность
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="glass-card rounded-xl p-8 h-full border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-tenchat-red bg-tenchat-red/10 rounded-lg">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Моментальный доход</h3>
              <p className="text-white/70 mb-6">
                Получайте вознаграждение за каждую успешную сделку сразу после её заключения
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm text-white/50 mb-1">Средний доход с 1 сделки</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter end={32000} suffix=" ₽" /> : "0 ₽"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Максимальный доход с 1 сделки</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter end={120000} suffix=" ₽" /> : "0 ₽"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="glass-card rounded-xl p-8 h-full border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-tenchat-green bg-tenchat-green/10 rounded-lg">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Гарантированные выплаты</h3>
              <p className="text-white/70 mb-6">
                Выплаты партнерам осуществляются регулярно без задержек и изменения условий
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm text-white/50 mb-1">Средний срок выплаты</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter end={3} suffix=" дня" /> : "0 дней"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Комиссия за вывод средств</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter end={0} suffix=" ₽" /> : "0 ₽"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="glass-card rounded-xl p-8 h-full border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-tenchat-red bg-tenchat-red/10 rounded-lg">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Бонусы за активность</h3>
              <p className="text-white/70 mb-6">
                Получайте дополнительные бонусы за регулярную активность и крупные сделки
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm text-white/50 mb-1">Бонус за 5 сделок в месяц</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter end={25000} suffix=" ₽" /> : "0 ₽"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Бонус за крупную сделку</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter end={50000} suffix=" ₽" /> : "0 ₽"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className={`glass-card rounded-xl p-8 transition-all duration-1000 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`} style={{ transitionDelay: "600ms" }}>
            <p className="text-xl text-white/80 mb-4">
              Партнеры TenChat в среднем зарабатывают
            </p>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-tenchat-red to-white bg-clip-text text-transparent bg-200% animate-gradient-move">
              {inView ? <AnimatedCounter end={320000} suffix=" ₽" className="bg-gradient-to-r from-white via-tenchat-red to-white bg-clip-text text-transparent bg-200% animate-gradient-move" /> : "0 ₽"}
              <span className="text-white text-2xl md:text-3xl font-normal ml-2">в месяц</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSystem;
