// Copyright Todd LLC, All rights reserved.

import { useTranslations } from 'next-intl';

/**
 * Privacy page component
 * @returns {JSX.Element} - The privacy page
 */
export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="mx-auto mt-20 max-w-4xl bg-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">{t('title')}</h1>
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          {t('websitePrivacyPolicy')}
        </h2>
        <p className="text-sm text-gray-600">{t('effective')}</p>
      </div>

      {/* Supplements Notice */}
      <div className="mb-8 rounded-lg bg-blue-50 p-4">
        <ul className="space-y-2 text-sm">
          <li>{t('supplements.california')}</li>
          <li>{t('supplements.euUk')}</li>
          <li>{t('supplements.japan')}</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Commitment Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('commitment.title')}
          </h2>
          <p className="mb-4 text-gray-700">{t('commitment.content')}</p>
          <p className="text-gray-700">{t('commitment.description')}</p>
        </section>

        {/* Information Collection Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('informationCollection.title')}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t('informationCollection.general')}</p>
            <p>{t('informationCollection.usage')}</p>
            <p>{t('informationCollection.security')}</p>
          </div>
        </section>

        {/* Job Applicants Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('jobApplicants.title')}
          </h2>
          <p className="text-gray-700">{t('jobApplicants.content')}</p>
        </section>

        {/* Capacity Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('capacity.title')}
          </h2>
          <p className="text-gray-700">{t('capacity.content')}</p>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('notifications.title')}
          </h2>
          <p className="text-gray-700">{t('notifications.content')}</p>
        </section>

        {/* Miscellaneous Section */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('miscellaneous.title')}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{t('miscellaneous.termsReference')}</p>
            <p>{t('miscellaneous.headings')}</p>
          </div>
        </section>

        {/* California Supplement */}
        <section className="border-t border-gray-300 pt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('california.title')}
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            {t('california.lastUpdated')}
          </p>

          <div className="space-y-6">
            <p className="text-gray-700">{t('california.intro')}</p>

            <div>
              <p className="mb-4 text-gray-700">
                {t('california.categoriesIntro')}
              </p>

              {/* Categories Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'identifiers',
                  'personalRecords',
                  'protectedCharacteristics',
                  'commercialInfo',
                  'biometricInfo',
                  'internetActivity',
                  'geolocation',
                  'sensoryData',
                  'professionalInfo',
                  'educationInfo',
                  'inferences',
                  'sensitiveInfo',
                ].map((category) => (
                  <div key={category} className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="font-semibold text-gray-900">
                        {t(`california.categories.${category}.title`)}
                      </h4>
                      <span
                        className={`rounded px-2 py-1 text-xs font-medium ${
                          t(`california.categories.${category}.collected`) ===
                          'YES'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {t(`california.categories.${category}.collected`)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t(`california.categories.${category}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sensitive Data Usage */}
            <div>
              <p className="mb-2 font-medium text-gray-900">
                {t('california.sensitiveDataUsage.intro')}
              </p>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {Array.from({ length: 8 }, (_, i) => (
                  <li key={i} className="text-sm">
                    {t(`california.sensitiveDataUsage.purposes.${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700">{t('california.minorPolicy')}</p>

            {/* Purposes */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('california.purposes.title')}
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {Array.from({ length: 8 }, (_, i) => (
                  <li key={i} className="text-sm">
                    {t(`california.purposes.list.${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700">{t('california.retention')}</p>

            {/* Disclosure */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Disclosure of Information
              </h3>
              <p className="mb-2 text-gray-700">
                {t('california.disclosure.intro')}
              </p>
              <p className="mb-2 text-gray-700">
                {t('california.disclosure.businessPurpose')}
              </p>
              <p className="text-gray-700">
                {t('california.disclosure.thirdParties')}
              </p>
            </div>

            {/* Rights */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                {t('california.rights.title')}
              </h3>
              <div className="space-y-4">
                {[
                  'deletion',
                  'disclosure',
                  'correction',
                  'noDiscrimination',
                  'exercise',
                ].map((right) => (
                  <div key={right} className="rounded-lg bg-blue-50 p-4">
                    <h4 className="mb-2 font-medium text-gray-900">
                      {t(`california.rights.${right}.title`)}
                    </h4>
                    <p className="text-sm text-gray-700">
                      {t(`california.rights.${right}.content`)}
                    </p>
                    {right === 'disclosure' && (
                      <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
                        {Array.from({ length: 6 }, (_, i) => (
                          <li key={i} className="text-xs">
                            {t(`california.rights.disclosure.list.${i}`)}
                          </li>
                        ))}
                      </ul>
                    )}
                    {right === 'exercise' && (
                      <p className="mt-2 text-xs text-gray-700">
                        {t('california.rights.exercise.verification')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EU-UK Section */}
        <section className="border-t border-gray-300 pt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {t('euUk.title')}
          </h2>
          <p className="mb-4 text-sm text-gray-600">{t('euUk.lastUpdated')}</p>

          <div className="space-y-6">
            <p className="text-gray-700">{t('euUk.intro')}</p>
            <p className="text-gray-700">{t('euUk.definitions')}</p>
            <p className="text-gray-700">{t('euUk.scope')}</p>

            {/* Additional Information */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.additionalInfo.title')}
              </h3>
              <p className="text-gray-700">
                {t('euUk.additionalInfo.content')}
              </p>
            </div>

            {/* Purpose of Processing */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.processing.title')}
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>{t('euUk.processing.legal')}</p>
                <p>{t('euUk.processing.requirements')}</p>
                <p>{t('euUk.processing.multipleBases')}</p>
                <p>{t('euUk.processing.purposes')}</p>
                <p>{t('euUk.processing.automated')}</p>
                <p>{t('euUk.processing.disclosure')}</p>
                <p>{t('euUk.processing.links')}</p>
                <p>{t('euUk.processing.legal')}</p>
              </div>
            </div>

            {/* Sharing and Transfers */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.sharing.title')}
              </h3>
              <p className="mb-2 text-gray-700">{t('euUk.sharing.content')}</p>
            </div>

            {/* Retention and Security */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.retention.title')}
              </h3>
              <p className="mb-2 text-gray-700">
                {t('euUk.retention.security')}
              </p>
              <p className="text-gray-700">{t('euUk.retention.retention')}</p>
            </div>

            {/* Direct Communications */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.marketing.title')}
              </h3>
              <p className="mb-2 text-gray-700">
                {t('euUk.marketing.content')}
              </p>
              <p className="mb-2 text-gray-700">
                {t('euUk.marketing.optOut.intro')}
              </p>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                {Array.from({ length: 2 }, (_, i) => (
                  <li key={i} className="text-sm">
                    {t(`euUk.marketing.optOut.methods.${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rights */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.rights.title')}
              </h3>
              <div className="space-y-3 rounded-lg bg-green-50 p-4">
                <p className="text-gray-700">{t('euUk.rights.list')}</p>
                <p className="text-gray-700">{t('euUk.rights.verification')}</p>
              </div>
            </div>

            {/* Complaints */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {t('euUk.complaints.title')}
              </h3>
              <p className="mb-2 text-gray-700">{t('euUk.complaints.intro')}</p>
              <ul className="list-disc space-y-1 pl-6 text-gray-700">
                <li className="text-sm">{t('euUk.complaints.uk')}</li>
                <li className="text-sm">{t('euUk.complaints.eu')}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
