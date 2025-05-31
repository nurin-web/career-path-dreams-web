
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to our HTML website
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to Your Career Dreams Website...</h1>
        <p className="text-xl text-gray-600">If you're not redirected automatically, <a href="/index.html" className="text-blue-500 underline">click here</a></p>
      </div>
    </div>
  );
};

export default Index;
