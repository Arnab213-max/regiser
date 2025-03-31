
import React, { useEffect, useRef } from 'react';

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateCursor);

    // Handle cursor entering interactive elements
    const handleMouseEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.mixBlendMode = 'difference';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.mixBlendMode = 'normal';
    };

    // Get all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .card');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-follower"></div>;
};

export default CursorFollower;
