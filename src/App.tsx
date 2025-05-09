
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatPage from "./pages/Chat";
import PostPage from "./pages/Post";
import ActivityPage from "./pages/Activity";
import ProfilePage from "./pages/Profile";

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
            path="/chat" 
            element={
              <AppLayout>
                <ChatPage />
              </AppLayout>
            } 
          />
          <Route 
            path="/post" 
            element={
              <AppLayout>
                <PostPage />
              </AppLayout>
            } 
          />
          <Route 
            path="/activity" 
            element={
              <AppLayout>
                <ActivityPage />
              </AppLayout>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <AppLayout>
                <ProfilePage />
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
