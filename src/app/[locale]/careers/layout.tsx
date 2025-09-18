import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Learn more about our company, mission, and values.',
  keywords: ['careers', 'jobs', 'internships'],
  openGraph: {
    title: 'Careers',
    description:
      'Todd is building a team that embodies diversity of thought, experience and background.',
    url: 'https://www.toddagriscience.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
