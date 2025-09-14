// Copyright Todd LLC, All rights reserved.

import { useTranslations } from 'next-intl';

/**
 * Terms component
 * @returns {JSX.Element} - The terms page
 */
import React from 'react';

export default function TermsOfUsePage() {
  const t = useTranslations('terms');

  return (
    <div className="mx-auto mt-20 max-w-4xl bg-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-light text-gray-900">{t('title')}</h1>
        <div className="mb-6 h-px bg-[#2A2727] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Terms and Conditions Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('termsAndConditions.title')}
          </h2>
          <div className="space-y-8">
            <p className="mb-8 text-sm leading-relaxed font-thin text-gray-700">
              {t('termsAndConditions.intro')}
            </p>
            <p className="mb-8 text-sm leading-relaxed font-thin text-gray-700">
              {t('termsAndConditions.amendments')}
            </p>
            <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
              {t('termsAndConditions.ageRequirement')}
            </p>
          </div>
        </section>

        {/* Purpose Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('purpose.title')}
          </h2>
          <div className="space-y-8">
            <p className="mb-8 text-sm leading-relaxed font-thin text-gray-700">
              {t('purpose.informational')}
            </p>
            <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
              {t('purpose.noAdvice')}
            </p>
          </div>
        </section>

        {/* Regulatory Disclosures Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('regulatory.title')}
          </h2>
          <div className="space-y-8">
            <p className="mb-8 text-sm leading-relaxed font-thin text-gray-700">
              {t('regulatory.noSolicitation')}
            </p>
            <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
              {t('regulatory.forwardLooking')}
            </p>
          </div>
        </section>

        {/* Privacy Policies Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('privacyPolicies.title')}
          </h2>
          <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
            {t('privacyPolicies.content')}
          </p>
        </section>

        {/* Ownership Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('ownership.title')}
          </h2>
          <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
            {t('ownership.content')}
          </p>
        </section>

        {/* Third-Party Links Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('thirdPartyLinks.title')}
          </h2>
          <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
            {t('thirdPartyLinks.content')}
          </p>
        </section>

        {/* Disclaimer Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('disclaimer.title')}
          </h2>
          <div className="mb-12 rounded-lg bg-red-50 p-4">
            <p className="text-sm leading-relaxed font-thin text-gray-700">
              {t('disclaimer.content')}
            </p>
          </div>
        </section>

        {/* Limitation of Liability Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('limitation.title')}
          </h2>
          <div className="space-y-4 rounded-lg bg-red-50 p-4">
            <p className="text-sm leading-relaxed font-thin text-gray-700">
              {t('limitation.noLiability')}
            </p>
            <p className="text-sm leading-relaxed font-thin text-gray-700">
              {t('limitation.noDamages')}
            </p>
            <p className="text-sm leading-relaxed font-thin text-gray-700">
              {t('limitation.applicableLaw')}
            </p>
          </div>
        </section>

        {/* Indemnity Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('indemnity.title')}
          </h2>
          <p className="mb-12 text-sm leading-relaxed font-thin text-gray-700">
            {t('indemnity.content')}
          </p>
        </section>

        {/* Claims Limitation Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('claimsLimitation.title')}
          </h2>
          <div className="mb-12 rounded-lg bg-yellow-50 p-4">
            <p className="text-sm leading-relaxed font-thin text-gray-700">
              {t('claimsLimitation.content')}
            </p>
          </div>
        </section>

        {/* Miscellaneous Section */}
        <section>
          <h2 className="mb-6 text-xl font-light text-gray-900">
            {t('miscellaneous.title')}
          </h2>
          <div className="space-y-8">
            <p className="mb-8 text-sm leading-relaxed font-thin text-gray-700">
              {t('miscellaneous.assignment')}
            </p>
            <p className="mb-8 text-sm leading-relaxed font-thin text-gray-700">
              {t('miscellaneous.headings')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
