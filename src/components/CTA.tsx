
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            Ready to Scale Your Business?
          </h2>
          
          <Button 
            size="lg" 
            onClick={() => window.open('https://calendar.app.google/ywS5j1UormyUYA8J7', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Calendar className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            Book Your 60-min Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
