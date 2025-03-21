
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import RegisterForm from "./RegisterForm";

const faqs = [
  {
    question: "Как стать партнером TenChat?",
    answer: "Чтобы стать партнером TenChat, необходимо заполнить форму регистрации на нашем сайте, принять условия партнерского соглашения и пройти простую верификацию. После этого вы получите доступ к личному кабинету и всем инструментам партнерской программы."
  },
  {
    question: "Какие комиссии я буду получать?",
    answer: "Размер комиссии зависит от типа привлеченного клиента и объема сделки. В среднем партнеры получают от 15% до 30% от стоимости услуг. За крупные сделки предусмотрены дополнительные бонусы, которые могут увеличить ваш доход до 120 000 ₽ за одну сделку."
  },
  {
    question: "Как отслеживаются привлеченные мной клиенты?",
    answer: "Для отслеживания привлеченных клиентов используется система уникальных реферальных ссылок и промокодов. Также в личном кабинете доступна CRM-система, где вы можете видеть всю информацию о привлеченных клиентах, статусе сделок и начисленных комиссиях в режиме реального времени."
  },
  {
    question: "Когда и как производятся выплаты?",
    answer: "Выплаты производятся регулярно, в среднем раз в две недели. Вы можете выбрать удобный для вас способ получения вознаграждения: банковский перевод, перевод на карту или электронные платежные системы. Минимальная сумма для вывода составляет 5000 ₽."
  },
  {
    question: "Нужен ли опыт в продажах для участия в программе?",
    answer: "Опыт в продажах не обязателен, но может быть полезен. Мы предоставляем всем партнерам обучающие материалы, проводим вебинары и тренинги, а также оказываем персональную поддержку. Главное — ваше желание развиваться и зарабатывать."
  },
  {
    question: "Какие маркетинговые материалы предоставляются партнерам?",
    answer: "Партнеры получают доступ к широкому набору маркетинговых материалов: баннеры, презентации, текстовые описания, видеоролики, кейсы клиентов и многое другое. Все материалы регулярно обновляются и могут быть адаптированы под ваши нужды."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-black -z-10"></div>
      
      {/* Red gradient overlay */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-tenchat-red/20 rounded-full filter blur-[100px] -z-5"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-tenchat-red/10 rounded-full filter blur-[100px] -z-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-sm font-medium text-white/80">Ответы на вопросы</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-white/70 text-lg">
            Всё, что вы хотели узнать о партнерской программе TenChat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className={`space-y-4 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg overflow-hidden transition-all duration-300 border border-white/5 hover:border-white/20"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-white/60 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 px-6 ${
                    openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="sticky top-24">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Готовы начать?</h3>
                <p className="text-white/70">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>
              </div>
              
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
