import { useEffect, useRef, useState } from "react";
import { Button } from "./ui-extensions/Button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { JSX } from 'react/jsx-runtime';

const testimonials = [
  {
    name: "Алексей Смирнов",
    position: "Независимый консультант",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Партнерская программа Truck-Price превзошла все мои ожидания. За первый месяц я заработал более 150 000 рублей, просто рекомендуя сервис своим бизнес-контактам. Великолепная поддержка и прозрачные выплаты.",
    earnings: "150 000 ₽/месяц",
    rating: 5
  },
  {
    name: "Наталья Иванова",
    position: "Директор по развитию",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Я скептически относилась к партнерским программам, но Truck-Price действительно работает. Аналитика, CRM и поддержка на высшем уровне. Мой рекорд - 210 000 рублей за месяц.",
    earnings: "210 000 ₽/месяц",
    rating: 5
  },
  {
    name: "Дмитрий Козлов",
    position: "Бизнес-тренер",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "Рекомендую Truck-Price своим клиентам и при этом получаю стабильный доход. Прозрачная система выплат, никаких задержек. Теперь это значительная часть моего дохода.",
    earnings: "185 000 ₽/месяц",
    rating: 4
  },
  {
    name: "Елена Петрова",
    position: "Маркетолог",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    content: "Партнерская программа Truck-Price идеально вписалась в мой бизнес. Я рекомендую сервис своим клиентам, и они остаются довольны, а я получаю стабильный пассивный доход.",
    earnings: "120 000 ₽/месяц",
    rating: 5
  }
];

const Testimonials = () => {
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
        nextTestimonial();
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [inView, activeIndex]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-truckprice-darkgray to-black -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm font-medium text-white/80">Реальные результаты</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Истории успеха наших партнеров
          </h2>
          <p className="text-white/70 text-lg">
            Узнайте, как партнеры Truck-Price достигают высоких результатов и получают стабильный доход
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-gradient-to-br from-black/80 to-truckprice-darkgray rounded-xl overflow-hidden transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}>
                    <div className="md:flex items-stretch">
                      <div className="md:w-1/3 bg-gradient-to-br from-truckprice-red/20 to-black relative p-8 flex flex-col items-center">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full border-2 border-truckprice-red/50 overflow-hidden mb-4 shadow-lg shadow-truckprice-red/20">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-truckprice-red/10 to-transparent"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                        <p className="text-white/60 text-sm mb-4">{testimonial.position}</p>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-truckprice-red fill-truckprice-red" : "text-white/20"} 
                            />
                          ))}
                        </div>
                        <div className="glass-card px-4 py-2 rounded-full">
                          <p className="text-sm font-medium text-white">Доход: <span className="text-truckprice-green">{testimonial.earnings}</span></p>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-8 md:p-12 testimonial-card">
                        <p className="text-lg text-white/80 mb-6 relative z-10">
                          {testimonial.content}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-truckprice-red"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                          </div>
                          <p className="text-white/40 text-sm">Партнер Truck-Price с 2023 года</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === idx ? "bg-truckprice-red scale-125" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 md:left-0 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-truckprice-red/80 transition-all z-10"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 md:right-0 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-truckprice-red/80 transition-all z-10"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" withArrow>
            Присоединиться к партнерам
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
