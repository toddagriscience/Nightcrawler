// Copyright Todd LLC, All rights reserved.

import { screen, renderWithNextIntl } from '@/test/test-utils';
import PrivacyPage from './page';
import '@testing-library/jest-dom';

describe('PrivacyPage', () => {
  it('renders the page', () => {
    renderWithNextIntl(<PrivacyPage />);

    expect(
      screen.getByText(
        'Visitors that are residents of California should refer to our Website Privacy Policy Supplement for California Residents.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Headings and captions throughout this Privacy Policy are for convenience only and should not be considered part of this Privacy Policy. The word including means including without limitation.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "This EU-UK Privacy Policy does not apply to any processing of personal data by or on behalf of Todd that is covered by a more specific privacy policy (including, without limitation, our employee and contractor privacy policies and our Service and/or Product User Agreement's privacy policies)."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Should you wish to lodge a complaint with regards to how your personal data has been processed by us:'
      )
    ).toBeInTheDocument();
  });

  it('has correct margins', () => {
    const { container } = renderWithNextIntl(<PrivacyPage />);

    expect(container.querySelector('.mt-20')).toBeInTheDocument();
  });
});
