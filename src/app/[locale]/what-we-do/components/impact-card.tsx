// Copyright Todd LLC, All rights reserved.

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

export interface ImpactCardProps {
  title: string;
  description: string;
  date: string;
  className?: string;
}

/**
 * ImpactCard component displays impact stories with title, description, and date
 * with a large background title that appears on hover
 * @component
 */
export const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  description,
  date,
  className,
}) => {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-all duration-500 hover:shadow-lg bg-secondary/5 aspect-[4/3]',
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-[min(15vw,140px)] leading-none font-utah-condensed font-bold opacity-0 group-hover:opacity-[0.08] transition-all duration-500 whitespace-nowrap overflow-hidden">
          {title.split(' ')[0]}
        </div>
      </div>
      <div className="relative h-full p-6 z-10 flex flex-col">
        <div>
          <p className="text-sm text-muted-foreground font-neue-haas mb-2">
            {date}
          </p>
          <h3 className="text-xl font-utah-condensed font-bold text-foreground mb-3">
            {title}
          </h3>
        </div>
        <div className="mt-auto">
          <p className="text-muted-foreground font-neue-haas">{description}</p>
        </div>
      </div>
    </Card>
  );
};
