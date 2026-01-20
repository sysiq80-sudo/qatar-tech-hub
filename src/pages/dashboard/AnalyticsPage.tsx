import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Clock,
  Download,
  Filter,
  Calendar,
  Globe,
  MousePointer,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const AnalyticsPage: React.FC = () => {
  const topPages = [
    { page: 'الصفحة الرئيسية', visits: 12500, bounce: 45, avgTime: '3:24' },
    { page: 'المدونة', visits: 8900, bounce: 38, avgTime: '4:12' },
    { page: 'الخدمات', visits: 6700, bounce: 52, avgTime: '2:45' },
    { page: 'من نحن', visits: 4200, bounce: 61, avgTime: '1:58' },
    { page: 'اتصل بنا', visits: 3100, bounce: 28, avgTime: '2:15' },
  ];

  const trafficSources = [
    { source: 'البحث المباشر', percentage: 42, color: 'bg-cyan-500' },
    { source: 'وسائل التواصل', percentage: 28, color: 'bg-purple-500' },
    { source: 'الإحالات', percentage: 18, color: 'bg-blue-500' },
    { source: 'أخرى', percentage: 12, color: 'bg-slate-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
            التقارير والإحصائيات
          </h1>
          <p className="text-muted-foreground">تحليل شامل لأداء المنصة وسلوك المستخدمين</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            تصفية
          </Button>
          <Button className="bg-gradient-to-r from-amber-500 to-rose-500">
            <Download className="h-4 w-4 mr-2" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الزيارات</CardTitle>
            <Eye className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145.2K</div>
            <p className="text-xs text-green-500">+18.2% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">زوار فريدون</CardTitle>
            <Users className="h-4 w-4 text-rose-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.4K</div>
            <p className="text-xs text-green-500">+12.5% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">متوسط الوقت</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3:42</div>
            <p className="text-xs text-muted-foreground">دقائق لكل زيارة</p>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">معدل الارتداد</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42.8%</div>
            <p className="text-xs text-red-500">-3.2% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card text-card-foreground border">
          <CardHeader>
            <CardTitle>أكثر الصفحات زيارة</CardTitle>
            <CardDescription>
              تحليل أداء الصفحات خلال آخر 30 يوم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium">{page.page}</span>
                      <Badge variant="outline" className="text-xs">
                        {page.visits.toLocaleString()} زيارة
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>معدل الارتداد: {page.bounce}%</span>
                      <span>متوسط الوقت: {page.avgTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader>
            <CardTitle>مصادر الزيارات</CardTitle>
            <CardDescription>
              توزيع الزوار حسب مصدر الزيارة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{source.source}</span>
                    <span className="text-sm font-medium">{source.percentage}%</span>
                  </div>
                  <Progress value={source.percentage} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-accent/50">
                  <div className="text-2xl font-bold">67.5%</div>
                  <div className="text-xs text-muted-foreground mt-1">زوار جدد</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/50">
                  <div className="text-2xl font-bold">32.5%</div>
                  <div className="text-xs text-muted-foreground mt-1">زوار عائدون</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card text-card-foreground border">
        <CardHeader>
          <CardTitle>التوزيع الجغرافي</CardTitle>
          <CardDescription className="text-slate-400">
            أكثر الدول التي تأتي منها الزيارات
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border border-dashed border-slate-700 rounded-lg">
            <div className="text-center text-slate-500">
              <Globe className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>الخريطة الجغرافية ستظهر هنا</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
