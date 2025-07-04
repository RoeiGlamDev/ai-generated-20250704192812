// components/ImageComponent.js
import Image from 'next/image';

function ImageComponent({ src, alt, width, height }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="image"
    />
  );
}

export default ImageComponent;