
import React, { useEffect } from 'react';
import Terminal from '@/components/Terminal';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    // Display a welcome toast that disappears quickly
    toast({
      title: "Terminal Ready",
      description: "Click anywhere to start typing commands.",
      duration: 3000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-1 flex flex-col">
        <Terminal />
      </main>
    </div>
  );
};

export default Index;
