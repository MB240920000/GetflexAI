import { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
  }
}

export default function Chatbot() {
  useEffect(() => {
    // Initialize chatbot configuration
    window.VG_CONFIG = {
      ID: "toxvqiq0dir4smid",
      region: 'eu',
      render: 'popup',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
      ]
    };

    // Create and append script
    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}