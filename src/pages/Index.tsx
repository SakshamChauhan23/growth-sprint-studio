
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import WhatIDo from "@/components/WhatIDo";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import WhyMe from "@/components/WhyMe";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import CTAButton from "@/components/CTAButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhySection />
      <WhatIDo />
      <CTAButton className="py-12 sm:py-16 bg-slate-100" />
      <WhoIWorkWith />
      <WhyMe />
      <CTAButton className="py-12 sm:py-16 bg-white" variant="secondary" />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
