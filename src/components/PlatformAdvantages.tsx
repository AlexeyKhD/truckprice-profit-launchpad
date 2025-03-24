import { useEffect, useRef, useState } from "react";
import { LayoutDashboard, ListChecks, HelpCircle } from "lucide-react";
import { Button } from "./ui-extensions/Button";

const features = [
  {
    icon: <LayoutDashboard size={36} />,
    title: "Личный кабинет",
    description: "Отслеживайте статистику, управляйте клиентами и получайте аналитику в удобном интерфейсе",
    details: [
      "Полная статистика и аналитика",
      "История сделок и выплат",
      "Персональные рекомендации"
    ]
  },
  {
    icon: <ListChecks size={36} />,
    title: "CRM-система",
    description: "Эффективно управляйте своими клиентами, отслеживайте сделки и автоматизируйте процессы",
    details: [
      "Удобное управление клиентами",
      "Автоматический расчет комиссий",
      "Интеграция с внешними сервисами"
    ]
  },
  {
    icon: <HelpCircle size={36} />,
    title: "Поддержка и обучение",
    description: "Получите доступ к обучающим материалам и персональной поддержке для максимальной эффективности",
    details: [
      "Персональный менеджер",
      "Онлайн-тренинги и вебинары",
      "База знаний и материалы"
    ]
  }
];

const PlatformAdvantages = () => {
  const [inView, setInView] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="advantages" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-truckprice-darkgray -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm font-medium text-white/80">Всё для успеха</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Преимущества платформы
          </h2>
          <p className="text-white/70 text-lg">
            Мы предоставляем все необходимые инструменты для эффективной работы и максимального дохода
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`feature-card cursor-pointer transition-all duration-500 ${
                    activeFeature === index ? 'border-truckprice-red/50 bg-gradient-to-br from-black/80 to-truckprice-red/10' : ''
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`feature-icon ${activeFeature === index ? 'text-truckprice-red' : ''}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70 mb-4">{feature.description}</p>
                      
                      <div className={`space-y-2 overflow-hidden transition-all duration-500 ${
                        activeFeature === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="space-y-1">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/80">
                              <span className="w-1.5 h-1.5 bg-truckprice-red rounded-full"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="glass-card rounded-xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-truckprice-red/20 rounded-full filter blur-[60px]"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Начните зарабатывать с Truck-Price уже сегодня</h3>
              
              <p className="text-white/70 mb-8">
                Присоединяйтесь к партнерской программе и получите доступ ко всем преимуществам платформы:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-truckprice-red/20 flex items-center justify-center mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/80">Регистрация и подключение бесплатно</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-truckprice-red/20 flex items-center justify-center mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/80">Высокие комиссии и прозрачные условия</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-truckprice-red/20 flex items-center justify-center mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/80">Персональный менеджер и техническая поддержка</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-truckprice-red/20 flex items-center justify-center mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white/80">Доступ к эксклюзивным маркетинговым материалам</span>
                </li>
              </ul>
              
              <Button variant="accent" withArrow glowing className="w-full">
                Стать партнером
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAdvantages;
