import { type ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const WEBP_EXTS = new Set(['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']);

function toWebpSrc(src: string): string | undefined {
  try {
    const dot = src.lastIndexOf('.');
    if (dot === -1) return undefined;
    const ext = src.slice(dot);
    if (!WEBP_EXTS.has(ext)) return undefined;
    return src.slice(0, dot) + '.webp';
  } catch {
    return undefined;
  }
}

export default function OptimizedImage({ src, alt, ...rest }: OptimizedImageProps) {
  const webpSrc = toWebpSrc(src);
  if (!webpSrc) {
    return <img src={src} alt={alt} {...rest} />;
  }
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} {...rest} />
    </picture>
  );
}
