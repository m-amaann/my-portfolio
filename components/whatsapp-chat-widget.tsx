// components/WhatsAppChatWidget.tsx
'use client';

import { useEffect } from 'react';

export default function WhatsAppChatWidget() {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.dataset.useServiceCore = 'true'; 
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="elfsight-app-94476872-827d-474f-934a-0f7e58360c0e" data-elfsight-app-lazy></div>
    </div>
  );
}
