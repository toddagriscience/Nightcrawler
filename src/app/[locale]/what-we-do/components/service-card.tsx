// Copyright Todd LLC, All rights reserved.

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const serviceCardVariants = cva(
  'flex flex-col gap-4 p-6 transition-all duration-300 hover:shadow-lg bg-secondary/5',
  {
    variants: {
      variant: {
        default: '',
        highlight: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ServiceCardProps
  extends VariantProps<typeof serviceCardVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * ServiceCard component displays a service offering with title, description and optional icon
 * @component
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  variant,
  className,
}) => {
  return (
    <Card className={cn(serviceCardVariants({ variant }), className)}>
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-xl font-utah-condensed font-bold text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground font-neue-haas">{description}</p>
    </Card>
  );
};
