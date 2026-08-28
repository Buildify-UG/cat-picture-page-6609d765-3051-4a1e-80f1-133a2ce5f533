
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-foreground mb-8">Cute Cats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
        <img
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop"
          alt="A cute cat"
          className="rounded-lg shadow-lg w-full"
        />
        <img
          src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&h=600&fit=crop"
          alt="A tabby cat"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default Index;
