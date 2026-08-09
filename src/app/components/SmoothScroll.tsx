"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && (href.startsWith('/#') || href.startsWith('#'))) {
        e.preventDefault();
        
        const targetId = href.replace('/#', '').replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const startPosition = window.scrollY;
          const distance = targetPosition - startPosition;
          
          // Duration in milliseconds (higher = slower). 1500ms = 1.5 seconds
          const duration = 1500; 
          let start: number | null = null;
          
          // Smooth easing function
          const easeInOutCubic = (t: number) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          };

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            const percentage = Math.min(progress / duration, 1);
            const easeValue = easeInOutCubic(percentage);
            
            window.scrollTo(0, startPosition + distance * easeValue);
            
            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              window.history.pushState(null, '', '#' + targetId);
            }
          };

          window.requestAnimationFrame(step);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return null;
}
