
import React from 'react';
import { motion } from 'framer-motion';
import AccessKeyForm from '@/components/AccessKeyForm';
import NavigationBar from '@/components/NavigationBar';

const AccessKey = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/50">
      <NavigationBar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              Security Check
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Enter Your Access Key
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              To continue, please enter the access key that was provided to you. 
              This helps us ensure that only authorized users can access our platform.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6 md:p-8"
          >
            <AccessKeyForm />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Need help? Please contact support for assistance.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AccessKey;
