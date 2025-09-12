// Copyright Todd LLC, All rights reserved.

import { useTranslations } from 'next-intl';

/**
 * Accessibility page component
 * @returns {JSX.Element} - The accessibility page
 */
export default function AccessibilityPage() {
  const t = useTranslations('accessibility');

  return (
    <>
      {' '}
      <div className="mx-auto max-w-3xl px-2 pt-8">
        <h1 className="mt-16 mb-8 text-4xl font-light">{t('title')}</h1>
        <div className="mb-6 h-px bg-[#2A2727] opacity-20" />

        <h2 className="mb-6 text-xl font-light">{t('subtitle')}</h2>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          {t('standards')}
        </p>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          {t('improvements.description')}
        </p>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          • {t('improvements.textEquivalents.title')}
          {': '}
          {t('improvements.textEquivalents.content')}
        </p>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          • {t('improvements.keyboardAccess.title')}
          {': '}
          {t('improvements.keyboardAccess.content')}{' '}
        </p>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          • {t('improvements.siteConsistency.title')}
          {': '}
          {t('improvements.siteConsistency.content')}{' '}
        </p>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          • {t('improvements.siteStructure.title')}
          {': '}
          {t('improvements.siteStructure.content')}{' '}
        </p>

        <p className="mb-8 text-sm leading-relaxed font-thin">
          • {t('improvements.links.title')}
          {': '}
          {t('improvements.links.content')}{' '}
        </p>

        <p className="mb-12 text-sm leading-relaxed font-thin">{t('cta')}</p>
      </div>
    </>
  );
}
