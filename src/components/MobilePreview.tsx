import { useState, useEffect } from "react";
import { ArrowUpRight, DollarSign, User, BarChart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import logoSmall from "../assets/images/logo-small.svg";

const MobilePreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    earnings: 0,
    deals: 0,
    clients: 0
  });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters(prev => ({
          earnings: prev.earnings < 98500 ? prev.earnings + 1000 : prev.earnings,
          deals: prev.deals < 24 ? prev.deals + 1 : prev.deals,
          clients: prev.clients < 74 ? prev.clients + 2 : prev.clients
        }));
      }, 100);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return <div className="relative w-full overflow-visible flex justify-center">
      <div className={`app-mockup w-72 h-[600px] bg-black border-[14px] border-black rounded-[40px] relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        {/* Phone details */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
        
        {/* Screen Content */}
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-black to-truckprice-darkgray px-3 py-6">
          {/* Status Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-xs text-white font-medium">9:41</div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-truckprice-red rounded-full"></div>
              </div>
              <div className="text-xs text-white">24</div>
            </div>
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img src={logoSmall} alt="Truck-Price Logo" className="h-8 mr-2" />
              <div>
                <h3 className="text-lg font-bold text-white">Truck-Price</h3>
                <p className="text-xs text-white/60">Партнерская программа</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-truckprice-red/20 flex items-center justify-center">
              <User size={16} className="text-truckprice-red" />
            </div>
          </div>

          {/* Stats Card */}
          <div className="glass-card rounded-2xl p-4 mb-6">
            <p className="text-xs text-white/60 mb-2">Ваш доход</p>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-white">
                {counters.earnings.toLocaleString()} ₽
              </div>
              <div className="text-xs px-2 py-1 rounded-full bg-truckprice-red/20 text-truckprice-red flex items-center">
                +12% <ArrowUpRight size={12} className="ml-1" />
              </div>
            </div>
          </div>

          {/* Mini Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="glass-card rounded-xl p-3">
              <DollarSign size={16} className="text-truckprice-red mb-2" />
              <p className="text-xs text-white/60 mb-1">Сделок</p>
              <p className="text-lg font-semibold text-white">{counters.deals}</p>
            </div>
            <div className="glass-card rounded-xl p-3">
              <BarChart size={16} className="text-truckprice-green mb-2" />
              <p className="text-xs text-white/60 mb-1">Клиентов</p>
              <p className="text-lg font-semibold text-white">{counters.clients}</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Последние операции</h4>
            <div className="space-y-3">
              <div className="glass-card rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-truckprice-red/20 flex items-center justify-center mr-3">
                    <DollarSign size={14} className="text-truckprice-red" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">Новая сделка</p>
                    <p className="text-xs text-white/60">Клиент #2458</p>
                  </div>
                </div>
                <div className="text-sm font-semibold text-truckprice-green">+32 000 ₽</div>
              </div>
              
              <div className="glass-card rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-truckprice-green/20 flex items-center justify-center mr-3">
                    <User size={14} className="text-truckprice-green" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">Новый клиент</p>
                    <p className="text-xs text-white/60">ООО "Гармония"</p>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-truckprice-red/10 text-white">Новый</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Notifications - Fixed position with absolute positioning - hidden on mobile */}
      {!isMobile && (
        <>
          <div style={{
          "--delay": "0.3"
        } as React.CSSProperties} className="absolute top-20 right-0 translate-x-[30%] z-30 app-notification my-[44px] mx-[129px]">
            <DollarSign size={12} className="text-truckprice-green" />
            <span>Новый платеж +48 000 ₽</span>
          </div>
          
          <div style={{
          "--delay": "1.5"
        } as React.CSSProperties} className="absolute bottom-32 left-0 translate-x-[-30%] z-30 app-notification my-[38px] mx-[98px]">
            <User size={12} className="text-truckprice-red" />
            <span>Новый клиент привлечен</span>
          </div>
        </>
      )}
    </div>;
};

export default MobilePreview;
