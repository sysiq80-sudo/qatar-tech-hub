import React from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useDashboard } from '@/contexts/DashboardContext';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar } from './DashboardSidebar';

export const DashboardLayout: React.FC = () => {
  const { sidebarOpen } = useDashboard();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-br dark:from-[#2D0A14] dark:via-[#1F0710] dark:to-[#2D0A14]">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main
        className={cn(
          'transition-all duration-300 pt-16',
          sidebarOpen ? 'mr-64' : 'mr-0'
        )}
      >
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </main>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
      </div>
    </div>
  );
};
