import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Check, X, TrendingUp, DollarSign, Clock } from "lucide-react";
import { useState } from "react";

// Mock data
const mockInvestors = [
  { 
    id: 1, 
    name: "أحمد العلي", 
    email: "ahmed@example.com", 
    phone: "+974 5555 1234", 
    company: "الدوحة للاستثمار", 
    location: "الدوحة", 
    investmentRange: "100k-500k", 
    interests: "التكنولوجيا المالية، الذكاء الاصطناعي", 
    experience: "خبير", 
    status: "pending", 
    date: "2026-01-15" 
  },
  { 
    id: 2, 
    name: "فاطمة محمد", 
    email: "fatima@example.com", 
    phone: "+974 5555 5678", 
    company: "صندوق ابتكار", 
    location: "لوسيل", 
    investmentRange: "500k-1m", 
    interests: "الصحة، التعليم", 
    experience: "محترف", 
    status: "approved", 
    date: "2026-01-12" 
  },
  { 
    id: 3, 
    name: "خالد المنصور", 
    email: "khaled@example.com", 
    phone: "+974 5555 9012", 
    company: "", 
    location: "الوكرة", 
    investmentRange: "50k-100k", 
    interests: "تجارة إلكترونية", 
    experience: "متوسط", 
    status: "pending", 
    date: "2026-01-18" 
  },
];

const InvestorsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredInvestors = mockInvestors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || investor.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">معتمد</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">قيد المراجعة</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">مرفوض</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">إدارة المستثمرين</h1>
        <p className="text-slate-600">متابعة طلبات الانضمام وإدارة شبكة المستثمرين المسجلين</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">إجمالي المستثمرين</CardTitle>
            <TrendingUp className="w-4 h-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-slate-500 mt-1">مستثمر نشط</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">طلبات الانتظار</CardTitle>
            <Clock className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-slate-500 mt-1">طلبات جديدة</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">رأس المال المتوقع</CardTitle>
            <DollarSign className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5M</div>
            <p className="text-xs text-slate-500 mt-1">ريال قطري (تقريبي)</p>
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
                placeholder="بحث عن مستثمر بالاسم أو البريد..."
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

      {/* Investors Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة المستثمرين المسجلين</CardTitle>
          <CardDescription>عرض تفاصيل وخيارات المراجعة</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredInvestors.map((investor) => (
              <div key={investor.id} className="border rounded-lg p-4 hover:bg-slate-50 transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{investor.name}</h3>
                      {getStatusBadge(investor.status)}
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                      <p> {investor.email}</p>
                      <p> {investor.phone}</p>
                      <p> {investor.company || "مستثمر مستقل"}</p>
                      <p> {investor.location}</p>
                      <p> نطاق: {investor.investmentRange} ريال</p>
                      <p> خبرة: {investor.experience}</p>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                      <strong>الاهتمامات:</strong> {investor.interests}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">تاريخ التسجيل: {investor.date}</p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2">
                    <Button size="sm" variant="outline" className="w-full">
                      <Eye className="w-4 h-4 ml-2" />
                      عرض
                    </Button>
                    {investor.status === "pending" && (
                      <>
                        <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                          <Check className="w-4 h-4 ml-2" />
                          موافقة
                        </Button>
                        <Button size="sm" variant="destructive" className="w-full">
                          <X className="w-4 h-4 ml-2" />
                          رفض
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestorsManagement;
