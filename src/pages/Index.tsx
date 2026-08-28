
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-foreground mb-8">Cute Cat</h1>
      <img
        src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop"
        alt="A cute cat"
        className="rounded-lg shadow-lg max-w-md w-full"
      />
    </div>
  );
};

export default Index;
