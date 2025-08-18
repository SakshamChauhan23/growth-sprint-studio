import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LoadingSpinner from './components/LoadingSpinner.tsx'
import './index.css'

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration failed'));
  });
}

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
    <App />
  </Suspense>
);
