import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
      {/* Simple logo */}
      <div className="mb-12">
        <img
          src="src/asset/Logos/JCE.png"
          alt="Logo"
          className="w-24 h-24 object-contain"
        />
      </div>
      
      {/* Clean progress bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full mb-4">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Simple percentage text */}
      <div className="text-gray-600 text-sm font-medium">
        {progress}%
      </div>
    </div>
  );
};

export default Loading;