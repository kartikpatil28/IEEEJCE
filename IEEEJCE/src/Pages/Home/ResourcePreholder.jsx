import { useEffect } from 'react';

// This component preloads critical resources in the background
const ResourcePreloader = ({ resources = [] }) => {
  useEffect(() => {
    // Process images to preload
    const preloadImages = () => {
      resources.forEach(resource => {
        if (resource.type === 'image') {
          const img = new Image();
          img.src = resource.src;
        }
      });
    };

    // Add other resource types as needed (fonts, scripts, etc.)
    const preloadOtherResources = () => {
      resources.forEach(resource => {
        if (resource.type === 'font') {
          // Create a preload link for fonts
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.src;
          link.as = 'font';
          link.type = 'font/woff2'; // Adjust as needed
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };

    // Execute preloading
    preloadImages();
    preloadOtherResources();

    // Cleanup function not needed for preloading
  }, [resources]);

  // This component doesn't render anything
  return null;
};

export default ResourcePreloader;