
import { ArrowRight, Users, Target, Zap } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              My Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-700 leading-relaxed">
                      I've been where you are, ambitious, juggling too much, and wondering why good ideas weren't moving forward. Early in my career, I worked in lean teams where everyone wore multiple hats.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">The Problem</h3>
                    <p className="text-slate-700 leading-relaxed">
                      I watched smart, capable people struggle because roadmaps were unclear, manual tasks ate up entire days, and execution always felt just out of reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">The Solution</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Instead of waiting for things to change, I started fixing them myself. I mapped features, built simple systems, and set up workflows that freed up time for actual growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">The Realization</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Most teams don't need endless hires or bloated processes; they need focus, clarity, and someone who can turn strategy into action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-1 rounded-2xl max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hi, I'm Saksham</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Now, I partner with SaaS founders, e-commerce brands, agencies, and operations-heavy teams to do exactly that: 
                  <span className="font-semibold text-slate-900"> deliver results without the extra headcount, noise, or wasted time.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
