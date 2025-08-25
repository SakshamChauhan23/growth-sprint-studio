
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Zap, ArrowDown } from "lucide-react";
import TimelineItem from "@/components/ui/timeline-item";
import { smoothScrollTo } from "@/utils/scroll";

const WhatIDo = () => {
  const outcomes = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Your idea becomes a product",
      description: "We define your MVP, prioritise features, and validate fast."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Your brand gets noticed", 
      description: "I craft positioning, messaging, and content that build authority and trust."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Your growth engine runs itself",
      description: "From funnel optimisation to AI-powered workflows, we eliminate manual bottlenecks so you can focus on scaling."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern - Simplified */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Be witness on the way to our goal step by step.
              </h2>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => smoothScrollTo('contact')}
              >
                More Information
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right Timeline - Simplified */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600" />
              
              <div className="space-y-12">
                {outcomes.map((outcome, index) => (
                  <TimelineItem
                    key={index}
                    icon={outcome.icon}
                    title={outcome.title}
                    description={outcome.description}
                    index={index}
                    isLast={index === outcomes.length - 1}
                  />
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
