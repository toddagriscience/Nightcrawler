// Copyright Todd LLC, All rights reserved.

'use client';

import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import PlaceholderImageProps from './types/placeholder-image';

/**
 * A robust image component with automatic fallback to a styled placeholder when the image fails to load.
 *
 * Features:
 * - Automatic error handling with graceful fallback
 * - Dark mode support with theme-appropriate colors
 * - Accessibility compliance with proper ARIA labels
 * - Uses Next.js Image component for optimization
 * - Custom fallback text and styling
 * - Lucide React icon for visual placeholder
 * - Maintains specified dimensions even on error
 * - Automatic retry on successful image load
 *
 * @param src - URL or path to the image source
 * @param alt - Alternative text for accessibility (used in both image and fallback)
 * @param width - Fixed width of the image in pixels
 * @param height - Fixed height of the image in pixels
 * @param className - Additional CSS classes to apply to the image or placeholder
 * @param fallbackText - Text to display in the placeholder when image fails (default: "Image")
 * @param isDark - Apply dark theme colors to the placeholder (default: false)
 * @returns Either a Next.js Image component or a styled placeholder div
 *
 * @example
 * ```tsx
 * <PlaceholderImage
 *   src="/images/article.jpg"
 *   alt="News article illustration"
 *   width={800}
 *   height={600}
 *   className="rounded-lg"
 *   fallbackText="Article Image"
 *   isDark={true}
 * />
 * ```
 */
const PlaceholderImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackText = 'Image',
  isDark = false,
}: PlaceholderImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div
        className={`max-w-[${width}px] max-h-[${height}px] flex h-[70vw] w-[70vw] items-center justify-center px-1 ${
          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-500'
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center">
          <ImageIcon className="mx-auto h-12 w-12" />
          <p className="mt-2 text-sm">{fallbackText}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      data-testid="rendered image"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className + ` max-w-[${width}px] max-h-[${height}px]`}
      onError={handleError}
      onLoad={() => setImageError(false)}
    />
  );
};

export default PlaceholderImage;
