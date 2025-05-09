
import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (email: string, password: string, username: string) => Promise<boolean>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('yolo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('yolo_users') || '[]');
    const userExists = users.find((u: any) => u.email === email && u.password === password);
    
    if (userExists) {
      const currentUser = {
        username: userExists.username,
        email: userExists.email
      };
      
      localStorage.setItem('yolo_user', JSON.stringify(currentUser));
      setUser(currentUser);
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const signup = async (email: string, password: string, username: string): Promise<boolean> => {
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('yolo_users') || '[]');
    
    // Check if user with email already exists
    if (users.some((u: any) => u.email === email)) {
      return false;
    }
    
    // Add new user
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('yolo_users', JSON.stringify(users));
    
    // Auto login after signup
    const currentUser = {
      username,
      email
    };
    
    localStorage.setItem('yolo_user', JSON.stringify(currentUser));
    setUser(currentUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('yolo_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
