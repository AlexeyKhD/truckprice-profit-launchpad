
import { useState } from "react";
import { Button } from "./ui-extensions/Button";
import { CheckCircle2, Mail, Phone, User } from "lucide-react";

const RegisterForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    agreeTerms: false,
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      setFormStep(2);
    } else {
      setIsSubmitted(true);
      // Here you would typically submit the form data to a server
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md max-w-md w-full mx-auto border border-white/10">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6">
            {formStep === 1 ? "Начните зарабатывать" : "Завершите регистрацию"}
          </h3>

          {formStep === 1 ? (
            <>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Ваше имя
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-white/40" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-lg focus:ring-tenchat-red focus:border-tenchat-red block w-full pl-10 p-3"
                      placeholder="Иван Иванов"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} className="text-white/40" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-lg focus:ring-tenchat-red focus:border-tenchat-red block w-full pl-10 p-3"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="accent"
                className="w-full mt-6"
                withArrow
                glowing
              >
                Продолжить
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                    Телефон
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={16} className="text-white/40" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-lg focus:ring-tenchat-red focus:border-tenchat-red block w-full pl-10 p-3"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">
                    Компания (опционально)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm rounded-lg focus:ring-tenchat-red focus:border-tenchat-red block w-full p-3"
                    placeholder="Название компании"
                  />
                </div>

                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 accent-tenchat-red rounded"
                    />
                  </div>
                  <label htmlFor="agreeTerms" className="ml-2 text-sm text-white/60">
                    Я согласен с{" "}
                    <a href="#" className="text-tenchat-red hover:underline">
                      условиями использования
                    </a>{" "}
                    и{" "}
                    <a href="#" className="text-tenchat-red hover:underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="w-1/2"
                  onClick={() => setFormStep(1)}
                >
                  Назад
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  className="w-1/2"
                  withArrow
                  glowing
                  disabled={!formData.agreeTerms}
                >
                  Завершить
                </Button>
              </div>
            </>
          )}
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-tenchat-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-tenchat-green" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Регистрация завершена!</h3>
          <p className="text-white/60 mb-6">
            Мы отправили дальнейшие инструкции на почту {formData.email}
          </p>
          <Button
            variant="primary"
            withArrow
            onClick={() => {
              setIsSubmitted(false);
              setFormStep(1);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                agreeTerms: false,
              });
            }}
          >
            Вернуться на главную
          </Button>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
