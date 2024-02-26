import React, { useState, useEffect, useRef } from 'react';
import './ScrollMovingObject.css';

const ScrollMovingImage = () => {
    const svgRef = useRef(null);
    const [scroll, setScroll] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [pathLength, setPathLength] = useState(0);
    const [pathElement, setPathElement] = useState(null);
    const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const parentElementRef = useRef(null);
    const [isParentVisible, setIsParentVisible] = useState(false);

    // Используйте useEffect для доступа к svg элементу после его отрисовки
    useEffect(() => {
        console.log(svgRef.current); // Проверка, что svgRef ссылается на ваш элемент
    }, []);

    useEffect(() => {
        const path = document.querySelector('path');
        if (path) {
            setPathElement(path);
            const length = path.getTotalLength();
            setPathLength(length);
            console.log(pathLength)
        }
    }, [scrollY, isParentVisible]);


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const scrollPosition = entry.intersectionRect.top;
                        setScrollY(scrollPosition); // Установка значения scrollY
                        console.log(scrollY)
                        setIsParentVisible(true);
                    } else {
                        setIsParentVisible(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (parentElementRef.current) {
            observer.observe(parentElementRef.current);
        }

        return () => {
            if (parentElementRef.current) {
                observer.unobserve(parentElementRef.current);
            }
        };
    }, [scroll]);

    // Изменение позиции шарика
    useEffect(() => {
        if (isParentVisible) {
            const windowHeight = window.innerHeight;

            if (pathElement && isParentVisible && Number.isFinite(scrollY) && Number.isFinite(windowHeight)) {
                const point = pathElement.getPointAtLength((scrollY / windowHeight) * pathLength);
                setBallPosition({ x: point.x, y: point.y });
            }
        }
    }, [scrollY, isParentVisible, pathElement, pathLength]);

    // Вращение
    useEffect(() => {
        const handleRotation = () => {
            setRotation((prevRotation) => prevRotation + 1);
        };

        const rotationInterval = setInterval(handleRotation, 40);

        return () => {
            clearInterval(rotationInterval);
        };
    }, []);

    return (
        <div ref={parentElementRef} className="snake absolute top-[19rem] left-[32rem] z-50 2xl:block" style={{ overflow: 'auto' }}>
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 613 283"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Path SVG */}
                <path
                    d="M20 20H560.8C572.19 20 577.885 20 582.219 22.2517C585.872 24.1492 588.851 27.1276 590.748 30.7805C593 35.1153 593 40.8102 593 52.2V263"
                    stroke="#2DE184"
                    strokeWidth="40"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
                {/* Ball and its number */}
                <g transform={`translate(${ballPosition.x},${ballPosition.y}) rotate(${rotation})`}>
                    <circle cx="0" cy="0" r="20" fill="white" />
                    <text
                        x="1"
                        y="2"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill="#2DE184"
                        fontSize="20"
                        fontWeight="bold"
                    >
                        01
                    </text>
                </g>
            </svg>
            <p className='text-white'>ScrollY: {scrollY}</p>
        </div>
    );
};

export default ScrollMovingImage;
