import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Check, X, Smartphone, Star, Clock } from "lucide-react";
import { useState } from "react";

// Mock data
const mockApps = [
  { 
    id: 1, 
    appName: "توصيل سريع", 
    appNameEn: "Fast Delivery", 
    developer: "محمد عبدالله", 
    email: "delivery@example.com", 
    phone: "+974 5555 1111", 
    category: "خدمات لوجستية", 
    platform: "both", 
    price: "0", 
    description: "تطبيق لتوصيل الطلبات بجميع أنواعها بسرعة وأمان", 
    status: "pending", 
    date: "2026-01-19", 
    rating: 0 
  },
  { 
    id: 2, 
    appName: "متجري الإلكتروني", 
    appNameEn: "My Ecommerce", 
    developer: "شركة الهدى", 
    email: "shop@example.com", 
    phone: "+974 5555 2222", 
    category: "تجارة إلكترونية", 
    platform: "android", 
    price: "0", 
    description: "منصة بيع منتجات منزلية مع خيارات دفع متعددة", 
    status: "approved", 
    date: "2026-01-10", 
    rating: 4.5 
  },
  { 
    id: 3, 
    appName: "المدرسة الذكية", 
    appNameEn: "Smart School", 
    developer: "قطر للتعليم", 
    email: "edu@example.com", 
    phone: "+974 5555 3333", 
    category: "تعليم", 
    platform: "all", 
    price: "99", 
    description: "نظام إدارة مدرسية متكامل للطلاب والمعلمين", 
    status: "pending", 
    date: "2026-01-17", 
    rating: 0 
  },
];

const AppsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredApps = mockApps.filter(app => {
    const matchesSearch = app.appName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.appNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.developer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">معتمد ومفعل</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">قيد المراجعة</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">مرفوض</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPlatformBadge = (platform: string) => {
    const platforms: { [key: string]: string } = {
      "ios": "iOS",
      "android": "Android",
      "both": "iOS & Android",
      "web": "Web",
      "all": "جميع المنصات"
    };
    return <Badge variant="outline">{platforms[platform] || platform}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">إدارة التطبيقات</h1>
        <p className="text-slate-600">متابعة واعتماد التطبيقات الجديدة في المتجر وإدارة الطلبات</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">إجمالي التطبيقات</CardTitle>
            <Smartphone className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-slate-500 mt-1">تطبيق في المتجر</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">طلبات المراجعة</CardTitle>
            <Clock className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-slate-500 mt-1">طلب جديد بانتظار الموافقة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">التطبيقات المميزة</CardTitle>
            <Star className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-slate-500 mt-1">تطبيق بتقييم عالي</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>تصفية الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-3 w-4 h-4 text-slate-400" />
              <Input
                placeholder="بحث عن تطبيق أو مطور..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                onClick={() => setStatusFilter("all")}
              >
                الكل
              </Button>
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                onClick={() => setStatusFilter("pending")}
              >
                قيد المراجعة
              </Button>
              <Button
                variant={statusFilter === "approved" ? "default" : "outline"}
                onClick={() => setStatusFilter("approved")}
              >
                المعتمدة
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Apps Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة التطبيقات المسجلة</CardTitle>
          <CardDescription>عرض شامل لجميع التطبيقات وحالة اعتمادها</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredApps.map((app) => (
              <div key={app.id} className="border rounded-lg p-4 hover:bg-slate-50 transition">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-semibold text-lg">{app.appName}</h3>
                      <span className="text-slate-500">({app.appNameEn})</span>
                      {getStatusBadge(app.status)}
                      {getPlatformBadge(app.platform)}
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-600 mb-2">
                      <p> المطور: {app.developer}</p>
                      <p> {app.email}</p>
                      <p> {app.phone}</p>
                      <p> التصنيف: {app.category}</p>
                      <p> السعر: {app.price === "0" ? "مجاني" : `${app.price} ريال`}</p>
                      {app.status === "approved" && (
                        <p className="flex items-center gap-1">
                           التقييم: {app.rating}/5
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>الوصف:</strong> {app.description}
                    </p>
                    <p className="text-xs text-slate-400">تاريخ التقديم: {app.date}</p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2">
                    <Button size="sm" variant="outline" className="w-full">
                      <Eye className="w-4 h-4 ml-2" />
                      عرض التفاصيل
                    </Button>
                    {app.status === "pending" && (
                      <>
                        <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                          <Check className="w-4 h-4 ml-2" />
                          اعتماد النشر
                        </Button>
                        <Button size="sm" variant="destructive" className="w-full">
                          <X className="w-4 h-4 ml-2" />
                          رفض
                        </Button>
                      </>
                    )}
                    {app.status === "approved" && (
                      <Button size="sm" variant="outline" className="w-full">
                        تعديل
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {filteredApps.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                لا توجد تطبيقات تطابق شروط البحث
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppsManagement;
