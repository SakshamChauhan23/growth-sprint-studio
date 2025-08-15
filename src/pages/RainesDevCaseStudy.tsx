import { ArrowLeft, Target, TrendingUp, Users, Zap, BarChart3, Globe, Settings, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButton from "@/components/CTAButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageWithFallback from "@/components/ImageWithFallback";
import { SEOHead } from "@/utils/seo";

const RainesDevCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="RainesDev Case Study - IT Staffing Digital Transformation | Growth Sprint Studio"
        description="Complete digital transformation of RainesDev IT staffing firm through business planning, GTM strategy, website development, and automated recruitment workflows."
        keywords="IT staffing, digital transformation, business planning, GTM strategy, website development, recruitment automation, RainesDev"
      />
      <Navbar />
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Case Studies</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Header */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="bg-slate-50 rounded-xl p-4">
              <ImageWithFallback
                src="/lovable-uploads/cd2b9933-b10a-49c2-ad8e-9b9f2fc20136.png" 
                alt="RainesDev Logo" 
                className="h-8 w-auto"
                loading="eager"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">RainesDev</h2>
              <p className="text-slate-600">IT Staffing & Recruiting</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-1">Industry</h4>
              <p className="text-sm text-slate-600">IT Staffing & Recruiting</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-1">Stage</h4>
              <p className="text-sm text-slate-600">Growth Stage (Expanding Placements & Client Base)</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-1">Services</h4>
              <p className="text-sm text-slate-600">Business Planning, GTM Strategy, Website Development, Digital Transformation</p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-2 rounded-lg">
              <Target className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">The Problem</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-700 mb-4">
              RainesDev, a US-based IT staffing and executive recruiting firm, needed to:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Build a data-backed business plan and financial model for scaling.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Establish a clear GTM strategy targeting enterprise clients and niche sectors.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Revamp their website to better reflect their value proposition.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                Digitize recruitment operations to reduce manual workload and speed up hiring.
              </li>
            </ul>
            <p className="text-slate-700 mt-4">
              They aimed to maintain their competitive edge: faster placements at 50% lower fees than industry standards, while scaling operations efficiently.
            </p>
          </div>
        </section>

        {/* Website Preview */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Website Preview</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-700 mb-6">
              The redesigned RainesDev website showcases their value proposition with a professional, data-driven approach to technical recruitment.
            </p>
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
              <ImageWithFallback
                src="/lovable-uploads/1b7a86e9-603c-42d7-b0df-b439511f42aa.png" 
                alt="RainesDev Website Preview"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate-600 mt-4 text-center">
              Clean, professional design emphasizing data-backed precision in technical hiring
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Approach</h3>
          </div>

          <div className="space-y-8">
            {/* Business Plan & Financial Modelling */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h4 className="text-lg font-semibold text-slate-900">1. Business Plan & Financial Modelling</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Created financial projections for revenue, monthly P&L, and ROI.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Modelled placement growth scenarios to support investor and internal planning.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  Built a business roadmap aligning recruitment, marketing, and operations.
                </li>
              </ul>
            </div>

            {/* GTM Strategy */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-green-600" />
                <h4 className="text-lg font-semibold text-slate-900">2. Go-To-Market (GTM) Strategy</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Defined target client segments: IT, SaaS, and executive hiring.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Outlined acquisition channels (LinkedIn outreach, referral programs, niche job boards).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Developed messaging frameworks positioning RainesDev against high-cost agencies.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  Set up and executed lead nurturing campaigns via email and LinkedIn.
                </li>
              </ul>
            </div>

            {/* Website Development */}
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-purple-600" />
                <h4 className="text-lg font-semibold text-slate-900">3. Website Development</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Redesigned the website for a clearer value proposition and improved navigation.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Optimized SEO structure to attract hiring decision-makers organically.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  Integrated lead capture forms to streamline inbound inquiries.
                </li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-orange-600" />
                <h4 className="text-lg font-semibold text-slate-900">4. Digital Transformation</h4>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  Built a centralised Applications Dashboard to unify multi-channel candidate tracking.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  Automated candidate tagging, prioritization, and engagement workflows (SMS & email).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  Drafted Zoho Recruit SOPs and recommended LinkedIn Recruiter integration to cut manual overhead.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">The Impact</h3>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Financial clarity:</strong> Data-backed modelling guided hiring and revenue decisions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Stronger GTM foundation:</strong> Clear segments, channels, and messaging improved outreach focus.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Improved digital presence:</strong> Website redesign boosted credibility and inbound lead flow.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Recruitment automation:</strong> Reduced manual tracking, improved speed-to-hire, and optimised workflows.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Deliverables */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-100 p-2 rounded-lg">
              <Users className="w-5 h-5 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Key Deliverables</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-1">•</span>
                Business plan & financial modelling sheets.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-1">•</span>
                GTM strategy and messaging framework.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-1">•</span>
                Website redesign & SEO optimization.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-600 mt-1">•</span>
                Recruitment workflow automation (dashboards, SOPs, LinkedIn Recruiter integration).
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <CTAButton 
          variant="primary"
          text="Start Your Growth Sprint"
        />
      </div>
      <Footer />
    </div>
  );
};

export default RainesDevCaseStudy;