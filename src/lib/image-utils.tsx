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
 * Component to display images with WebP support detection.
 * Pass WebP source via srcWebp prop; falls back to src for unsupported browsers.
 */
export function PictureImage({
  src,
  srcWebp,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
}: {
  src: string;
  srcWebp?: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy";
}) {
  const supportsWebp = useWebpSupport();

  return (
    <img
      src={supportsWebp && srcWebp ? srcWebp : src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
    />
  );
}