"use client"; // Ensure the component is client-side

import { useEffect } from 'react';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void; // Add this line to extend the Window interface
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics only if it is available on the window object
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', 'G-1FBV4JKMGD', {
          page_path: url,
        });
      }
    };

    // Track the first page load
    if (typeof window !== 'undefined' && window.location.pathname) {
      handleRouteChange(window.location.pathname);
    }

    // Track route changes using the browser's history API
    const handlePopState = () => {
      handleRouteChange(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null; // No UI, just logic for tracking
};

export default GoogleAnalytics;