import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Smartphone, Globe, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/3 right-1/4 animate-float">
        <div className="w-16 h-16 rounded-2xl bg-card/10 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center">
          <Smartphone className="w-8 h-8 text-gold-400" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 rounded-2xl bg-card/10 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center">
          <Globe className="w-7 h-7 text-gold-400" />
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 rounded-2xl bg-card/10 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-gold-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">منصة رائدة في السوق القطري</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary-foreground">حوّل أفكارك إلى</span>
            <br />
            <span className="text-gradient-gold">تطبيقات ناجحة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            منصة بصمة هي وجهتك الأولى لشراء التطبيقات الجاهزة، طلب تطوير أفكارك المخصصة، 
            أو الاستثمار في مشاريع تقنية واعدة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group" onClick={() => window.location.href = '#apps'}>
              تصفح التطبيقات
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => navigate('/add-app')}>
              اطلب تطوير تطبيقك
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gold-500/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">+150</div>
              <div className="text-primary-foreground/60 text-sm mt-1">تطبيق متاح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">+500</div>
              <div className="text-primary-foreground/60 text-sm mt-1">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">+2M</div>
              <div className="text-primary-foreground/60 text-sm mt-1">ريال استثمارات</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
