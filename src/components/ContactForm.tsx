import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's Start Your Growth Journey
            </h2>
            <p className="text-xl text-slate-700">
              Ready to transform your business? Get in touch and let's discuss your next growth sprint.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="shadow-lg max-w-md">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-700">sakshamchauhan23@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <Phone className="h-6 w-6 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-700">+919643851089</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Prefer a Quick Call?
                  </h3>
                  <p className="text-slate-700 mb-6">
                    Book a 60-minute discovery call to discuss your goals and see how I can help accelerate your growth.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('https://calendar.app.google/ywS5j1UormyUYA8J7', '_blank')}
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    Book Your 60-min Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;