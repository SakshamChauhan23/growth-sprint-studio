import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ContactForm = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start Your Growth Journey
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch and let's discuss your next growth sprint.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Methods */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-slate-300">sakshamchauhan23@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-slate-300">+919643851089</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Call CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl shadow-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Prefer a Quick Call?
              </h3>
              <p className="text-orange-100 mb-6 leading-relaxed text-center">
                Book a 60-minute discovery call to discuss your goals and see how I can help accelerate your growth.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendar.app.google/ywS5j1UormyUYA8J7', '_blank')}
                className="w-full bg-white text-orange-600 hover:bg-orange-50 font-semibold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
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