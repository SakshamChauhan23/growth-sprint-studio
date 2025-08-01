import { ArrowLeft, ExternalLink, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Case Studies</h1>
          <p className="text-lg text-slate-600 mt-2">Real results from real partnerships</p>
        </div>
      </div>

      {/* SocialRipple Case Study */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Case Study Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="bg-white rounded-lg p-4 flex-shrink-0">
                <img 
                  src="/lovable-uploads/9c78e6dd-dc89-4095-ac6b-531b60f1e1b8.png" 
                  alt="SocialRipple Logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">SocialRipple</h2>
                <p className="text-xl text-blue-100 mb-4">B2B SaaS • HR-Tech Platform</p>
                <div className="flex flex-wrap gap-2">
                  {["Product Positioning", "Go-To-Market Strategy", "Content-Led Growth", "Lead Generation", "Product Development"].map((service) => (
                    <span key={service} className="bg-blue-500/30 text-white px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* The Problem */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Target className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Problem</h3>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <p className="text-lg text-slate-700 mb-4">
                  SocialRipple wanted to help companies turn employees into authentic brand advocates to drive recruitment, engagement, and brand visibility.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  However, as a solopreneur-led early-stage platform, they needed:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A clear positioning in a crowded HR-tech space.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A lean MVP roadmap execution that avoided overengineering.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A content-led GTM engine to build credibility and attract HR & marketing leaders.
                  </li>
                </ul>
              </div>
            </section>

            {/* Dashboard Preview */}
            <section className="mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/b1372160-9e1e-467d-8566-04fee9e3ab67.png" 
                  alt="SocialRipple Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
            </section>

            {/* Our Solution */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Solution</h3>
              </div>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "1. Positioning & Go-To-Market (GTM)",
                    items: [
                      "Benchmarked tools like EveryoneSocial & DSMN8 to define niche differentiation.",
                      "Identified target markets: Middle East, Singapore, and APAC.",
                      "Built audience personas for CXOs, HR & TA heads, and marketing leaders.",
                      "Designed pre-launch, launch, and post-launch GTM campaigns."
                    ]
                  },
                  {
                    title: "2. Lead Generation & Outreach",
                    items: [
                      "Built LinkedIn outreach workflows with personalized warm outbound.",
                      "Implemented lead scoring to focus on high-intent prospects.",
                      "Used thought leadership content to nurture and engage HR leaders."
                    ]
                  },
                  {
                    title: "3. Content-Led Growth",
                    items: [
                      "Developed a LinkedIn content calendar on advocacy benefits and recruitment storytelling.",
                      "Created case study-driven visuals and motion graphic concepts.",
                      "Produced festival-based B2B campaigns across 15 major events."
                    ]
                  },
                  {
                    title: "4. Product & Workflow Setup",
                    items: [
                      "Defined MVP workflows, features, and user stories.",
                      "Designed and launched a landing page to validate interest.",
                      "Built an investor-ready prototype showcasing the platform's core functions."
                    ]
                  }
                ].map((solution, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">{solution.title}</h4>
                    <ul className="space-y-3">
                      {solution.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-slate-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* The Impact */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Impact</h3>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Positioned SocialRipple as a credible HR-tech brand pre-launch.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Created a lead-gen engine that engaged HR leaders across SaaS, Tech & B2B sectors.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Content-driven traction on LinkedIn validated early demand and built authority.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Delivered a clear MVP roadmap and prototype for faster investor conversations and product build-out.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700"><strong>520+ waitlist sign-ups</strong> achieved during pre-launch campaigns.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Current Stage */}
            <section className="mb-8">
              <div className="bg-slate-900 text-white rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <h4 className="text-lg font-semibold">Current Stage</h4>
                </div>
                <p className="text-slate-300">
                  The platform is in development, with pre-launch campaigns actively running to build early adopter interest and community engagement.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-slate-200">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                Ready to scale your product like SocialRipple?
              </h4>
              <Link 
                to="/" 
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Growth Sprint
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;