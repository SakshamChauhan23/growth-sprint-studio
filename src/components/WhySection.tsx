
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';

const WhySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Image Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                    <img 
                      src="/lovable-uploads/b2f89dab-e169-4505-a629-4530f5989b23.png" 
                      alt="Saksham speaking at an event" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">Saksham</h3>
                  <p className="text-orange-600 font-medium mb-4">Growth Strategist & Automation Specialist</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-slate-900">150%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Avg. Efficiency Increase</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-slate-900">2 Weeks</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Sprint Duration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  I'm Saksham, and those early lessons shaped how I work today. Most teams don't need more people or bloated processes; they need sharper direction, better systems, and someone who bridges the gap between strategy and execution.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                      <Lightbulb className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">It all started with Articuleren</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    I built it from scratch to help learners communicate better, wearing every hat: product, content, design, and growth. That's where I learned to turn ideas into working products.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">I saw the same patterns repeat</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In other lean teams, great ideas stalled because of unclear roadmaps, manual busywork, and lack of focus on execution.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Rocket className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Now I partner with teams to deliver results</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Instead of waiting, I started fixing these problems, mapping features, simplifying processes, and setting up systems that freed up time for real growth. Now, I partner with SaaS founders, e-commerce brands, agencies, and ops-heavy teams to deliver results without extra headcount or complexity.
                </p>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">What I do for teams like yours</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Map unclear ideas into actionable product roadmaps</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Build growth systems that run without constant oversight</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Automate manual workflows using AI and no-code tools</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Deliver measurable results in focused 2-week sprints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
