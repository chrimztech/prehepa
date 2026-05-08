import { useEffect, useState } from "react";

/**
 * Custom hook to check if browser supports WebP images
 */
export function useWebpSupport() {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const testWebP = (callback: (result: boolean) => void) => {
      const img = new Image();
      img.onload = () => callback(img.width > 0 && img.height > 0);
      img.onerror = () => callback(false);
      img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
    };
    testWebP(setIsSupported);
  }, []);

  return isSupported;
}

/**
 * Component to display images with WebP support
 */
export function PictureImage({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy";
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
    />
  );
}