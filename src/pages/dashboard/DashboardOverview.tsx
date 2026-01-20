import React from 'react';
import { 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Ban,
  Upload
} from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    {
      title: "إجمالي المستخدمين",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-amber-600",
      bgColor: "bg-amber-100 dark:bg-amber-900/20"
    },
    {
      title: "الطلبات النشطة",
      value: "45",
      change: "-5%",
      icon: FileText,
      color: "text-rose-600",
      bgColor: "bg-rose-100 dark:bg-rose-900/20"
    },
    {
      title: "الاجتماعات القادمة",
      value: "8",
      change: "+2",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "معدل الإنجاز",
      value: "94%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: "أحمد محمد",
      action: "قدم طلب إجازة جديد",
      time: "منذ 15 دقيقة",
      icon: Clock,
      iconColor: "text-amber-600"
    },
    {
      id: 2,
      user: "سارة خالد",
      action: "أكملت تقرير المشروع السنوي",
      time: "منذ ساعة واحدة",
      icon: CheckCircle2,
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      user: "نظام النظام",
      action: "تم رفض طلب الوصول للمجلد",
      time: "منذ ساعتين",
      icon: Ban,
      iconColor: "text-rose-600"
    },
    {
      id: 4,
      user: "فريق المبيعات",
      action: "تحديث بيانات العملاء للربع الأول",
      time: "منذ 4 ساعات",
      icon: FileText,
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-card text-card-foreground border rounded-xl shadow-sm p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold font-sans">
                {stat.value}
              </h3>
              <p className={`text-xs mt-1 ${
                stat.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {stat.change} عن الشهر الماضي
              </p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-card text-card-foreground border rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">الأنشطة الأخيرة</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className={`mt-1 bg-slate-50 dark:bg-slate-800 p-2 rounded-full h-fit border`}>
                  <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    <span className="font-bold text-primary">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
