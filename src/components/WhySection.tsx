
const WhySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
                  About Me
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  I'm Saksham, and those early lessons shaped how I work today. Most teams don't need more people or bloated processes; they need sharper direction, better systems, and someone who bridges the gap between strategy and execution.
                </p>
              </div>
              
              <div className="flex items-center space-x-12">
                <div className="text-center">
                  <div className="text-4xl font-light text-slate-900 mb-2">150%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Average efficiency increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-slate-900 mb-2">2 Weeks</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">Typical sprint duration</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">It all started with Articuleren</h3>
                    <p className="text-slate-600 leading-relaxed">
                      It all started with Articuleren, my edtech initiative. I built it from scratch to help learners communicate better, and in the process, I wore every hat: product, content, design, and growth. That's where I first learned how to turn an idea into a working product, build a brand around it, and run campaigns that moved the needle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">I saw the same patterns repeat</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Later, as I worked in other lean teams, I saw the same patterns repeat: great ideas stalled because of unclear roadmaps, manual busywork, and a lack of focus on execution.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Now I partner with teams to deliver results</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Instead of waiting, I started fixing these problems, mapping features, simplifying processes, and setting up systems that freed up time for real growth. Now, I partner with SaaS founders, e-commerce brands, agencies, and ops-heavy teams to do exactly that: deliver results without extra headcount or complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 rounded-lg mx-auto overflow-hidden">
                  <img 
                    src="/lovable-uploads/9509828b-99de-44d4-adcd-c9f4b73c4e6e.png" 
                    alt="Saksham speaking at an event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="font-medium text-slate-900 mb-4">What I do for teams like yours:</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Map unclear ideas into actionable product roadmaps</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Build growth systems that run without constant oversight</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Automate manual workflows using AI and no-code tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Deliver measurable results in focused 2-week sprints</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
