
const WhySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            I've been where you are:{" "}
            <span className="text-orange-500">overwhelmed, ambitious, and stretched thin.</span>
          </h2>
          
          <div className="prose prose-xl mx-auto text-slate-700 leading-relaxed">
            <p className="mb-6">
              Early in my career, I worked in lean teams where everyone wore multiple hats. I saw great ideas stall 
              because of unclear roadmaps, manual busywork, and a lack of focus on execution.
            </p>
            
            <p className="mb-6">
              Instead of waiting, I started solving these problems myself, mapping features, setting up automations, 
              and creating simple systems to free time for growth.
            </p>
            
            <p className="mb-6">
              That's when it clicked: most teams don't need more people. They require clearer direction, 
              more effective tools, and someone who can bridge the gap between strategy and execution.
            </p>
            
            <p className="text-xl font-semibold text-slate-900">
              That's what I do now for SaaS founders, e-commerce brands, agencies, and ops-heavy teams 
              who want results without adding headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
