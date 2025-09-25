// Copyright Todd LLC, All rights reserved.

/**
 * Props for the NewsCard component
 * @param {string} title - The title of the news card
 * @param {string} excerpt - The headline of the news card
 * @param {string} [source] - The person/entity who wrote this news article. Examples: Todd, Bob Bobberson, Journal, CNN.
 * @param {string} date - The date of the news card
 * @param {boolean} [isDark] - Whether the news card is dark
 * @param {string} [className] - The class name of the news card
 * @param {string} link - The external link to the news article. This can either be an HTTPS link (https://google.com) or a link to this website (/news/articles/my-awesome-article)
 * @param {Object} image - The object containing the information for the thumbnail
 * @param {string} image.url - The URL for the thumbnail
 * @param {string} image.alt - The alt text for the thumbnail. This may not always be required.
 */
export default interface NewsCardProps {
  title: string;
  excerpt: string;
  source?: string;
  date: string;
  isDark?: boolean;
  className?: string;
  link: string;
  image: {
    url: string;
    alt: string;
  };
}
