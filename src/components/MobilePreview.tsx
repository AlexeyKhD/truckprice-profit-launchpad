
import { useState, useEffect } from "react";
import { ArrowUpRight, DollarSign, User, BarChart } from "lucide-react";

const MobilePreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    earnings: 0,
    deals: 0,
    clients: 0
  });

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

  return (
    <div className={`app-mockup w-72 h-[600px] bg-black border-[14px] border-black rounded-[40px] mx-auto relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {/* Phone details */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
      
      {/* Screen Content */}
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-b from-black to-tenchat-darkgray px-3 py-6">
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xs text-white font-medium">9:41</div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
              <div className="w-2 h-2 bg-tenchat-red rounded-full"></div>
            </div>
            <div className="text-xs text-white">24</div>
          </div>
        </div>

        {/* App Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-white">
              <span className="text-tenchat-red">Ten</span>Chat
            </h3>
            <p className="text-xs text-white/60">Партнерская программа</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-tenchat-red/20 flex items-center justify-center">
            <User size={16} className="text-tenchat-red" />
          </div>
        </div>

        {/* Stats Card */}
        <div className="glass-card rounded-2xl p-4 mb-6">
          <p className="text-xs text-white/60 mb-2">Ваш доход</p>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-bold text-white">
              {counters.earnings.toLocaleString()} ₽
            </div>
            <div className="text-xs px-2 py-1 rounded-full bg-tenchat-red/20 text-tenchat-red flex items-center">
              +12% <ArrowUpRight size={12} className="ml-1" />
            </div>
          </div>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="glass-card rounded-xl p-3">
            <DollarSign size={16} className="text-tenchat-red mb-2" />
            <p className="text-xs text-white/60 mb-1">Сделок</p>
            <p className="text-lg font-semibold text-white">{counters.deals}</p>
          </div>
          <div className="glass-card rounded-xl p-3">
            <BarChart size={16} className="text-tenchat-green mb-2" />
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
                <div className="w-8 h-8 rounded-full bg-tenchat-red/20 flex items-center justify-center mr-3">
                  <DollarSign size={14} className="text-tenchat-red" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Новая сделка</p>
                  <p className="text-xs text-white/60">Клиент #2458</p>
                </div>
              </div>
              <div className="text-sm font-semibold text-tenchat-green">+32 000 ₽</div>
            </div>
            
            <div className="glass-card rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-tenchat-green/20 flex items-center justify-center mr-3">
                  <User size={14} className="text-tenchat-green" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Новый клиент</p>
                  <p className="text-xs text-white/60">ООО "Гармония"</p>
                </div>
              </div>
              <div className="text-xs px-2 py-1 rounded-full bg-tenchat-red/10 text-white">Новый</div>
            </div>
          </div>
        </div>

        {/* Floating Notifications */}
        <div 
          className="app-notification top-20 -right-20 z-20"
          style={{ "--delay": "0.3" } as React.CSSProperties}
        >
          <DollarSign size={12} className="text-tenchat-green" />
          <span>Новый платеж +48 000 ₽</span>
        </div>
        
        <div 
          className="app-notification bottom-32 -left-24 z-20"
          style={{ "--delay": "1.5" } as React.CSSProperties}
        >
          <User size={12} className="text-tenchat-red" />
          <span>Новый клиент привлечен</span>
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
