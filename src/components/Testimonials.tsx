
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Ant Evans",
      role: "Agile Coach",
      testimonial: "delivered what was needed, I'm a quick fashion and adapted to my refinement, highly recommended"
    },
    {
      name: "Sal Leone",
      role: "RainesDev",
      testimonial: "Saksham delivered an EXCEPTIONAL business plan with professionalism and insightful data analysis, exceeding all expectations. Highly recommend!"
    },
    {
      name: "Ananya Patel",
      role: "Fluxware",
      testimonial: "Saksham helped us replace clunky spreadsheets and manual follow-ups with automated workflows. He didn't just plan the transformation; he implemented it end-to-end, making our operations run smoother than ever."
    },
    {
      name: "Rahul Suri",
      role: "TrendLoom",
      testimonial: "Saksham automated our client onboarding with AI, reducing manual work by 60% and freeing our team to focus on growth"
    },
    {
      name: "Meera Joshi",
      role: "EduPro",
      testimonial: "Saksham rebuilt our lead nurturing from scratch, personalised email sequences, better timing, and cleaner tracking. Within six weeks, our dormant leads started converting, boosting our sales pipeline"
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Real stories, real results:
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mb-8"
          >
            <CarouselContent className="ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-slate-600">({testimonial.role})</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{testimonial.name}</h3>
                    <p className="text-slate-700 italic">"{testimonial.testimonial}"</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
          
          <div className="text-center">
            <p className="text-xl text-slate-700 mb-6">
              "If you see yourself in these stories, we should talk."
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
              >
                Start Your Growth Sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                onClick={() => navigate('/case-studies')}
              >
                View Full Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
