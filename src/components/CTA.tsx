
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Every transformation I've led started with{" "}
            <span className="text-orange-500">one small step.</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Whether it was mapping a SaaS MVP, optimising an e-commerce funnel, or automating sourcing for a staffing firm, it all began with one bottleneck that we solved in under two weeks.
          </p>
          
          <p className="text-xl text-slate-300 mb-12">
            Let's do the same for you. No retainer. No fluff. Just one focused sprint that creates visible impact fast.
          </p>
          
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Calendar className="mr-3 h-6 w-6" />
            Book Your 20-min Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
