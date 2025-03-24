import { useState, useEffect } from "react";
import { Button } from "./ui-extensions/Button";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="relative z-10">
          <div className="text-2xl font-bold text-white">
            <span className="text-tenchat-red font-display">Truck</span>-Price
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="animated-link">
            Как это работает
          </a>
          <a href="#rewards" className="animated-link">
            Вознаграждение
          </a>
          <a href="#advantages" className="animated-link">
            Преимущества
          </a>
          <a href="#testimonials" className="animated-link">
            Отзывы
          </a>
          <a href="#faq" className="animated-link">
            FAQ
          </a>
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" withArrow>
            Начать зарабатывать
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-20" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 z-10 overflow-hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <a href="#how-it-works" className="text-xl animated-link" onClick={() => setMenuOpen(false)}>
            Как это работает
          </a>
          <a href="#rewards" className="text-xl animated-link" onClick={() => setMenuOpen(false)}>
            Вознаграждение
          </a>
          <a href="#advantages" className="text-xl animated-link" onClick={() => setMenuOpen(false)}>
            Преимущества
          </a>
          <a href="#testimonials" className="text-xl animated-link" onClick={() => setMenuOpen(false)}>
            Отзывы
          </a>
          <a href="#faq" className="text-xl animated-link" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <Button variant="primary" withArrow onClick={() => setMenuOpen(false)}>
            Начать зарабатывать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
