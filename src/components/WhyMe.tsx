
import ComparisonTable from "@/components/ui/comparison-table";

const WhyMe = () => {
  const comparisonData = [
    {
      feature: "Direct, 1:1 Work",
      description: "Personal attention, not team delegation",
      agencies: false,
      saksham: true,
      consultants: false,
    },
    {
      feature: "Fast Execution", 
      description: "Deliver in weeks, not months",
      agencies: false,
      saksham: true,
      consultants: false,
    },
    {
      feature: "Hands-on Implementation",
      description: "I build systems alongside you, not just advise",
      agencies: false,
      saksham: true,
      consultants: false,
    },
    {
      feature: "Clear Roadmaps",
      description: "Simple frameworks that teams can execute",
      agencies: { checked: true, note: "(Slow)" },
      saksham: { checked: true, note: "(Lean & Simple)" },
      consultants: { checked: true, note: "(Theoretical)" },
    },
    {
      feature: "Custom-Tailored Solutions",
      description: "Built specifically for your team's workflow",
      agencies: { checked: false, note: "(One-size)" },
      saksham: { checked: true, note: "(Team-specific)" },
      consultants: { checked: false, note: "(Generic)" },
    },
    {
      feature: "Affordable & Lean",
      description: "Fixed sprint pricing, no surprise costs",
      agencies: { checked: false, note: "(High Retainer)" },
      saksham: { checked: true, note: "(No Overhead)" },
      consultants: { checked: false, note: "(Hourly Fees)" },
    },
    {
      feature: "Ongoing Support",
      description: "Available for questions after delivery",
      agencies: false,
      saksham: true,
      consultants: false,
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50 text-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-foreground">
            Why work with{" "}
            <span className="text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Saksham?</span>
          </h2>
          
          <ComparisonTable data={comparisonData} />
          
          <div className="bg-gradient-to-r from-secondary to-primary p-6 sm:p-6 lg:p-8 rounded-2xl shadow-2xl mt-6 lg:mt-8 mx-2 lg:mx-0">
            <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-background text-center accent-text">
              "I don't just tell you what to do. I build it with you."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
