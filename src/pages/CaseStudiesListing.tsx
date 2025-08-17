import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageWithFallback from "@/components/ImageWithFallback";
import { SEOHead } from "@/utils/seo";

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
    },
    {
      id: "strutish",
      title: "Strutish",
      industry: "D2C Fashion • Streetwear",
      description: "Scaled a D2C streetwear brand by optimizing conversion funnels and targeting anime/meme culture enthusiasts",
      image: "/lovable-uploads/b0aa9c0b-9905-4b39-af7c-5ad9a9f4aa34.png",
      services: ["Brand Strategy", "Marketing Optimization", "E-commerce Funnel Setup", "Creative Campaigns"],
      results: "300+ orders shipped with 2x conversion rate improvement",
      slug: "/case-studies/strutish"
    },
    {
      id: "rainesdev",
      title: "RainesDev",
      industry: "IT Staffing & Recruiting",
      description: "Scaled an IT staffing firm through business planning, GTM strategy, website development, and digital transformation",
      image: "/lovable-uploads/cd2b9933-b10a-49c2-ad8e-9b9f2fc20136.png",
      services: ["Business Planning", "GTM Strategy", "Website Development", "Digital Transformation"],
      results: "Complete digital transformation with automated recruitment workflows",
      slug: "/case-studies/rainesdev"
    }
  ];

  console.log("CaseStudiesListing component is rendering");
  
  return (
    <main className="min-h-screen bg-slate-50">
      <SEOHead
        title="Case Studies - Growth Sprint Studio | Client Success Stories"
        description="Explore our client success stories. See how we've helped startups and SMBs transform ideas into products, scale businesses, and achieve growth through strategic consulting and AI automation."
        keywords="case studies, client success stories, startup growth, business transformation, MVP development case studies, growth consulting results"
      />
      <Navbar />
      {/* Header */}
      <section className="bg-white border-b">
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
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Company Logo */}
              <div className={`px-6 py-8 ${
                study.id === 'socialripple' ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 
                study.id === 'rainesdev' ? 'bg-gradient-to-r from-green-600 to-green-700' :
                'bg-gradient-to-r from-slate-800 to-slate-900'
              }`}>
                <div className="bg-white rounded-lg p-3 w-fit">
                  <ImageWithFallback
                    src={study.image} 
                    alt={`${study.title} Logo`}
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-6">
                {/* Title and Industry */}
                <h2 className="text-xl font-bold text-slate-900 mb-2">{study.title}</h2>
                <p className="text-sm text-slate-600 mb-4">{study.industry}</p>

                {/* Description */}
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">{study.description}</p>

                {/* Services */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Services:</h3>
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

                {/* CTA */}
                <Link
                  to={study.slug}
                  className="inline-flex items-center w-full justify-center bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-lg font-medium transition-colors text-sm"
                >
                  Read Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}

          {/* Placeholder cards for future case studies */}
          {[1].map((index) => (
            <article key={`placeholder-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden opacity-50">
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
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-12">
          <p className="text-slate-600">More case studies coming soon...</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CaseStudiesListing;