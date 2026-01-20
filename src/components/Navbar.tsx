import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Fingerprint } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "التطبيقات", href: "#apps" },
    { label: "طلب تطوير", href: "#develop" },
    { label: "الاستثمار", href: "#invest" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-maroon-900 flex items-center justify-center shadow-elegant">
                <Fingerprint className="w-7 h-7 text-gold-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 rounded-full animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">بصمة</span>
              <span className="text-xs text-muted-foreground">منصة التطبيقات القطرية</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              تسجيل الدخول
            </Button>
            <Button variant="default" size="sm">
              إنشاء حساب
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" className="flex-1">
                  تسجيل الدخول
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  إنشاء حساب
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
