import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/contexts/DashboardContext';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Bell,
  Package,
  ChevronRight,
  Code,
  Sparkles,
  TrendingUp,
  Globe
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: 'زيارة الموقع',
    href: '/',
    icon: Globe,
  },
  {
    title: 'لوحة المعلومات',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'إدارة المستخدمين',
    href: '/dashboard/users',
    icon: Users,
    badge: '124',
  },
  {
    title: 'إدارة المستثمرين',
    href: '/dashboard/investors',
    icon: TrendingUp,
    badge: '3',
    badgeVariant: 'secondary',
  },
  {
    title: 'إدارة التطبيقات',
    href: '/dashboard/apps',
    icon: Package,
    badge: '3',
  },
  {
    title: 'التقارير والإحصائيات',
    href: '/dashboard/analytics',
    icon: BarChart3,
    badge: 'جديد',
    badgeVariant: 'secondary',
  },
  {
    title: 'الإشعارات',
    href: '/dashboard/notifications',
    icon: Bell,
    badge: '5',
    badgeVariant: 'destructive',
  },
  {
    title: 'واجهات برمجية API',
    href: '/dashboard/api',
    icon: Code,
  },
  {
    title: 'الإعدادات',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export const DashboardSidebar: React.FC = () => {
  const { sidebarOpen } = useDashboard();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (href: string) => {
    setExpandedItems(prev =>
      prev.includes(href) ? prev.filter(item => item !== href) : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.href);
    const active = isActive(item.href);

    return (
      <div key={item.href}>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start gap-3 mb-1 transition-all duration-200',
            level > 0 && 'pr-8',
            active
              ? 'bg-gradient-to-r from-yellow-500/10 to-amber-500/10 text-yellow-400 border-r-2 border-yellow-400'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          )}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.href);
            }
          }}
          asChild={!hasChildren}
        >
          {hasChildren ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <item.icon className={cn('h-5 w-5', active && 'text-yellow-400')} />
                <span>{item.title}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <Badge variant={item.badgeVariant || 'default'} className="text-xs">
                    {item.badge}
                  </Badge>
                )}
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isExpanded && 'rotate-90'
                  )}
                />
              </div>
            </div>
          ) : (
            <Link to={item.href} className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <item.icon className={cn('h-5 w-5', active && 'text-yellow-400')} />
                <span>{item.title}</span>
              </div>
              {item.badge && (
                <Badge variant={item.badgeVariant || 'default'} className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </Link>
          )}
        </Button>

        {hasChildren && isExpanded && (
          <div className="pr-2 space-y-1 my-1">
            {item.children!.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={cn(
        'fixed right-0 top-16 z-40 h-[calc(100vh-4rem)] transition-all duration-300',
        'bg-gradient-to-b from-[#8B1538] via-[#7A1230] to-[#691028] border-l border-rose-900',
        sidebarOpen ? 'w-64' : 'w-0'
      )}
    >
      <ScrollArea className="h-full px-3 py-4">
        <div className="space-y-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white">
              القائمة الرئيسية
            </h2>
            <div className="space-y-1">
              {navItems.map(item => renderNavItem(item))}
            </div>
          </div>


        </div>
      </ScrollArea>
    </aside>
  );
};
