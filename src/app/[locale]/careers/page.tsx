'use client';

import { Link } from '@/i18n/config';
import { useRef } from 'react';

export default function Careers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 24; // 6 * 4px = 24px gap
      const scrollAmount = cardWidth + gap;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Check if we're near the end
      if (container.scrollLeft + scrollAmount >= maxScroll - 10) {
        // Reset to start
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // Scroll normally
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <>
      <main className="min-h-screen bg-[#F8F5EE]">
        <div className="max-w-[1300px] mx-auto pl-0 pr-4 md:pr-8 pt-32 md:pt-36">
          {/* Work at Todd Section */}
          <div className="flex flex-col md:flex-row md:justify-between mb-40">
            <div className="md:w-[40%] pl-0 md:pl-0">
              <h1 className="text-[#4a4a4a] text-[70px] md:text-[80px] font-light leading-[0.9] whitespace-nowrap mb-20">
                Work at Todd
              </h1>
            </div>
            <div className="md:w-[55%] mt-6 md:mt-0">
              <p className="text-[#4a4a4a] text-[28px] md:text-[32px] font-light leading-[1.3]">
                Todd is building a team that embodies diversity of thought,
                experience and background.
              </p>
            </div>
          </div>

          {/* Success Story Section */}
          <div className="mb-16">
            <div className="md:w-[50%]">
              <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4]">
                All our external success—powering breakthroughs in sustainable
                agriculture, partnering with world renowned organizations,
                supporting every major scale regenerative US farm, and the
                recent $20m valuation—all of it is a product from us hiring the
                best people for the job.
              </p>
            </div>
          </div>

          {/* Culture Section */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-[50%] mb-8 md:mb-0 md:pt-55">
              <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4] mb-42">
                Working at Todd is a unique human experience to participate in
                the world of sustainable agriculture under the auspices of
                Todd&apos;s industry-first firm. Our culture is designed to help
                you gain experience, mentorship, and the chance to contribute
                meaningfully to society.
              </p>
            </div>
            <div className="md:w-[45%]">
              <h2 className="text-[#4a4a4a] text-[60px] md:text-[50px] font-light leading-[0.9] mb-52 mt-8">
                A Culture Where Talent Can Thrive
              </h2>
            </div>
          </div>

          {/* Opportunities for Students Section */}
          <div className="mt-32 mb-16">
            <div className="flex flex-col md:flex-row md:justify-between mb-52">
              <div className="md:w-[40%] pl-0 md:pl-0">
                <h1 className="text-[#4a4a4a] text-[50px] font-light leading-[0.9] whitespace-nowrap">
                  Opportunities for Students
                </h1>
              </div>
              <div className="md:w-[50%] mt-6 md:mt-0">
                <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4]">
                  The most important decision of your career is choosing where
                  it starts. Our bi-annual open call for outlier early talent is
                  designed to build strong foundations for a lifetime of
                  learning and achievement.
                </p>
              </div>
            </div>

            {/* Three Feature Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 -mt-16">
              <div>
                <h2 className="text-[#4a4a4a] text-[35px] md:text-[40px] font-light leading-[0.9] mb-4 whitespace-nowrap">
                  Increase your velocity
                </h2>
                <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4]">
                  From accelerating your path to landing your dream job, to
                  guidance and connections necessary to grow with speed.
                </p>
              </div>
              <div className="ml-8">
                <h2 className="text-[#4a4a4a] text-[35px] md:text-[40px] font-light leading-[0.9] mb-4">
                  Scale your dream
                </h2>
                <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4]">
                  We help you for the next decade, not just the next 3 months.
                </p>
              </div>
              <div>
                <h2 className="text-[#4a4a4a] text-[35px] md:text-[40px] font-light leading-[0.9] mb-4">
                  Unlock our network
                </h2>
                <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4]">
                  Harness the power of our alumni community and resources to
                  access companies, positions, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-32 mb-16 bg-[#CCC5B5] py-16">
            <div className="w-full px-8 md:px-16">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="md:w-[50%] mb-8 md:mb-0">
                  <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4] mb-8">
                    Our teams have responsibility to solve vitally important
                    problems. We debate, refine and implement our strongest
                    ideas in pursuit of the best possible outcome. We work each
                    day with the belief that, together, we can prioritize
                    purpose and protect our planet.
                  </p>
                  <Link
                    href="/who-we-are"
                    className="inline-block border border-[#4a4a4a] px-6 py-3 text-[#4a4a4a] text-[16px] font-light rounded hover:bg-[#4a4a4a] hover:text-white transition-colors"
                  >
                    Who We Are
                  </Link>
                </div>
                <div className="md:w-[45%]">
                  <div className="text-[#4a4a4a] text-[60px] md:text-[70px] font-light leading-[0.9] mb-4">
                    &ldquo;
                  </div>
                  <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4] mb-6">
                    I knew from the beginning it would take a team of the best
                    and brightest—truly extraordinary colleagues with
                    exceptional intellect, passion and creativity—to succeed.
                  </p>
                  <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4] mb-8">
                    We spend a lot of time recruiting. Upholding qualitative
                    benchmarks is beneficial for us and is the right thing to
                    do. This results in the strongest possible team, but also
                    ensures we&apos;re treating our colleagues with fairness and
                    respect for their effort. Therefore, everyone who joins Todd
                    can be confident they were chosen for their outstanding
                    talent.
                  </p>
                  <div className="text-right">
                    <p className="text-[#4a4a4a] text-[16px] font-light">
                      Vincent Todd
                    </p>
                    <p className="text-[#4a4a4a] text-[14px] font-light">
                      Founder and CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Acceleration Section */}
          <div className="mt-32 mb-16">
            <div className="flex flex-col md:flex-row md:justify-between mb-20">
              <div className="md:w-[40%] pl-0 md:pl-0">
                <h1 className="text-[#4a4a4a] text-[50px] font-light leading-[0.9]">
                  Career Acceleration Happens Here
                </h1>
              </div>
              <div className="md:w-[50%] mt-6 md:mt-0">
                <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4]">
                  Our firm is a launchpad for those who embrace opportunity, own
                  their advancement and realize their full potential.
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <div className="md:w-[50%]">
              <blockquote className="text-[#4a4a4a] text-[24px] md:text-[28px] font-light leading-[1.3] mb-18">
                &ldquo;We are more than interns. We are valued. The personality
                of each individual contributes to the strength of Todd. We feel
                listened to, we have the freedom to express ourselves, to
                propose. We are pushed to go the extra mile, to be creative and
                do an exceptional job.&rdquo;
              </blockquote>
              <div className="text-right text-[#4a4a4a] text-[16px] font-light">
                <p>Josiah Hoang (in)</p>
                <p>Winter &apos;24</p>
                <p>Finance Team</p>
              </div>
            </div>
          </div>

          {/* Discover Career Perspectives Section */}
          <div className="mt-32 mb-16">
            <div className="flex flex-col md:flex-row md:justify-between mb-20">
              <div className="md:w-[40%] pl-0 md:pl-0">
                <h1 className="text-[#4a4a4a] text-[50px] font-light leading-[0.9]">
                  Discover Career Perspectives
                </h1>
              </div>
              <div className="md:w-[50%] mt-6 md:mt-0">
                <p className="text-[#4a4a4a] text-[18px] md:text-[20px] font-light leading-[1.4] mt-4">
                  Find resources and insights on building exceptional careers.
                </p>
              </div>
            </div>

            {/* Horizontal Scrollable Content */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
                style={{ width: 'calc(100% - 60px)' }}
              >
                {/* Article Card 1 */}
                <a href="#" className="flex-shrink-0 w-[calc(50%-12px)] block">
                  <div className="h-[28rem] bg-[#CCC5B5] rounded mb-4 flex items-center justify-center">
                    <span className="text-[#4a4a4a] text-4xl">
                      <span
                        className="font-medium"
                        style={{
                          fontFamily:
                            'Miller Text, Georgia, "Times New Roman", Times, serif',
                        }}
                      >
                        ambrook
                      </span>{' '}
                      × <span className="wordmark">TODD</span>
                    </span>
                  </div>
                  <div className="text-[#4a4a4a] text-sm font-light mb-1">
                    April 16, 2025
                  </div>
                  <div className="text-[#4a4a4a] text-lg font-light">
                    Todd Announces Partnership with Ambrook
                  </div>
                </a>

                {/* Article Card 2 */}
                <a href="#" className="flex-shrink-0 w-[calc(50%-12px)] block">
                  <div className="h-[28rem] bg-[#CCC5B5] border border-[#E8E0D0] rounded mb-4"></div>
                  <div className="text-[#4a4a4a] text-sm font-light mb-1">
                    PR Newswire
                  </div>
                  <div className="text-[#4a4a4a] text-sm font-light mb-1">
                    March 31, 2025
                  </div>
                  <div className="text-[#4a4a4a] text-lg font-light">
                    Todd Introduces The World&apos;s First Regenerative
                    Vegetable and Flower Seeds
                  </div>
                </a>

                {/* Article Card 3 */}
                <a href="#" className="flex-shrink-0 w-[calc(50%-12px)] block">
                  <div className="h-[28rem] bg-[#CCC5B5] border border-[#E8E0D0] rounded mb-4"></div>
                  <div className="text-[#4a4a4a] text-sm font-light mb-1">
                    Article
                  </div>
                  <div className="text-[#4a4a4a] text-lg font-light">
                    Todd Project
                  </div>
                </a>

                {/* Article Card 4 */}
                <a href="#" className="flex-shrink-0 w-[calc(50%-12px)] block">
                  <div className="h-[28rem] bg-[#CCC5B5] border border-[#E8E0D0] rounded mb-4"></div>
                  <div className="text-[#4a4a4a] text-sm font-light mb-1">
                    News
                  </div>
                  <div className="text-[#4a4a4a] text-lg font-light">
                    Todd Innovation
                  </div>
                </a>

                {/* Article Card 5 */}
                <a href="#" className="flex-shrink-0 w-[calc(50%-12px)] block">
                  <div className="h-[28rem] bg-[#CCC5B5] border border-[#E8E0D0] rounded mb-4"></div>
                  <div className="text-[#4a4a4a] text-sm font-light mb-1">
                    Press Release
                  </div>
                  <div className="text-[#4a4a4a] text-lg font-light">
                    Todd Expansion
                  </div>
                </a>
              </div>

              {/* Scroll Arrow - Positioned absolutely */}
              <div
                className="absolute right-0 top-[14rem] -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-colors z-10"
                onClick={scrollToNext}
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Achieve More Here Section */}
          <div className="mt-32 mb-16">
            <div className="bg-[#2A2727] rounded-2xl py-24 px-8 lg:py-32 lg:px-16">
              <div className="max-w-2xl">
                <h2 className="text-white text-[50px] md:text-[60px] font-light leading-[0.9] mb-12">
                  Achieve More Here
                </h2>
                <p className="text-white text-[18px] md:text-[20px] font-light leading-[1.4] mb-12">
                  If you&apos;re ready to explore a career at Todd, we invite
                  you to apply in our Internship program. It&apos;s an
                  opportunity to trial our culture and experience what is
                  expected day to day.
                </p>
                <button className="border border-white px-6 py-3 text-white text-[16px] font-light rounded hover:bg-white hover:text-[#2A2727] transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-16 mb-16">
            <div className="bg-[#F8F5EE] border border-[#E8E0D0] rounded p-4">
              <p className="text-[#4a4a4a] text-sm font-light">
                Important Notice: Beware of Recruitment Scams.{' '}
                <a href="#" className="underline">
                  Click here
                </a>{' '}
                to learn more.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
