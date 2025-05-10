
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !username) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }
    
    const success = await signup(email, password, username);
    
    if (success) {
      toast({
        title: "Success",
        description: "Account created successfully",
      });
      navigate("/");
    } else {
      toast({
        title: "Error",
        description: "Email already in use",
        variant: "destructive",
      });
    }
  };

  const handleGoogleSignUp = () => {
    toast({
      title: "Google Sign Up",
      description: "Google signup initiated (demo only)",
    });
  };

  const handleFacebookSignUp = () => {
    toast({
      title: "Facebook Sign Up",
      description: "Facebook signup initiated (demo only)",
    });
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-teal-50 to-teal-500">
      <div className="w-full max-w-md px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/1aba0f37-a68e-43fa-94b6-b91c3a21ecfd.png" 
            alt="Yolo Logo" 
            className="h-16"
          />
        </div>

        <h1 className="text-2xl font-semibold text-teal-600 text-center mb-8">Sign Up</h1>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-b border-teal-500 rounded-none px-0 focus-visible:ring-0"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-teal-500 rounded-none px-0 focus-visible:ring-0"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b border-teal-500 rounded-none px-0 pr-10 focus-visible:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3"
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={handleGoogleSignUp} 
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google" 
              className="h-8 w-8" 
            />
          </button>
          <button 
            onClick={handleFacebookSignUp} 
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
              alt="Facebook" 
              className="h-8 w-8" 
            />
          </button>
        </div>

        <div className="mt-8 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-500 font-medium">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
