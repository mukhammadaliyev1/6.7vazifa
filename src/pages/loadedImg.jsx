import React, { useState } from 'react';

const ImageWithFallback = ({ src, fallbackSrc, alt }) => {
  const [imgSrc, setImgSrc] = useState(fallbackSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
    setImgSrc(src);
  };

  return (
    <div>
      <img
        src={isLoaded ? src : fallbackSrc}
        alt={alt}
        onLoad={handleImageLoad}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
};

export default ImageWithFallback;
