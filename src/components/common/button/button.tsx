//Copyright Todd LLC, All rights reserved.

'use client';

import React from 'react';
import { Link } from '@/i18n/config';
import { ArrowRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center gap-2 rounded-full transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-[#2A2727] text-[#FDFDFB] hover:bg-[#2A2727]/80',
        outline:
          'border border-[#2A2727] text-[#2A2727] hover:bg-[#2A2727] hover:text-[#FDFDFB]',
        outlineLight:
          'border border-[#FDFDFB] text-[#FDFDFB] hover:bg-[#FDFDFB] hover:text-[#2A2727]',
      },
      size: {
        sm: 'text-sm md:text-base px-3 py-1',
        md: 'text-base md:text-lg px-4 py-2',
        lg: 'text-lg md:text-xl lg:text-2xl px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'lg',
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  text?: string;
  className?: string;
  showArrow?: boolean;
  isDark?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  className = '',
  showArrow = true,
  variant,
  size,
  isDark = false,
  onClick,
  children,
  type = 'button',
}) => {

  const effectiveVariant = isDark ? 'outlineLight' : variant || 'outline';

  const combinedClasses = buttonVariants({
    variant: effectiveVariant,
    size,
    className,
  });

  const content = children || text;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        data-testid="button-component"
      >
        {content}
        {showArrow && <ArrowRight className="text-2xl" />}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      data-testid="button-component"
    >
      {content}
      {showArrow && <ArrowRight className="text-2xl" />}
    </button>
  );
};

export default Button;
