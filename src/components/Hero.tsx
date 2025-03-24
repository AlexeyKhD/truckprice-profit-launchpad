import { Button } from "./ui-extensions/Button";
import MobilePreview from "./MobilePreview";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    section?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-tenchat-darkgray to-tenchat-darkgray -z-10"></div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tenchat-red/30 rounded-full filter blur-[150px] animate-pulse-light"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-tenchat-red/20 rounded-full filter blur-[120px] animate-pulse-light" style={{
        animationDelay: "1s"
      }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <span className="text-sm font-medium text-white/80">Партнерская программа <span className="text-tenchat-red">Truck-Price</span></span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Станьте партнёром <span className="text-tenchat-red">Truck-Price</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Зарабатывайте от <span className="font-bold text-white">125 000 ₽</span> за сделку, объединяя людей и грузовую технику без вложений и рисков
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" withArrow glowing className="text-base py-6">
                Начать зарабатывать
              </Button>
              <Button variant="outline" size="lg" className="text-base py-6">
                Узнать больше
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-white/60 mb-3">Нам доверяют:</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="bg-white/5 backdrop-blur-sm px-3 py-2 rounded-md">
                  <div className="text-white font-medium">ГК<span className="text-tenchat-red">Автомобильность</span></div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-3 py-2 rounded-md">
                  <div className="text-white font-medium">Сколково<span className="text-tenchat-red">Tech</span></div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm px-3 py-2 rounded-md">
                  <div className="text-white font-medium">Future<span className="text-tenchat-red">Pro</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <MobilePreview />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <button onClick={scrollToHowItWorks} className="text-white/50 hover:text-white transition-colors" aria-label="Scroll down">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;