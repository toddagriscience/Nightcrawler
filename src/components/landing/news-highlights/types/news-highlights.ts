// Copyright Todd LLC, All rights reserved.

/**
 * News highlight card props
 * @property {React.RefObject<HTMLDivElement>} carouselRef - The carousel reference
 * @property {boolean} isDark - Whether the theme is dark
 */
export interface NewsHighlightsProps {
  carouselRef?: React.RefObject<HTMLDivElement>;
  isDark?: boolean;
}
