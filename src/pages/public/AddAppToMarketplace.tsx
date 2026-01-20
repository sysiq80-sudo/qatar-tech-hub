import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Smartphone, Upload, Code, Zap, Shield, Users } from "lucide-react";

const AddAppToMarketplace = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    appName: "",
    appNameEn: "",
    developerName: "",
    email: "",
    phone: "",
    category: "",
    platform: "",
    price: "",
    description: "",
    features: "",
    screenshots: "",
    appLink: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ربط النموذج مع API
    console.log("Add App Submission:", formData);
    alert("تم تقديم طلب إضافة التطبيق بنجاح! سيتم مراجعة البيانات والرد عليكم");
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <Smartphone className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">بوابة نشر التطبيقات الجديدة</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            أضف تطبيقك إلى سوق قطر تك هب
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            أوصل تطبيقك إلى آلاف المستخدمين والمستثمرين في قطر، وكن جزءاً من منظومة الابتكار الرقمي
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="bg-card/50 backdrop-blur-sm border-gold-500/20">
            <CardHeader>
              <Zap className="w-10 h-10 text-gold-400 mb-2" />
              <CardTitle className="text-white">انتشار واسع</CardTitle>
              <CardDescription>وصول فوري لشريحة واسعة من المستخدمين المهتمين</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-gold-500/20">
            <CardHeader>
              <Shield className="w-10 h-10 text-gold-400 mb-2" />
              <CardTitle className="text-white">حماية وموثوقية</CardTitle>
              <CardDescription>بيئة آمنة لعرض وتسويق تطبيقاتك الرقمية</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-gold-500/20">
            <CardHeader>
              <Users className="w-10 h-10 text-gold-400 mb-2" />
              <CardTitle className="text-white">دعم مجتمع المطورين</CardTitle>
              <CardDescription>تواصل مع نخبة من المطورين والخبراء في المجال</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* App Submission Form */}
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-gold-500/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle className="text-2xl text-white">بيانات التطبيق الجديد</CardTitle>
            <CardDescription>يرجى تعبئة التفاصيل بدقة لضمان سرعة المراجعة والنشر</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* App Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-gold-400" />
                  معلومات التطبيق
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="appName" className="text-white">اسم التطبيق (بالعربية) *</Label>
                    <Input
                      id="appName"
                      value={formData.appName}
                      onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="اسم التطبيق بالعربي"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appNameEn" className="text-white">اسم التطبيق (بالإنجليزية) *</Label>
                    <Input
                      id="appNameEn"
                      value={formData.appNameEn}
                      onChange={(e) => setFormData({ ...formData, appNameEn: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="App Name in English"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">التصنيف *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                      required
                    >
                      <SelectTrigger className="bg-background/50 border-gold-500/20 text-white">
                        <SelectValue placeholder="اختر تصنيف التطبيق" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">تجارة إلكترونية</SelectItem>
                        <SelectItem value="education">تعليم</SelectItem>
                        <SelectItem value="health">صحة ولياقة</SelectItem>
                        <SelectItem value="finance">خدمات مالية</SelectItem>
                        <SelectItem value="entertainment">ترفيه</SelectItem>
                        <SelectItem value="business">أعمال</SelectItem>
                        <SelectItem value="social">تواصل اجتماعي</SelectItem>
                        <SelectItem value="food">طعام وشراب</SelectItem>
                        <SelectItem value="travel">سفر وسياحة</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform" className="text-white">المنصة *</Label>
                    <Select
                      value={formData.platform}
                      onValueChange={(value) => setFormData({ ...formData, platform: value })}
                      required
                    >
                      <SelectTrigger className="bg-background/50 border-gold-500/20 text-white">
                        <SelectValue placeholder="منصة التشغيل" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ios">iOS فقط</SelectItem>
                        <SelectItem value="android">Android فقط</SelectItem>
                        <SelectItem value="both">iOS و Android</SelectItem>
                        <SelectItem value="web">تطبيق ويب</SelectItem>
                        <SelectItem value="all">جميع المنصات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-white">السعر (بالريال القطري) *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="0 للمجاني أو حدد السعر"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appLink" className="text-white">رابط التطبيق</Label>
                    <Input
                      id="appLink"
                      value={formData.appLink}
                      onChange={(e) => setFormData({ ...formData, appLink: e.target.value })}
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="رابط التطبيق على المتجر (اختياري)"
                    />
                  </div>
                </div>
              </div>

              {/* Developer Information */}
              <div className="space-y-4 pt-4 border-t border-gold-500/20">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold-400" />
                  معلومات المطور
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="developerName" className="text-white">اسم المطور/الشركة *</Label>
                    <Input
                      id="developerName"
                      value={formData.developerName}
                      onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="اسم المطور أو الشركة"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">رقم الهاتف *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white"
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>
                </div>
              </div>

              {/* App Details */}
              <div className="space-y-4 pt-4 border-t border-gold-500/20">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Upload className="w-5 h-5 text-gold-400" />
                  تفاصيل ووصف التطبيق
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">وصف التطبيق *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="bg-background/50 border-gold-500/20 text-white min-h-[120px]"
                    placeholder="اكتب وصفاً جذاباً يشرح فكرة التطبيق والخدمات التي يقدمها..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features" className="text-white">المميزات الرئيسية *</Label>
                  <Textarea
                    id="features"
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    required
                    className="bg-background/50 border-gold-500/20 text-white min-h-[100px]"
                    placeholder="قائمة بأهم المميزات (كل ميزة في سطر)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="screenshots" className="text-white">روابط صور التطبيق</Label>
                  <Textarea
                    id="screenshots"
                    value={formData.screenshots}
                    onChange={(e) => setFormData({ ...formData, screenshots: e.target.value })}
                    className="bg-background/50 border-gold-500/20 text-white min-h-[80px]"
                    placeholder="ضع روابط لصور شاشة التطبيق هنا (اختياري)"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-primary group"
                >
                  إرسال طلب الإضافة
                  <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="border-gold-500/30 text-white hover:bg-gold-500/10"
                >
                  إلغاء
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddAppToMarketplace;
