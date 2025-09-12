// Copyright Todd LLC, All rights reserved.
//
// The tests here contain a *lot* of text. Sorry :(

import { screen, renderWithNextIntl } from '@/test/test-utils';
import TermsOfUsePage from './page';
import '@testing-library/jest-dom';

describe('TermsOfUsePage', () => {
  it('renders terms and conditions', () => {
    renderWithNextIntl(<TermsOfUsePage />);

    expect(screen.getByText('Terms of Use')).toBeInTheDocument();

    expect(
      screen.getByText(
        'The Site is offered and available to users who are 18 years of age or older. By using the Site, you represent and warrant that you are of legal age to form a binding contract with Todd. If you do not meet all of these requirements, you must not access or use the Site.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'The Site is not intended to provide legal, business, tax, accounting, investment or other advice. You agree not to construe any of the Content (as defined below) provided in connection with the Site as legal, business, tax, accounting, investment, financial or other advice. You agree that the Content provided in connection with the Site does not, and shall not be deemed to, constitute an offer to sell, or a solicitation to any person to buy any product or service. You understand that none of the Content constitutes a recommendation that you or any other person purchase or use any product or service, or that you should pursue any management strategy, and the Content is not to be relied upon for the purpose of making management or other decisions. In addition, you understand and agree that all Content provided in connection with the Site is published without consideration of your individual circumstances, financial or otherwise. Accordingly, you agree that you are solely responsible for any management decisions or other determinations made, including the evaluation of any farming or other risks, with respect to any of the Content provided in connection with the Site. You agree to consult your own professional advisors as to any legal, business, tax, accounting, investment, financial or other advice regarding any Content provided in connection with the Site.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'THE SITE AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" AND, TO THE MAXIMUM EXTENT PERMITTED UNDER LAW, ARE PROVIDED WITHOUT WARRANTIES, CLAIMS OR REPRESENTATIONS MADE BY TODD, EITHER EXPRESS, IMPLIED OR STATUTORY, WITH RESPECT TO THE SITE, INCLUDING WARRANTIES OF QUALITY, PERFORMANCE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, NOR ARE THERE ANY WARRANTIES CREATED BY COURSE OF DEALING, COURSE OF PERFORMANCE OR TRADE USAGE. TODD FURTHER DOES NOT REPRESENT OR WARRANT THAT THE SITE OR CONTENT WILL ALWAYS BE AVAILABLE, ACCESSIBLE, UNINTERRUPTED, TIMELY, SECURE, ACCURATE, COMPLETE OR ERROR-FREE. YOU ACKNOWLEDGE THAT THE ENTIRE RISK ARISING OUT OF THE USE OR PERFORMANCE OF THE SITE REMAINS WITH YOU TO THE MAXIMUM EXTENT PERMITTED UNDER LAW.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE SITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED, UNLESS OTHERWISE REQUIRED BY LAW.'
      )
    ).toBeInTheDocument();
  });

  it('has correct margins', () => {
    const { container } = renderWithNextIntl(<TermsOfUsePage />);

    expect(container.querySelector('.mt-20')).toBeInTheDocument();
  });
});
