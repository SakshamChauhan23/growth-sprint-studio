import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesListing = () => {
  const caseStudies = [
    {
      id: "socialripple",
      title: "SocialRipple",
      industry: "B2B SaaS • HR-Tech Platform",
      description: "Positioning an early-stage HR-tech platform to turn employees into authentic brand advocates",
      image: "/lovable-uploads/9c78e6dd-dc89-4095-ac6b-531b60f1e1b8.png",
      services: ["Product Positioning", "Go-To-Market Strategy", "Content-Led Growth", "Lead Generation", "Product Development"],
      results: "520+ waitlist sign-ups during pre-launch campaigns",
      slug: "/case-studies/socialripple"
    }
  ];

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

      {/* Case Studies Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Company Logo */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
                <div className="bg-white rounded-lg p-3 w-fit">
                  <img 
                    src={study.image} 
                    alt={`${study.title} Logo`}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              <div className="p-6">
                {/* Title and Industry */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{study.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{study.industry}</p>

                {/* Description */}
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">{study.description}</p>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {study.services.slice(0, 3).map((service) => (
                      <span key={service} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                    {study.services.length > 3 && (
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                        +{study.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Result */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Key Result:</h4>
                  <p className="text-sm text-green-700 font-medium">{study.results}</p>
                </div>

                {/* CTA */}
                <Link
                  to={study.slug}
                  className="inline-flex items-center w-full justify-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm"
                >
                  Read Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Placeholder cards for future case studies */}
          {[1, 2].map((index) => (
            <div key={`placeholder-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden opacity-50">
              <div className="bg-gradient-to-r from-slate-400 to-slate-500 px-6 py-8">
                <div className="bg-white rounded-lg p-3 w-fit">
                  <div className="h-8 w-16 bg-slate-200 rounded"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="h-6 bg-slate-200 rounded mb-2"></div>
                <div className="h-4 bg-slate-100 rounded mb-4 w-2/3"></div>
                <div className="h-16 bg-slate-100 rounded mb-4"></div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-6 w-16 bg-slate-100 rounded"></div>
                  ))}
                </div>
                <div className="h-4 bg-slate-100 rounded mb-6"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-12">
          <p className="text-slate-600">More case studies coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesListing;