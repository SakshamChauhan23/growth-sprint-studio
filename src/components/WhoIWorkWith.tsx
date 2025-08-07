
import { Building, ShoppingCart, Users, Briefcase } from "lucide-react";

const WhoIWorkWith = () => {
  const personas = [
    {
      icon: <Building className="h-12 w-12 text-orange-500" />,
      title: "The Founder",
      description: "You have a product idea, but no clear MVP path. You need someone to cut through the noise and map features that matter."
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-orange-500" />,
      title: "The Operator",
      description: "You're running an e-commerce or staffing brand. Sales are growing, but ops are messy and manual work eats your time."
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "The Agency Owner",
      description: "You want to scale delivery and client reporting without hiring endlessly."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-orange-500" />,
      title: "The SMB Team Lead",
      description: "Your HR and admin workflows are outdated, and it's slowing your team down."
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            If you see yourself in these stories,{" "}
            <span className="text-orange-500">we should talk:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {personas.map((persona, index) => (
              <div key={index} className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mx-2 sm:mx-0">
                <div className="mb-6">{persona.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{persona.title}</h3>
                <p className="text-slate-700 leading-relaxed">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;
