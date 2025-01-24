// src/components/OmnisendScript.tsx
"use client"; // Mark this component as client-side to allow useEffect

import { useEffect } from 'react';

declare global {
  interface Window {
    omnisend: any[];
  }
}

export default function OmnisendScript() {
  useEffect(() => {
    // Initialize Omnisend if not already present
    window.omnisend = window.omnisend || [];
    window.omnisend.push(['accountID', '66bbd0fa3245832d9dfc9b77']);
    window.omnisend.push(['track', '$pageViewed']);

    // Load Omnisend script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://omnisnippet1.com/inshop/launcher-v2.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }, []);

  return null; // No need to render anything
}