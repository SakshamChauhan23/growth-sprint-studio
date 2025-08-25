import { Users, Target, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/utils/scroll";

const WhySection = () => {
  return (
    <section id="about" className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4 lg:mb-6">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          {/* Mobile Intro Text */}

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-6 mb-8 lg:mb-10 items-start">
            {/* Image Card */}
            <div className="lg:col-span-1 order-1 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 h-full mx-2 lg:mx-0">
                <div className="relative mb-4 lg:mb-6">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 max-w-[250px] mx-auto">
                    <img 
                      src="/lovable-uploads/b2f89dab-e169-4505-a629-4530f5989b23.png" 
                      alt="Saksham speaking at an event" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-2">Hi, I'm Saksham,</h3>
                  <p className="text-orange-600 font-medium mb-4 text-sm lg:text-base">Your Product & Growth partner</p>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 lg:p-4 border border-orange-200">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-orange-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-base lg:text-lg font-bold text-slate-900">150%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Avg. Efficiency Increase</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 lg:p-4 border border-blue-200">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-blue-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-base lg:text-lg font-bold text-slate-900">2 Weeks</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Sprint Duration</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 lg:p-4 border border-green-200">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-base lg:text-lg font-bold text-slate-900">50+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Teams Helped</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 lg:p-4 border border-purple-200">
                      <div className="flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-purple-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-base lg:text-lg font-bold text-slate-900">95%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Cards */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-6 order-2 lg:order-2 flex flex-col">
              {/* Desktop Intro Text */}

              <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-6 border-l-4 border-orange-500 mx-2 lg:mx-0">
                <div className="flex items-start sm:items-center mb-4 lg:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg">Beginning</h3>
                </div>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed pl-11 sm:pl-13 pb-2">
                  It all started with Articuleren, my edtech initiative helping students have better learning through experiential learning. I built it from scratch to help learners communicate better, wearing every hat: product, content, design, and growth. That's where I learned to turn ideas into working products.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-6 border-l-4 border-blue-500 mx-2 lg:mx-0">
                <div className="flex items-start sm:items-center mb-4 lg:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg">The Pattern I Saw</h3>
                </div>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed pl-11 sm:pl-13 pb-2">
                  In other lean teams, great ideas stalled because of unclear roadmaps, manual busywork, or a lack of focus on execution.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 lg:p-6 border-l-4 border-green-500 mx-2 lg:mx-0">
                <div className="flex items-start sm:items-center mb-4 lg:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base sm:text-lg">Now I partner with teams to deliver results</h3>
                </div>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed pl-11 sm:pl-13 pb-2">
                  Instead of waiting, I started fixing these problems, mapping features, simplifying processes, and setting up systems that freed up time for real growth. Now, I partner with SaaS founders, e-commerce brands, agencies, and ops-heavy teams to deliver results without extra headcount or complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-6 sm:p-6 lg:p-8 text-white mx-2 lg:mx-0">
            <div className="flex flex-col sm:flex-row sm:items-center mb-6 lg:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">What I do for teams like yours</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-6">
              <div className="space-y-4 lg:space-y-4">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm lg:text-base leading-relaxed">Map unclear ideas into actionable product roadmaps</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm lg:text-base leading-relaxed">Build growth systems that run without constant oversight</span>
                </div>
              </div>
              <div className="space-y-4 lg:space-y-4">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm lg:text-base leading-relaxed">Automate manual workflows using AI and no-code tools</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm lg:text-base leading-relaxed">Deliver measurable results in focused 2-week sprints</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              onClick={() => smoothScrollTo('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Growth Sprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;