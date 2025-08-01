
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Testimonials = () => {
  const cases = [
    {
      company: "SocialRipple",
      type: "SaaS",
      result: "From vague ideas to 200+ early users in 6 weeks without writing a line of code."
    },
    {
      company: "RainesDev",
      type: "Staffing",
      result: "Manual candidate sourcing cut by 70% AI workflows freed their team to close faster."
    },
    {
      company: "Strutish",
      type: "E-com",
      result: "Funnel conversion jumped from 1.5% → 2%, saving 15+ hrs/week in ops."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Real stories, real results:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((case_item, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600">({case_item.type})</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{case_item.company}</h3>
                <p className="text-slate-700 italic">"{case_item.result}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl text-slate-700 mb-8">
              "Each story started small: one roadmap, one funnel, one workflow and grew from there."
            </p>
            
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              View Full Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
