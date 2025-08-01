
const WhyMe = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why work with me instead of{" "}
            <span className="text-orange-500">an agency or consultant?</span>
          </h2>
          
          <div className="prose prose-xl mx-auto text-slate-300 leading-relaxed mb-12">
            <p className="mb-6">
              Agencies hand over big retainers and slow timelines. Consultants drop strategy decks and vanish.
            </p>
            
            <p className="mb-8">
              I'm neither. I work directly with you, like an embedded partner, combining product thinking and 
              AI automation to deliver impact you can measure quickly, safely, and without extra overhead.
            </p>
            
            <p>
              I use the same tools I've implemented across SaaS, e-com, and agency teams, AI workflows, 
              no-code systems, and data-secure setups to ship faster and smarter.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-8 rounded-2xl shadow-2xl">
            <blockquote className="text-2xl md:text-3xl font-bold text-white">
              "I don't just tell you what to do. I build it with you."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
