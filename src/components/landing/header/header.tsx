// Copyright Todd LLC, All rights reserved.

'use client';

import { useTheme } from '@/context/theme/ThemeContext';
import { Link, usePathname } from '@/i18n/config';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { headerTheme } from './theme/header';
import { HeaderProps } from './types/header';

/**
 * Header component
 * @param {Object} props - The component props
 * @param {boolean} props.alwaysGlassy - Whether to always show the glassy effect
 * @param {boolean} props.isDark - Whether to use the dark theme
 * @returns {JSX.Element} - The header component
 */
const Header: React.FC<HeaderProps> = ({
  alwaysGlassy = false,
  isDark: propIsDark,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { isDark: contextIsDark } = useTheme();
  const t = useTranslations('header');

  // Use prop isDark if provided, otherwise use context
  const isDark = propIsDark !== undefined ? propIsDark : contextIsDark;

  // Get theme values for current mode
  const currentHeaderTheme = isDark
    ? headerTheme.header.dark
    : headerTheme.header.light;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (alwaysGlassy) return;

    // Much slower, more staggered scroll transition
    // Start transitioning at 20px, fully transitioned at 200px
    const scrollThreshold = 10;
    const fullTransitionThreshold = 50;

    if (latest > scrollThreshold) {
      // Calculate linear progress (0 to 1)
      const linearProgress = Math.min(
        (latest - scrollThreshold) /
          (fullTransitionThreshold - scrollThreshold),
        1
      );

      // Apply easing curve for more staggered effect (ease-out curve)
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);

      setScrollProgress(easedProgress);
      setScrolled(easedProgress > 0.6); // Only set scrolled to true when 60% through transition
    } else {
      setScrollProgress(0);
      setScrolled(false);
    }
  });

  const menuItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/who-we-are', label: t('navigation.whoWeAre') },
    { href: '/what-we-do', label: t('navigation.whatWeDo') },
    { href: '/impact', label: t('navigation.impact') },
    { href: '/news', label: t('navigation.news') },
    { href: '/careers', label: t('navigation.careers') },
  ];

  const showGlassy =
    alwaysGlassy ||
    scrolled ||
    (menuOpen && typeof window !== 'undefined' && window.innerWidth < 768);
  const showWordmark = showGlassy;

  // Create gradual background color based on scroll progress
  const getGradualBackground = () => {
    if (alwaysGlassy || menuOpen) return currentHeaderTheme.background;

    // Extract RGB values from theme background (assumes rgba format)
    const bgColor = currentHeaderTheme.background;
    // For rgba(0,0,0,0.1) format, increase the alpha based on scroll progress
    if (bgColor.includes('rgba')) {
      const match = bgColor.match(
        /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/
      );
      if (match) {
        const [, r, g, b, originalAlpha] = match;
        // Ensure minimum alpha of 0, maximum of original alpha
        const newAlpha = Math.max(
          0,
          Math.min(
            parseFloat(originalAlpha) * scrollProgress,
            parseFloat(originalAlpha)
          )
        );
        return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
      }
    }

    // Fallback for non-rgba colors - use opacity based approach
    if (scrollProgress <= 0) {
      return 'rgba(0, 0, 0, 0)'; // Fully transparent
    }

    return bgColor;
  };

  return (
    <header
      className="fixed top-0 z-40 w-full"
      data-theme={isDark ? 'dark' : 'light'}
    >
      <div className="max-w-[107rem] mx-auto mt-3 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative flex flex-col rounded-2xl px-4 overflow-hidden"
          style={{
            color: currentHeaderTheme.text,
          }}
          animate={{
            backgroundColor: getGradualBackground(),
            backdropFilter: `blur(${scrollProgress * 16}px)`,
            height:
              menuOpen &&
              typeof window !== 'undefined' &&
              window.innerWidth < 768
                ? 'auto'
                : '3.25rem', // h-13 = 3.25rem
          }}
          transition={{
            backgroundColor: { duration: 1.2, ease: 'easeInOut' },
            backdropFilter: { duration: 1.5, ease: 'easeInOut' },
            height: { duration: 0.3, ease: 'easeInOut' },
          }}
        >
          {/* Header Top Section */}
          <div className="relative flex items-center justify-between h-13">
            {/* Left: Menu Toggle */}
            <div
              className="rounded-md p-1 footer-underline transition-all duration-300 ease-in-out flex items-center justify-start cursor-pointer"
              onClick={() => setMenuOpen((prev: boolean) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setMenuOpen((prev) => !prev);
                }
              }}
              data-testid="menu-toggle"
              aria-label={menuOpen ? t('menu.close') : t('menu.open')}
            >
              <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="ml-2 tracking-tight hidden md:block leading-none pb-0.5">
                {menuOpen ? t('menu.close') : t('menu.open')}
              </span>
            </div>

            {/* Center: Mobile Wordmark (centered in header top section only) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
              <Link
                href="/"
                className="wordmark uppercase text-4xl leading-none"
                data-testid="mobile-wordmark-link"
              >
                TODD
              </Link>
            </div>

            {/* Right: Spacer for balance */}
            <div className="w-16 md:hidden"></div>

            {/* Desktop Navigation */}
            <AnimatePresence mode="wait">
              {!menuOpen ? (
                showWordmark && (
                  <motion.div
                    key="wordmark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                  >
                    <Link
                      href="/"
                      className="wordmark uppercase text-4xl sm:text-5xl leading-none"
                      data-testid="wordmark-link"
                    >
                      TODD
                    </Link>
                  </motion.div>
                )
              ) : (
                /* Desktop Navigation */
                <motion.div
                  key="navlinks"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 'auto' }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex justify-center gap-8 font-medium items-center text-center h-full"
                >
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={`nav-${item.label}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: 1,
                          x: -0.5,
                          transition: { delay: index * 0.15 },
                        }}
                        exit={{ opacity: 0, x: -5 }}
                        className="flex items-center justify-center gap-1 h-full"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`rounded-md p-1 footer-underline transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer ${
                            isActive ? 'footer-underline-active' : ''
                          }`}
                          data-testid={`nav-link-${item.label.toLowerCase()}`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right: Get Started */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="tracking-tight rounded-md p-1 footer-underline transition-all duration-300 ease-in-out items-center hidden md:flex cursor-pointer"
                data-testid="login-link"
              >
                {t('navigation.logIn')}
              </Link>
              <Link
                href="/get-started"
                className="tracking-tight rounded-md p-1 footer-underline transition-all duration-300 ease-in-out items-center hidden md:flex cursor-pointer"
                data-testid="get-started-link"
              >
                {t('navigation.getStarted')}
              </Link>
            </div>
          </div>

          {/* Mobile Navigation - Inside the same island */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-6 border-t border-current/20">
                  <nav className="flex flex-col space-y-4">
                    {menuItems.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={`mobile-nav-${item.label}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: index * 0.1 },
                          }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex justify-center"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-xl font-medium footer-underline transition-all duration-300 ease-in-out cursor-pointer ${
                              isActive ? 'footer-underline-active' : ''
                            }`}
                            data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}

                    {/* Mobile Get Started */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: menuItems.length * 0.1 },
                      }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col items-center gap-4 pt-4 border-t border-current/20"
                    >
                      <Link
                        href="/login"
                        onClick={() => setMenuOpen(false)}
                        className="text-lg font-medium footer-underline transition-all duration-300 ease-in-out cursor-pointer"
                        data-testid="mobile-login-link"
                      >
                        {t('navigation.logIn')}
                      </Link>
                      <Link
                        href="/get-started"
                        onClick={() => setMenuOpen(false)}
                        className="text-lg font-medium footer-underline transition-all duration-300 ease-in-out cursor-pointer"
                        data-testid="mobile-get-started-link"
                      >
                        {t('navigation.getStarted')}
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
