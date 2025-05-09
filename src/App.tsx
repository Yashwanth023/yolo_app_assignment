
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SchedulePage from "./pages/Schedule";
import NewsPage from "./pages/News";
import MusicPage from "./pages/Music";
import SettingsPage from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <AppLayout>
                <Index />
              </AppLayout>
            } 
          />
          <Route 
            path="/schedule" 
            element={
              <AppLayout>
                <SchedulePage />
              </AppLayout>
            } 
          />
          <Route 
            path="/news" 
            element={
              <AppLayout>
                <NewsPage />
              </AppLayout>
            } 
          />
          <Route 
            path="/music" 
            element={
              <AppLayout>
                <MusicPage />
              </AppLayout>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <AppLayout>
                <SettingsPage />
              </AppLayout>
            } 
          />
          <Route 
            path="*" 
            element={
              <AppLayout>
                <NotFound />
              </AppLayout>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
