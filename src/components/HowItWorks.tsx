import { useEffect, useRef, useState } from "react";
import { UserPlus, Users, DollarSign } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={36} />,
    title: "Регистрация в партнерской программе",
    description: "Создайте личный кабинет и получите доступ к партнерским материалам и инструментам",
  },
  {
    icon: <Users size={36} />,
    title: "Привлечение клиентов",
    description: "Рекомендуйте Truck-Price своим контактам и отслеживайте их активность в CRM-системе",
  },
  {
    icon: <DollarSign size={36} />,
    title: "Получение вознаграждения",
    description: "Зарабатывайте до 120 000 ₽ за каждую успешную сделку и получайте бонусы за активность",
  },
];

const HowItWorks = () => {
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
    <section id="how-it-works" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-truckprice-darkgray to-black -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm font-medium text-white/80">Простая схема работы</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Как это работает
          </h2>
          <p className="text-white/70 text-lg">
            Всего три простых шага отделяют вас от первого заработка в партнерской программе Truck-Price
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-item transition-all duration-1000 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass-card rounded-xl p-8 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-4 text-truckprice-red bg-truckprice-red/10 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
