import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Eye, Smartphone, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const apps = [
  {
    id: 1,
    name: "متجر إلكتروني متكامل",
    description: "تطبيق متجر إلكتروني شامل مع نظام دفع متكامل وإدارة المنتجات",
    price: "15,000",
    rating: 4.9,
    reviews: 124,
    category: "تجارة إلكترونية",
    type: "ويب + موبايل",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "تطبيق توصيل طلبات",
    description: "نظام متكامل لإدارة التوصيل والطلبات مع تتبع مباشر",
    price: "25,000",
    rating: 4.8,
    reviews: 89,
    category: "خدمات",
    type: "موبايل",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 3,
    name: "نظام حجوزات المطاعم",
    description: "تطبيق لإدارة الحجوزات والطاولات مع إشعارات فورية",
    price: "12,000",
    rating: 4.7,
    reviews: 67,
    category: "مطاعم",
    type: "ويب",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 4,
    name: "منصة تعليمية تفاعلية",
    description: "نظام إدارة تعلم متكامل مع دورات وشهادات",
    price: "35,000",
    rating: 4.9,
    reviews: 156,
    category: "تعليم",
    type: "ويب + موبايل",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 5,
    name: "تطبيق عقارات ذكي",
    description: "منصة لعرض وبيع العقارات مع خرائط تفاعلية",
    price: "28,000",
    rating: 4.6,
    reviews: 45,
    category: "عقارات",
    type: "ويب + موبايل",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    featured: false,
  },
  {
    id: 6,
    name: "نظام إدارة العيادات",
    description: "تطبيق لإدارة المواعيد والسجلات الطبية",
    price: "40,000",
    rating: 4.8,
    reviews: 78,
    category: "صحة",
    type: "ويب",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    featured: false,
  },
];

const AppsSection = () => {
  const { toast } = useToast();
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("الكل");

  const handleBuyNow = (app: typeof apps[0]) => {
    toast({
      title: "إضافة إلى السلة",
      description: `تم إضافة "${app.name}" إلى سلة المشتريات`,
      duration: 3000,
    });
  };

  const handlePreview = (app: typeof apps[0]) => {
    toast({
      title: "معاينة التطبيق",
      description: `فتح معاينة مباشرة لـ "${app.name}"`,
      duration: 2000,
    });
    // يمكن فتح نافذة جديدة للمعاينة
    // window.open(`/preview/${app.id}`, '_blank');
  };

  const handleViewDetails = (app: typeof apps[0]) => {
    setSelectedApp(app);
    setIsDetailsOpen(true);
  };

  const filteredApps = activeFilter === "الكل" 
    ? apps 
    : apps.filter(app => app.category === activeFilter);

  return (
    <section id="apps" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5">
            معرض التطبيقات
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            تطبيقات <span className="text-gradient-maroon">جاهزة للإطلاق</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من التطبيقات المطورة بأعلى معايير الجودة
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["الكل", "تجارة إلكترونية", "خدمات", "تعليم", "صحة", "عقارات"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === activeFilter
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app, index) => (
            <div
              key={app.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-shine animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent" />
                
                {/* Featured Badge */}
                {app.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold-500 text-maroon-900 border-0">
                      مميز
                    </Badge>
                  </div>
                )}
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm">
                  {app.type.includes("موبايل") && <Smartphone className="w-4 h-4 text-primary" />}
                  {app.type.includes("ويب") && <Globe className="w-4 h-4 text-primary" />}
                  <span className="text-xs font-medium text-foreground">{app.type}</span>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleBuyNow(app)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    شراء الآن
                  </Button>
                  <Button 
                    variant="heroOutline" 
                    size="sm" 
                    className="bg-card/90 backdrop-blur-sm border-gold-400/50 text-gold-400"
                    onClick={() => handlePreview(app)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {app.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                    <span className="text-sm font-semibold">{app.rating}</span>
                    <span className="text-xs text-muted-foreground">({app.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {app.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">{app.price}</span>
                    <span className="text-sm text-muted-foreground mr-1">ر.ق</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary"
                    onClick={() => handleViewDetails(app)}
                  >
                    عرض التفاصيل
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            عرض جميع التطبيقات
          </Button>
        </div>
      </div>

      {/* App Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedApp?.name}</DialogTitle>
            <DialogDescription>
              {selectedApp?.category} • {selectedApp?.type}
            </DialogDescription>
          </DialogHeader>
          
          {selectedApp && (
            <div className="space-y-4">
              <img
                src={selectedApp.image}
                alt={selectedApp.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-gold-500 text-gold-500" />
                  <span className="font-semibold">{selectedApp.rating}</span>
                  <span className="text-muted-foreground">({selectedApp.reviews} تقييم)</span>
                </div>
                {selectedApp.featured && (
                  <Badge className="bg-gold-500 text-maroon-900">مميز</Badge>
                )}
              </div>

              <div>
                <h4 className="font-semibold mb-2">الوصف:</h4>
                <p className="text-muted-foreground">{selectedApp.description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">المميزات:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>تصميم عصري ومتجاوب</li>
                  <li>أمان عالي المستوى</li>
                  <li>دعم فني متواصل</li>
                  <li>تحديثات مجانية لمدة سنة</li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">السعر</p>
                  <p className="text-3xl font-bold text-primary">
                    {selectedApp.price} <span className="text-lg">ر.ق</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>
              إغلاق
            </Button>
            <Button 
              variant="hero"
              onClick={() => {
                if (selectedApp) handleBuyNow(selectedApp);
                setIsDetailsOpen(false);
              }}
            >
              <ShoppingCart className="w-4 h-4 ml-2" />
              شراء الآن
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AppsSection;
