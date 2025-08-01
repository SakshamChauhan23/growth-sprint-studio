
import { CheckCircle, Rocket, TrendingUp, Zap } from "lucide-react";

const WhatIDo = () => {
  const outcomes = [
    {
      icon: <Rocket className="h-8 w-8 text-orange-500" />,
      title: "Your idea becomes a product",
      description: "We define your MVP, prioritise features, and validate fast."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Your brand gets noticed",
      description: "I craft positioning, messaging, and content that build authority and trust."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Your growth engine runs itself",
      description: "From funnel optimisation to AI-powered workflows, we eliminate manual bottlenecks so you can focus on scaling."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            Here's what happens when we work together:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-4">{outcome.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{outcome.title}</h3>
                <p className="text-slate-700 leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl text-slate-700 mb-4">
              "No bloated teams. No endless consulting decks. Just fast, hands-on execution where we build together."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
