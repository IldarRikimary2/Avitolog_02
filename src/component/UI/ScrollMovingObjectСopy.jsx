import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollMovingObject = () => {
  const [scrollY, setScrollY] = useState(0);
  const [objectY, setObjectY] = useState(0);
  const [inViewRef, inView] = useInView({
    threshold: 0.5, // Порог видимости
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Обновляем позицию объекта в зависимости от положения скролла
      const newY = window.scrollY*0.06;
      console.log(newY)
      setObjectY(newY);
    }
  }, [scrollY, inView]);

  return (
    <div ref={inViewRef} className='relative'>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          position: 'absolute',
          top: `${objectY}px`,
        }}
      />
    </div>
  );
};

export default ScrollMovingObject;
