
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
                  I'm Saksham, a Product Manager turned growth strategist and automation specialist. I help lean teams overcome bottlenecks that prevent great ideas from becoming great products.
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
                    <h3 className="font-medium text-slate-900 mb-2">My journey started in lean startup teams</h3>
                    <p className="text-slate-600 leading-relaxed">
                      I watched ambitious, capable people struggle because roadmaps were unclear, manual tasks consumed entire days, and execution always felt just out of reach.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">I started building systems to solve these problems</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Instead of waiting for things to change, I mapped features, built simple automations, and created workflows that freed up time for actual growth work.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">Now I partner with teams to do the same</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Most teams don't need more people—they need focus, clarity, and someone who can turn strategy into action without the overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mx-auto flex items-center justify-center">
                  <div className="text-6xl text-slate-400">👨‍💼</div>
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
