
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import WhatIDo from "@/components/WhatIDo";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import WhyMe from "@/components/WhyMe";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import CTAButton from "@/components/CTAButton";
import WhatIOffer from "@/components/WhatIOffer";
import ContactForm from "@/components/ContactForm";
import { SEOHead } from "@/utils/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navbar />
      <Hero />
      <WhySection />
      <WhoIWorkWith />
      <WhatIDo />
      <CTAButton className="py-12 sm:py-16 bg-slate-100" />
      <WhatIOffer />
      <WhyMe />
      <CTAButton className="py-12 sm:py-16 bg-white" variant="secondary" />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
