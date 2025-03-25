
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Key } from 'lucide-react';

const NavigationBar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/access-key', label: 'Access Key', icon: <Key className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
            KeyForm
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <nav className="md:hidden flex items-center space-x-4 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center p-2 rounded-full transition-colors",
                location.pathname === item.path 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
