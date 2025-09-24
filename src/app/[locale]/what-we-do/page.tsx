// Copyright Todd LLC, All rights reserved.

'use client';

import { Card } from '@/components/ui/card';
import {
  Bug,
  Leaf,
  Mountain,
  Settings,
  Shield,
  ShieldCheck,
  Sprout,
  Store,
  TrendingUp,
  Wheat,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ImpactCard, ServiceCard } from './components';

/**
 * What We Do page component showcasing Todd AgriScience's services and impact
 * @returns {JSX.Element} - The what we do page
 */
export default function WhatWeDoPage() {
  const t = useTranslations('whatWeDo');

  const services = [
    {
      ...t.raw('offerings.services.soilRemineralization'),
    },
    {
      ...t.raw('offerings.services.seedProducts'),
    },
    {
      ...t.raw('offerings.services.soilConservation'),
    },
    {
      ...t.raw('offerings.services.cropProduction'),
    },
    {
      ...t.raw('offerings.services.diseaseInsectMitigation'),
    },
    {
      ...t.raw('offerings.services.operationsManagement'),
    },
    {
      ...t.raw('offerings.services.nopDemeterIntegrity'),
    },
    {
      ...t.raw('offerings.services.produceSafety'),
    },
    {
      ...t.raw('offerings.services.expansionMarketEntry'),
    },
    {
      ...t.raw('offerings.services.dtcCSAMarketing'),
    },
  ];

  const impactStories = [
    {
      ...t.raw('impact.stories.acmeInc'),
    },
    {
      ...t.raw('impact.stories.brightFuture'),
    },
    {
      ...t.raw('impact.stories.cosmicTechnologies'),
    },
    {
      ...t.raw('impact.stories.deltaSystems'),
    },
    {
      ...t.raw('impact.stories.echoInnovations'),
    },
    {
      ...t.raw('impact.stories.frontierLabs'),
    },
  ];

  const companyList = t.raw('impact.companies.list') as string[];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Centered in viewport */}
      <section className="h-screen flex flex-col justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-utah-condensed mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-neue-haas max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="mt-12 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-muted-foreground"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-utah-condensed font-bold mb-4">
              {t('offerings.title')}
            </h2>
            <p className="text-muted-foreground font-neue-haas max-w-3xl mx-auto">
              {t('offerings.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={
                  service.icon === 'Sprout' ? (
                    <Sprout size={24} />
                  ) : service.icon === 'Leaf' ? (
                    <Leaf size={24} />
                  ) : service.icon === 'Mountain' ? (
                    <Mountain size={24} />
                  ) : service.icon === 'WheatOff' ? (
                    <Wheat size={24} />
                  ) : service.icon === 'Bug' ? (
                    <Bug size={24} />
                  ) : service.icon === 'Settings' ? (
                    <Settings size={24} />
                  ) : service.icon === 'ShieldCheck' ? (
                    <ShieldCheck size={24} />
                  ) : service.icon === 'Shield' ? (
                    <Shield size={24} />
                  ) : service.icon === 'TrendingUp' ? (
                    <TrendingUp size={24} />
                  ) : service.icon === 'Store' ? (
                    <Store size={24} />
                  ) : null
                }
                title={service.title}
                description={service.description}
                variant={index % 2 === 0 ? 'default' : 'highlight'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-utah-condensed font-bold mb-4">
              {t('impact.title')}
            </h2>
            <p className="text-muted-foreground font-neue-haas max-w-3xl mx-auto">
              {t('impact.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {impactStories.map((story, index) => (
              <ImpactCard
                key={index}
                title={story.title}
                description={story.description}
                date={story.date}
              />
            ))}
          </div>

          {/* Companies List */}
          <Card className="p-4 md:p-8 bg-secondary/5">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-utah-condensed font-bold mb-2">
                {t('impact.companies.title')}
              </h3>
              <p className="text-muted-foreground font-neue-haas">
                {t('impact.companies.description')}
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[800px] px-4 md:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-neue-haas text-muted-foreground">
                        A-Z
                      </th>
                      <th className="text-left py-4 font-neue-haas text-muted-foreground">
                        Name
                      </th>
                      <th className="text-left py-4 font-neue-haas text-muted-foreground">
                        Website
                      </th>
                      <th className="text-left py-4 font-neue-haas text-muted-foreground">
                        Date of Partnership
                      </th>
                      <th className="text-left py-4 font-neue-haas text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyList.map((company, index) => {
                      const firstLetter = company.charAt(0);
                      const website =
                        company.toLowerCase().replace(/\s+/g, '') + '.com';
                      const date =
                        [
                          'Apr 2023',
                          'Feb 2023',
                          'Nov 2022',
                          'Aug 2022',
                          'Jun 2022',
                          'Mar 2022',
                        ][index] || '';
                      const status =
                        index === companyList.length - 1 ? 'Exit' : 'Current';

                      return (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-4 font-neue-haas">{firstLetter}</td>
                          <td className="py-4 font-neue-haas">{company}</td>
                          <td className="py-4 font-neue-haas text-primary hover:underline">
                            <a
                              href={`https://${website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {website}
                            </a>
                          </td>
                          <td className="py-4 font-neue-haas">{date}</td>
                          <td className="py-4 font-neue-haas">
                            <span
                              className={`inline-flex items-center gap-1 ${status === 'Exit' ? 'text-red-500' : 'text-green-500'}`}
                            >
                              <span className="w-2 h-2 rounded-full bg-current" />
                              {status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
