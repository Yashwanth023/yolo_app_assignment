
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatPage from "./pages/Chat";
import PostPage from "./pages/Post";
import ActivityPage from "./pages/Activity";
import ProfilePage from "./pages/Profile";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Move from "./pages/Move";
import Community from "./pages/Community";
import LocalBusiness from "./pages/LocalBusiness";
import LocalCouncil from "./pages/LocalCouncil";

const queryClient = new QueryClient();

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Protected routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Index />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/chat" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <ChatPage />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/post" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <PostPage />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/activity" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <ActivityPage />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <ProfilePage />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/move" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Move />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/community" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Community />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/local-business" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <LocalBusiness />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/local-council" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <LocalCouncil />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="*" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <NotFound />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
