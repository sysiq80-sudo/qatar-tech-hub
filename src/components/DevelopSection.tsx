import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Lightbulb, Rocket, Users, CheckCircle2, ArrowLeft } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "استشارة مجانية",
    description: "نناقش فكرتك ونقدم لك رؤية واضحة للمشروع",
  },
  {
    icon: Code2,
    title: "تطوير احترافي",
    description: "فريق متخصص يستخدم أحدث التقنيات",
  },
  {
    icon: Users,
    title: "تواصل مستمر",
    description: "تحديثات دورية ومتابعة في كل مرحلة",
  },
  {
    icon: Rocket,
    title: "إطلاق ودعم",
    description: "نساعدك في الإطلاق ونوفر دعم فني مستمر",
  },
];

const steps = [
  "أرسل فكرتك",
  "نراجع ونقيّم",
  "نتفق على التفاصيل",
  "نبدأ التطوير",
  "نسلّم المشروع",
];

const DevelopSection = () => {
  return (
    <section id="develop" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            طلب تطوير
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            لديك فكرة؟ <span className="text-gradient-gold">نحوّلها لواقع</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            شاركنا فكرتك وسنعمل معك على تحويلها إلى تطبيق ناجح يحقق أهدافك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Features & Process */}
          <div>
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-maroon-900 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6">مراحل العمل</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-maroon-900 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 flex items-center gap-3">
                      <span className="font-medium text-foreground">{step}</span>
                      {index < steps.length - 1 && (
                        <div className="flex-1 h-px bg-border" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-2">أرسل فكرتك</h3>
            <p className="text-muted-foreground mb-8">سنتواصل معك خلال 24 ساعة</p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <Input placeholder="أدخل اسمك" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input type="email" placeholder="example@email.com" className="bg-background" dir="ltr" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <Input type="tel" placeholder="+974 XXXX XXXX" className="bg-background" dir="ltr" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    نوع التطبيق
                  </label>
                  <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">اختر نوع التطبيق</option>
                    <option value="web">تطبيق ويب</option>
                    <option value="mobile">تطبيق موبايل</option>
                    <option value="both">ويب + موبايل</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  اسم المشروع
                </label>
                <Input placeholder="مثال: تطبيق توصيل طلبات" className="bg-background" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  وصف الفكرة
                </label>
                <Textarea
                  placeholder="اشرح لنا فكرتك بالتفصيل..."
                  className="bg-background min-h-32 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الميزانية المتوقعة
                </label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">اختر نطاق الميزانية</option>
                  <option value="10-25">10,000 - 25,000 ر.ق</option>
                  <option value="25-50">25,000 - 50,000 ر.ق</option>
                  <option value="50-100">50,000 - 100,000 ر.ق</option>
                  <option value="100+">أكثر من 100,000 ر.ق</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-primary" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  أوافق على <a href="#" className="text-primary hover:underline">الشروط والأحكام</a> وسياسة الخصوصية
                </label>
              </div>

              <Button variant="default" size="lg" className="w-full group">
                إرسال الطلب
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>رد سريع</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>استشارة مجانية</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>سرية تامة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopSection;
