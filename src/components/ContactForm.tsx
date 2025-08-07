import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Let's Start Your Growth Journey
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to transform your business? Get in touch and let's discuss your next growth sprint.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Contact Methods */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">Get In Touch</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm md:text-base">Email</h4>
                    <p className="text-slate-300 text-sm md:text-base break-all">sakshamchauhan23@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Phone</h4>
                    <p className="text-slate-300 text-sm md:text-base">+919643851089</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Call CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 shadow-2xl shadow-orange-500/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center">
                Prefer a Quick Call?
              </h3>
              <p className="text-orange-100 mb-4 md:mb-6 leading-relaxed text-center text-sm md:text-base">
                Book a 60-minute discovery call to discuss your goals and see how I can help accelerate your growth.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendar.app.google/ywS5j1UormyUYA8J7', '_blank')}
                className="w-full bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 md:py-4 text-base md:text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Your 60-min Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;