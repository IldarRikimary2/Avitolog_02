import React, { Suspense, lazy } from 'react';

// Создаем компонент для ленивой загрузки изображений
const LazyImageLoader = lazy(() => import('./LazyImageLoader'));

// Обертка для изображения
function LazyImage({ src, alt, className, style, ...restProps }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyImageLoader src={src} alt={alt} className={className} style = {style} {...restProps} />
        </Suspense>
    );
}

export default LazyImage;
