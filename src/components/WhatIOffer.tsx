import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Megaphone, TrendingUp, Zap } from "lucide-react";

const WhatIOffer = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Product & Roadmaps",
      subtitle: "Turn ideas into products with clarity.",
      features: [
        "MVP design & validation",
        "Feature mapping & prioritization", 
        "User flows & onboarding optimization"
      ]
    },
    {
      icon: <Megaphone className="h-8 w-8 text-orange-500" />,
      title: "Brand & Content",
      subtitle: "Build a brand that earns trust and attention.",
      features: [
        "Brand positioning & messaging",
        "Visual identity alignment",
        "Content pillars & scalable systems"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Growth Campaigns",
      subtitle: "Fix funnels, nurture leads, and boost conversions.",
      features: [
        "Funnel audits & CRO",
        "Lead nurturing campaigns (drip workflows)",
        "Performance tracking & campaign tweaks"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "AI Workflows & Automation",
      subtitle: "Replace manual work with smart, simple systems.",
      features: [
        "Workflow automation (Ops, HR, CRM)",
        "AI-driven lead tracking & sourcing",
        "Dashboards & reporting automation"
      ]
    }
  ];

  return (
    <section id="what-i-offer" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What I Offer
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Practical, focused solutions to help you ship faster, scale smarter, and simplify growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-slate-200"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-700 font-medium">{service.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
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

export default WhatIOffer;