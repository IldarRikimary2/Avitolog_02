import React, { useState } from 'react'

const LazyLoaded = (props) => {
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };
    return (
        <img
            src={props.src}
            alt={props.alt}
            loading="lazy"
            onLoad={handleImageLoad}
            className={`lazy-image ${loaded ? 'loaded' : ''} ${props.className}`}
        />
    )
}

export default LazyLoaded
