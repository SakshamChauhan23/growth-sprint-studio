
const WhyMe = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why work with{" "}
            <span className="text-orange-500">me?</span>
          </h2>
          
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-2xl">
              <thead>
                <tr className="bg-slate-800">
                  <th className="p-4 text-left text-lg font-semibold text-orange-500 border-r border-slate-700">Agencies</th>
                  <th className="p-4 text-left text-lg font-semibold text-orange-500 border-r border-slate-700">Me</th>
                  <th className="p-4 text-left text-lg font-semibold text-orange-500">Consultants</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="p-4 border-r border-slate-700">Multiple layers, account managers, and inflated costs.</td>
                  <td className="p-4 border-r border-slate-700 bg-orange-500/10 text-white">You get a fast, personal approach that doesn't break the bank!</td>
                  <td className="p-4">Expensive hourly billing with limited hands-on involvement.</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-4 border-r border-slate-700">Bureaucratic approvals delay launches.</td>
                  <td className="p-4 border-r border-slate-700 bg-orange-500/10 text-white">We sprint on one priority at a time and deliver in weeks, not months.</td>
                  <td className="p-4">Hand over decks, leaving you to figure out execution.</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-4 border-r border-slate-700">One-size-fits-all solutions built for larger enterprises.</td>
                  <td className="p-4 border-r border-slate-700 bg-orange-500/10 text-white">Roadmaps, growth systems, and workflows built around your context.</td>
                  <td className="p-4">Minimal involvement post-strategy, no real execution.</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-slate-700">Rigid processes with little flexibility.</td>
                  <td className="p-4 border-r border-slate-700 bg-orange-500/10 text-white">Simple, practical systems designed for agility and data safety.</td>
                  <td className="p-4">No ongoing iteration or refinement, just recommendations.</td>
                </tr>
              </tbody>
            </table>
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
