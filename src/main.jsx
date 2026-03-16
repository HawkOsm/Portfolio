import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Silence common console warnings in development/production
const originalWarn = console.warn;
console.warn = (...args) => {
    if (args[0] && typeof args[0] === 'string') {
        if (args[0].includes('FBXLoader: Image type') ||
            args[0].includes('The Components object is deprecated') ||
            args[0].includes('drawElementsInstanced: Drawing to a destination rect')) {
            return;
        }
    }
    originalWarn(...args);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
