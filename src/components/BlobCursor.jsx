import { useTrail, animated } from '@react-spring/web'
import { useRef, useEffect, useCallback } from 'react';
import './BlobCursor.css';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

export default function BlobCursor({ blobType = 'circle', fillColor = '#2b00FF' }) {
  // Trail for the blobs following the cursor
  const [trail, api] = useTrail(3, i => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));

  const ref = useRef();

  // Update position based on the reference element's location
  const updatePosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    }
    return { left: 0, top: 0 };
  }, []);

  // Handle mouse and touch move events for cursor following
  const handleMove = (e) => {
    const { left, top } = updatePosition();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    api.start({ xy: [x - left, y - top] });
  };

  // Handle resize to update position
  useEffect(() => {
    const handleResize = () => {
      updatePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updatePosition]);

  return (
    <div className="container">
      {/* Filter for blurry effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="blob">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10"
          />
        </filter>
      </svg>

      <div
        ref={ref}
        className="main"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        style={{ position: 'relative', zIndex: 9999 }}
      >
        {/* Map trail to create animated blobs */}
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{
              transform: props.xy.to(trans),
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}
