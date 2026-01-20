import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Globe,
  Palette,
  Database,
  Mail,
  Key,
  Save,
  RefreshCw,
} from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const SettingsPage: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent mb-2">
            الإعدادات
          </h1>
          <p className="text-muted-foreground">إدارة إعدادات النظام والتخصيصات</p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-gradient-to-r from-amber-500 to-rose-500"
        >
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? 'جارٍ الحفظ...' : 'حفظ التغييرات'}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-card border">
          <TabsTrigger value="general">
            <SettingsIcon className="h-4 w-4 mr-2" />
            عام
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            الأمان
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            الإشعارات
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Palette className="h-4 w-4 mr-2" />
            المظهر
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card className="bg-card text-card-foreground border">
            <CardHeader>
              <CardTitle>الإعدادات العامة</CardTitle>
              <CardDescription>
                إدارة المعلومات الأساسية للمنصة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="siteName">
                    اسم الموقع
                  </Label>
                  <Input
                    id="siteName"
                    defaultValue="Qatar Tech Hub"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="siteDescription">
                    وصف الموقع
                  </Label>
                  <Textarea
                    id="siteDescription"
                    defaultValue="منصة قطرية تقنية رائدة"
                    rows={3}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="language">
                    اللغة الافتراضية
                  </Label>
                  <Select defaultValue="ar">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ar">العربية</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="timezone">
                    المنطقة الزمنية
                  </Label>
                  <Select defaultValue="asia-qatar">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-qatar">قطر (GMT+3)</SelectItem>
                      <SelectItem value="asia-riyadh">السعودية (GMT+3)</SelectItem>
                      <SelectItem value="asia-dubai">الإمارات (GMT+4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>وضع الصيانة</Label>
                    <p className="text-sm text-muted-foreground">تعطيل الوصول مؤقتاً للصيانة</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>التسجيل المفتوح</Label>
                    <p className="text-sm text-muted-foreground">السماح بتسجيل مستخدمين جدد</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>التحقق من البريد</Label>
                    <p className="text-sm text-muted-foreground">طلب تحقق البريد للمستخدمين الجدد</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Card className="bg-card text-card-foreground border">
            <CardHeader>
              <CardTitle>إعدادات الأمان</CardTitle>
              <CardDescription>
                تعزيز حماية النظام والبيانات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>المصادقة الثنائية</Label>
                    <p className="text-sm text-muted-foreground">إضافة طبقة أمان إضافية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تسجيل النشاطات</Label>
                    <p className="text-sm text-muted-foreground">حفظ سجل جميع العمليات</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تشفير البيانات</Label>
                    <p className="text-sm text-muted-foreground">تشفير البيانات الحساسة</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>تحديث تلقائي للأمان</Label>
                    <p className="text-sm text-muted-foreground">تطبيق التحديثات الأمنية تلقائياً</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="sessionTimeout">
                    مهلة الجلسة (دقائق)
                  </Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    defaultValue="30"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="maxLoginAttempts">
                    الحد الأقصى لمحاولات تسجيل الدخول
                  </Label>
                  <Input
                    id="maxLoginAttempts"
                    type="number"
                    defaultValue="5"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="passwordMinLength">
                    الحد الأدنى لطول كلمة المرور
                  </Label>
                  <Input
                    id="passwordMinLength"
                    type="number"
                    defaultValue="8"
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium mb-1">
                      مستوى الأمان: مرتفع
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      النظام محمي بإعدادات أمان قوية. آخر فحص أمني: منذ ساعتين
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card className="bg-card text-card-foreground border">
            <CardHeader>
              <CardTitle>إعدادات الإشعارات</CardTitle>
              <CardDescription>
                التحكم في تنبيهات وإشعارات النظام
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>إشعارات البريد</Label>
                    <p className="text-sm text-muted-foreground">إرسال إشعارات عبر البريد الإلكتروني</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>الإشعارات الفورية</Label>
                    <p className="text-sm text-muted-foreground">عرض إشعارات داخل النظام</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>إشعارات المستخدمين الجدد</Label>
                    <p className="text-sm text-muted-foreground">عند تسجيل مستخدم جديد</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-300">تنبيهات الأمان</Label>
                    <p className="text-sm text-slate-500">عند اكتشاف نشاط مشبوه</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-300">إشعارات النظام</Label>
                    <p className="text-sm text-slate-500">تحديثات وصيانة النظام</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-300">تقارير أسبوعية</Label>
                    <p className="text-sm text-slate-500">ملخص أسبوعي للنشاطات</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-4">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">إعدادات المظهر</CardTitle>
              <CardDescription className="text-slate-400">
                تخصيص شكل ومظهر لوحة التحكم
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="theme" className="text-slate-300">
                    المظهر
                  </Label>
                  <Select defaultValue="dark">
                    <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">فاتح</SelectItem>
                      <SelectItem value="dark">داكن</SelectItem>
                      <SelectItem value="system">تلقائي</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="primaryColor" className="text-slate-300">
                    اللون الأساسي
                  </Label>
                  <div className="flex gap-2">
                    {['cyan', 'purple', 'blue', 'green', 'red'].map(color => (
                      <button
                        key={color}
                        className={`w-10 h-10 rounded-lg bg-${color}-500 hover:scale-110 transition-transform`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="fontSize" className="text-slate-300">
                    حجم الخط
                  </Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">صغير</SelectItem>
                      <SelectItem value="medium">متوسط</SelectItem>
                      <SelectItem value="large">كبير</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-slate-800" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-300">الرسوم المتحركة</Label>
                    <p className="text-sm text-slate-500">تفعيل التأثيرات الحركية</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-300">الشريط الجانبي المصغر</Label>
                    <p className="text-sm text-slate-500">تصغير القائمة الجانبية افتراضياً</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
