import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Target, ChartBar, Shield, ArrowLeft } from "lucide-react";

const investmentOpportunities = [
  {
    id: 1,
    name: "منصة سياحية قطرية",
    description: "منصة متكاملة للسياحة في قطر مع حجوزات فندقية وجولات سياحية",
    targetAmount: 500000,
    raisedAmount: 325000,
    investors: 12,
    returnRate: "25-35%",
    duration: "18 شهر",
    category: "سياحة",
    status: "متاح",
    image: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    name: "تطبيق خدمات منزلية",
    description: "منصة لربط مقدمي الخدمات المنزلية بالعملاء مع نظام تقييم متقدم",
    targetAmount: 300000,
    raisedAmount: 180000,
    investors: 8,
    returnRate: "20-30%",
    duration: "12 شهر",
    category: "خدمات",
    status: "متاح",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    name: "منصة تعليم الأطفال",
    description: "تطبيق تعليمي تفاعلي للأطفال بالعربية مع ألعاب تعليمية",
    targetAmount: 200000,
    raisedAmount: 200000,
    investors: 15,
    returnRate: "30-40%",
    duration: "24 شهر",
    category: "تعليم",
    status: "مكتمل",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "عوائد مجزية",
    description: "فرص استثمارية بعوائد تتراوح بين 20-40%",
  },
  {
    icon: Shield,
    title: "استثمار آمن",
    description: "دراسة جدوى معتمدة وعقود قانونية واضحة",
  },
  {
    icon: ChartBar,
    title: "تقارير دورية",
    description: "متابعة أداء استثمارك بشفافية تامة",
  },
  {
    icon: Users,
    title: "شراكة حقيقية",
    description: "كن جزءاً من نجاح مشاريع تقنية واعدة",
  },
];

const InvestSection = () => {
  const navigate = useNavigate();
  return (
    <section id="invest" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1.5 bg-gold-500/10 text-gold-600 border-gold-500/30">
            فرص الاستثمار
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            استثمر في <span className="text-gradient-gold">المستقبل الرقمي</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            شارك في تمويل مشاريع تقنية واعدة واحصل على عوائد مجزية مع شفافية كاملة
          </p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted to-background border border-border/50 hover:border-gold-500/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-4 shadow-gold">
                <benefit.icon className="w-7 h-7 text-maroon-900" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Investment Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {investmentOpportunities.map((opportunity, index) => (
            <div
              key={opportunity.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={opportunity.image}
                  alt={opportunity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      opportunity.status === "مكتمل"
                        ? "bg-green-500 text-white"
                        : "bg-gold-500 text-maroon-900"
                    } border-0`}
                  >
                    {opportunity.status}
                  </Badge>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 right-4">
                  <Badge variant="outline" className="bg-card/90 backdrop-blur-sm border-0">
                    {opportunity.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {opportunity.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {opportunity.description}
                </p>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">تم جمع</span>
                    <span className="font-bold text-foreground">
                      {opportunity.raisedAmount.toLocaleString()} ر.ق
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-all duration-500"
                      style={{
                        width: `${(opportunity.raisedAmount / opportunity.targetAmount) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>{Math.round((opportunity.raisedAmount / opportunity.targetAmount) * 100)}% مكتمل</span>
                    <span>الهدف: {opportunity.targetAmount.toLocaleString()} ر.ق</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gold-500 mb-1">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-foreground">{opportunity.returnRate}</div>
                    <div className="text-xs text-muted-foreground">العائد</div>
                  </div>
                  <div className="text-center border-x border-border">
                    <div className="flex items-center justify-center gap-1 text-gold-500 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-foreground">{opportunity.duration}</div>
                    <div className="text-xs text-muted-foreground">المدة</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gold-500 mb-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-foreground">{opportunity.investors}</div>
                    <div className="text-xs text-muted-foreground">مستثمر</div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant={opportunity.status === "مكتمل" ? "outline" : "default"}
                  className="w-full"
                  disabled={opportunity.status === "مكتمل"}
                  onClick={() => navigate('/investor-registration')}
                >
                  {opportunity.status === "مكتمل" ? "مكتمل التمويل" : "استثمر الآن"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-30" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                هل لديك مشروع يحتاج تمويلاً؟
              </h3>
              <p className="text-primary-foreground/80">
                قدّم مشروعك للمستثمرين وابدأ رحلة النجاح معنا
              </p>
            </div>
            <Button variant="hero" size="xl" className="group whitespace-nowrap" onClick={() => navigate('/investor-registration')}>
              قدّم مشروعك
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
