import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });
  const isHoverRef = useRef(false);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrameId;

    const onMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      const target = e.target;
      if (
        target &&
        typeof target.closest === 'function' &&
        (target.closest('a') ||
         target.closest('button') ||
         target.closest('.project-visual-frame') ||
         target.closest('.service-summary-bar') ||
         target.closest('input') ||
         target.closest('select') ||
         target.closest('textarea'))
      ) {
        if (!isHoverRef.current) {
          isHoverRef.current = true;
          ringRef.current?.classList.add('cursor-hover-ring');
          dotRef.current?.classList.add('cursor-hover-dot');
        }
      } else {
        if (isHoverRef.current) {
          isHoverRef.current = false;
          ringRef.current?.classList.remove('cursor-hover-ring');
          dotRef.current?.classList.remove('cursor-hover-dot');
        }
      }
    };

    const updatePosition = () => {
      const { x: targetX, y: targetY } = posRef.current;
      trailRef.current.x += (targetX - trailRef.current.x) * 0.18;
      trailRef.current.y += (targetY - trailRef.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
