import React from 'react';

function LazyImageLoader({ src, alt, className, style, ...restProps }) {
  return <img src={src} alt={alt} className={className} style={style} {...restProps} />;
}

export default LazyImageLoader;
