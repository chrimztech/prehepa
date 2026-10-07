/**
 * Image with explicit dimensions (prevents layout shift) and lazy, async decoding by default.
 * Pass loading="eager" and fetchPriority="high" for above-the-fold images.
 */
export function PictureImage({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
  fetchPriority,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  );
}
