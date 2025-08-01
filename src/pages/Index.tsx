
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import WhatIDo from "@/components/WhatIDo";
import WhyMe from "@/components/WhyMe";
import Testimonials from "@/components/Testimonials";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhySection />
      <WhatIDo />
      <WhyMe />
      <Testimonials />
      <WhoIWorkWith />
      <CTA />
    </div>
  );
};

export default Index;
