import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { DashboardProvider } from "@/contexts/DashboardContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { LoginPage } from "@/pages/auth/LoginPage";
import DashboardOverview from "@/pages/dashboard/DashboardOverview";
import { UsersManagement } from "@/pages/dashboard/UsersManagement";
import { AnalyticsPage } from "@/pages/dashboard/AnalyticsPage";
import { SettingsPage } from "@/pages/dashboard/SettingsPage";
import NotificationsPage from "@/pages/dashboard/NotificationsPage";
import ApiPage from "@/pages/dashboard/ApiPage";
import InvestorsManagement from "@/pages/dashboard/InvestorsManagement";
import AppsManagement from "@/pages/dashboard/AppsManagement";
import InvestorRegistration from "@/pages/public/InvestorRegistration";
import AddAppToMarketplace from "@/pages/public/AddAppToMarketplace";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <DashboardProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/investor-registration" element={<InvestorRegistration />} />
              <Route path="/add-app" element={<AddAppToMarketplace />} />

              {/* Protected Dashboard Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardOverview />} />
                <Route path="users/*" element={<UsersManagement />} />
                <Route path="investors/*" element={<InvestorsManagement />} />
                <Route path="apps/*" element={<AppsManagement />} />
                <Route path="analytics/*" element={<AnalyticsPage />} />
                <Route path="notifications/*" element={<NotificationsPage />} />
                <Route path="api/*" element={<ApiPage />} />
                <Route path="settings/*" element={<SettingsPage />} />
              </Route>

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DashboardProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
