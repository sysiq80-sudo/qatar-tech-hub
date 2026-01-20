import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Code,
  Copy,
  Check,
  Key,
  Terminal,
  Book,
  Shield,
  Activity,
  RefreshCw,
  Eye,
  EyeOff,
  Plus,
  Trash2,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  requests: number;
  status: 'active' | 'inactive';
}

const mockApiKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Production API',
    key: 'qth_live_8xK2mP9nQ4rL7sW1',
    created: '2024-01-15',
    lastUsed: '2024-01-20T10:30:00',
    requests: 45234,
    status: 'active',
  },
  {
    id: '2',
    name: 'Development API',
    key: 'qth_test_3vB5nC8mR6tJ2kL9',
    created: '2024-01-10',
    lastUsed: '2024-01-19T15:20:00',
    requests: 12890,
    status: 'active',
  },
  {
    id: '3',
    name: 'Mobile App API',
    key: 'qth_live_7yD4sE1mL9pK5wN3',
    created: '2024-01-05',
    lastUsed: '2024-01-18T09:45:00',
    requests: 8765,
    status: 'inactive',
  },
];

export const ApiPage: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(mockApiKeys);
  const [copiedKey, setCopiedKey] = useState<string>('');
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(''), 2000);
  };

  const toggleKeyVisibility = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const maskKey = (key: string) => {
    return key.slice(0, 15) + '•'.repeat(10);
  };

  const codeExample = `// مثال على استخدام API
const response = await fetch('https://api.qatar-tech-hub.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent mb-2">
            واجهات برمجية API
          </h1>
          <p className="text-muted-foreground">
            إدارة مفاتيح API والوصول للوثائق التقنية
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Book className="h-4 w-4 mr-2" />
            التوثيق
          </Button>
          <Button className="bg-gradient-to-r from-amber-500 to-rose-500">
            <Plus className="h-4 w-4 mr-2" />
            مفتاح جديد
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">المفاتيح النشطة</CardTitle>
            <Key className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {apiKeys.filter(k => k.status === 'active').length}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">الطلبات اليومية</CardTitle>
            <Activity className="h-4 w-4 text-rose-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4K</div>
            <p className="text-xs text-muted-foreground">+8.2% من الأمس</p>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">وقت الاستجابة</CardTitle>
            <RefreshCw className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124ms</div>
            <p className="text-xs text-muted-foreground">متوسط</p>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">نسبة النجاح</CardTitle>
            <Shield className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.8%</div>
            <p className="text-xs text-muted-foreground">آخر 24 ساعة</p>
          </CardContent>
        </Card>
      </div>

      {/* API Keys Management */}
      <Card className="bg-card text-card-foreground border">
        <CardHeader>
          <CardTitle>مفاتيح API الخاصة بك</CardTitle>
          <CardDescription>
            استخدم هذه المفاتيح للوصول إلى واجهات API البرمجية
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاسم</TableHead>
                <TableHead>المفتاح</TableHead>
                <TableHead>تاريخ الإنشاء</TableHead>
                <TableHead>آخر استخدام</TableHead>
                <TableHead>الطلبات</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead className="text-left">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.map(apiKey => (
                <TableRow key={apiKey.id}>
                  <TableCell className="font-medium">{apiKey.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {showKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleKeyVisibility(apiKey.id)}
                      >
                        {showKeys[apiKey.id] ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(apiKey.key, apiKey.id)}
                      >
                        {copiedKey === apiKey.id ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {new Date(apiKey.created).toLocaleDateString('ar')}
                  </TableCell>
                  <TableCell className="text-sm">
                    {new Date(apiKey.lastUsed).toLocaleString('ar')}
                  </TableCell>
                  <TableCell>{apiKey.requests.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      variant={apiKey.status === 'active' ? 'default' : 'secondary'}
                    >
                      {apiKey.status === 'active' ? 'نشط' : 'غير نشط'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-left">
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Documentation & Examples */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-card text-card-foreground border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              مثال على الاستخدام
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeExample}</code>
              </pre>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 left-2"
                onClick={() => copyToClipboard(codeExample, 'code')}
              >
                {copiedKey === 'code' ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              نقاط النهاية (Endpoints)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm font-mono">GET /api/v1/users</code>
                  <Badge variant="outline">GET</Badge>
                </div>
                <p className="text-xs text-muted-foreground">جلب قائمة المستخدمين</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm font-mono">POST /api/v1/users</code>
                  <Badge variant="outline">POST</Badge>
                </div>
                <p className="text-xs text-muted-foreground">إضافة مستخدم جديد</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm font-mono">GET /api/v1/analytics</code>
                  <Badge variant="outline">GET</Badge>
                </div>
                <p className="text-xs text-muted-foreground">جلب بيانات التحليلات</p>
              </div>
              <Button variant="link" className="w-full">
                <Book className="h-4 w-4 mr-2" />
                عرض كامل التوثيق
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiPage;
