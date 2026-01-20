import { Fingerprint, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    platform: [
      { label: "التطبيقات", href: "#apps" },
      { label: "طلب تطوير", href: "#develop" },
      { label: "فرص الاستثمار", href: "#invest" },
      { label: "قصص النجاح", href: "#" },
    ],
    support: [
      { label: "مركز المساعدة", href: "#" },
      { label: "الأسئلة الشائعة", href: "#" },
      { label: "تواصل معنا", href: "#contact" },
      { label: "الشروط والأحكام", href: "#" },
    ],
    company: [
      { label: "من نحن", href: "#" },
      { label: "فريق العمل", href: "#" },
      { label: "الوظائف", href: "#" },
      { label: "المدونة", href: "#" },
    ],
  };

  return (
    <footer id="contact" className="bg-gradient-hero text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-gold-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">اشترك في نشرتنا الإخبارية</h3>
              <p className="text-primary-foreground/70">احصل على آخر الأخبار وأحدث فرص الاستثمار</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="bg-primary-foreground/10 border-gold-500/30 text-primary-foreground placeholder:text-primary-foreground/50 w-full md:w-72"
                dir="ltr"
              />
              <Button variant="hero" className="whitespace-nowrap">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-gold">
                <Fingerprint className="w-7 h-7 text-maroon-900" />
              </div>
              <div>
                <span className="text-2xl font-bold">بصمة</span>
                <div className="text-xs text-primary-foreground/60">منصة التطبيقات القطرية</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              منصة بصمة هي وجهتك الأولى للتطبيقات في قطر. نقدم حلولاً رقمية متكاملة للأفراد والشركات.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">المنصة</h4>
            <ul className="space-y-3">
              {links.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">الدعم</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">الشركة</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  الدوحة، قطر
                  <br />
                  أبراج الخليج، الطابق 15
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+97444445555"
                  className="text-primary-foreground/70 hover:text-gold-400 transition-colors text-sm"
                  dir="ltr"
                >
                  +974 4444 5555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:info@basma.qa"
                  className="text-primary-foreground/70 hover:text-gold-400 transition-colors text-sm"
                >
                  info@basma.qa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} بصمة. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-gold-400 transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-gold-400 transition-colors">سياسة الاسترداد</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
