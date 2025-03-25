
import React, { useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Lock, KeyRound, ArrowRight } from 'lucide-react';

const AccessKeyForm = () => {
  const [accessKey, setAccessKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!accessKey) {
      toast.error('Please enter an access key');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      toast.success('Access key submitted successfully');
      setLoading(false);
      setAccessKey('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 flex justify-center">
        <div className="rounded-full p-3 bg-primary/10 animate-pulse-subtle">
          <KeyRound className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="staggered-fade-in space-y-6">
        <div className="space-y-2">
          <label 
            htmlFor="accessKey" 
            className="text-sm font-medium text-foreground/80 flex items-center gap-2"
          >
            <Lock className="h-4 w-4" />
            Access Key
          </label>
          
          <div className={cn(
            "relative rounded-xl overflow-hidden transition-all duration-300",
            focused ? "ring-2 ring-primary/50 shadow-lg" : "shadow"
          )}>
            <input
              id="accessKey"
              type="text"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Enter your access key"
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 outline-none form-input-transition"
              disabled={loading}
            />
          </div>
          
          <p className="text-xs text-muted-foreground mt-2">
            Please enter the access key provided to you to continue.
          </p>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full relative rounded-xl bg-primary text-primary-foreground font-medium",
            "py-3 px-4 flex items-center justify-center gap-2 button-hover-effect",
            loading && "opacity-90"
          )}
        >
          <span className={cn(
            "transition-transform duration-300 ease-in-out",
            !loading && "group-hover:translate-x-1"
          )}>
            {loading ? 'Submitting...' : 'Submit Access Key'}
          </span>
          {!loading && <ArrowRight className="h-4 w-4" />}
          
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary">
              <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default AccessKeyForm;
