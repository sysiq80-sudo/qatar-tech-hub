import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingUp, DollarSign, Target, FileText, Phone, Mail, MapPin } from "lucide-react";

const InvestorRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    investmentRange: "",
    interests: "",
    experience: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ربط النموذج مع API
    console.log("Investor Registration:", formData);
    alert("تم تقديم طلب التسجيل بنجاح! سيتم التواصل معك قريباً");
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium">بوابة المستثمرين الجدد</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            سجل كمستثمر في قطر تك هب
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            انضم إلى شبكة المستثمرين الرائدة واكتشف الفرص الواعدة في السوق القطري وكن جزءاً من نمو الاقتصاد الرقمي
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Card className="bg-card/50 backdrop-blur-sm border-gold-500/20">
            <CardHeader>
              <DollarSign className="w-10 h-10 text-gold-400 mb-2" />
              <CardTitle className="text-white">فرص استثمارية</CardTitle>
              <CardDescription>الوصول إلى أفضل الشركات الناشئة والفرص الواعدة</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-gold-500/20">
            <CardHeader>
              <Target className="w-10 h-10 text-gold-400 mb-2" />
              <CardTitle className="text-white">تحليلات دقيقة</CardTitle>
              <CardDescription>بيانات تفصيلية وتقارير أداء الشركات لمساعدتك في القرار</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-gold-500/20">
            <CardHeader>
              <FileText className="w-10 h-10 text-gold-400 mb-2" />
              <CardTitle className="text-white">تقارير شاملة</CardTitle>
              <CardDescription>تقارير دورية عن أداء محفظتك الاستثمارية</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Registration Form */}
        <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-gold-500/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader>
            <CardTitle className="text-2xl text-white">نموذج تسجيل مستثمر</CardTitle>
            <CardDescription>يرجى تعبئة البيانات المطلوبة لإنشاء حساب مستثمر جديد</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">الاسم الكامل *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-background/50 border-gold-500/20 text-white"
                    placeholder="محمد أحمد المنصوري"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">البريد الإلكتروني *</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 w-4 h-4 text-gold-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white pr-10"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">رقم الهاتف *</Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 w-4 h-4 text-gold-400" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white pr-10"
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">الشركة / المنظمة</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background/50 border-gold-500/20 text-white"
                    placeholder="اسم الشركة (اختياري)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">الموقع *</Label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-3 w-4 h-4 text-gold-400" />
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                      className="bg-background/50 border-gold-500/20 text-white pr-10"
                      placeholder="الدوحة، قطر"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentRange" className="text-white">نطاق الاستثمار *</Label>
                  <Select
                    value={formData.investmentRange}
                    onValueChange={(value) => setFormData({ ...formData, investmentRange: value })}
                    required
                  >
                    <SelectTrigger className="bg-background/50 border-gold-500/20 text-white">
                      <SelectValue placeholder="حدد نطاق الاستثمار" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-50k">10,000 - 50,000 ريال</SelectItem>
                      <SelectItem value="50k-100k">50,000 - 100,000 ريال</SelectItem>
                      <SelectItem value="100k-500k">100,000 - 500,000 ريال</SelectItem>
                      <SelectItem value="500k-1m">500,000 - 1,000,000 ريال</SelectItem>
                      <SelectItem value="1m+">أكثر من 1,000,000 ريال</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests" className="text-white">القطاعات التي تهتم بالاستثمار فيها *</Label>
                <Input
                  id="interests"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  required
                  className="bg-background/50 border-gold-500/20 text-white"
                  placeholder="مثال: التكنولوجيا المالية، الذكاء الاصطناعي، الصحة الرقمية"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-white">الخبرة الاستثمارية *</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  required
                >
                  <SelectTrigger className="bg-background/50 border-gold-500/20 text-white">
                    <SelectValue placeholder="حدد مستوى الخبرة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">مبتدئ - أقل من سنة</SelectItem>
                    <SelectItem value="intermediate">متوسط - 1-3 سنوات</SelectItem>
                    <SelectItem value="experienced">خبير - 3-5 سنوات</SelectItem>
                    <SelectItem value="expert">محترف - أكثر من 5 سنوات</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">رسالة إضافية</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-gold-500/20 text-white min-h-[120px]"
                  placeholder="هل لديك أي استفسارات أو تفاصيل إضافية تود مشاركتها؟..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-primary group"
                >
                  إرسال طلب الانضمام
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

export default InvestorRegistration;
