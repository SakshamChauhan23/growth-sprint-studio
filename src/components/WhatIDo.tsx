
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Zap, ArrowDown } from "lucide-react";

const WhatIDo = () => {
  const outcomes = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Your idea becomes a product",
      description: "We define your MVP, prioritise features, and validate fast.",
      step: "Q1 / 2024"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Your brand gets noticed", 
      description: "I craft positioning, messaging, and content that build authority and trust.",
      step: "Q2 / 2024"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Your growth engine runs itself",
      description: "From funnel optimisation to AI-powered workflows, we eliminate manual bottlenecks so you can focus on scaling.",
      step: "Q3 / 2024"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Be witness on the way to our goal step by step.
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                BH Network is a team of freelancers and business owners who want to make a difference in the world of online marketplaces. We, too, have had enough of searching marketplaces for what we need and paying high fees to do so.
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                More Information
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right Timeline */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
              
              <div className="space-y-12">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Icon Container */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <div className="text-white">
                          {outcome.icon}
                        </div>
                      </div>
                      {/* Step Label */}
                      <div className="absolute -top-2 -right-8 text-xs text-blue-300 font-medium whitespace-nowrap">
                        {outcome.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {outcome.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-slate-300 italic">
              "No bloated teams. No endless consulting decks. Just fast, hands-on execution where we build together."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
