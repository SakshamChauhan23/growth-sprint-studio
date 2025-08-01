import { ArrowLeft, ExternalLink, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

const StrutishCaseStudy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">Case Studies</h1>
          <p className="text-lg text-slate-600 mt-2">Real results from real partnerships</p>
        </div>
      </div>

      {/* Strutish Case Study */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Case Study Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="bg-white rounded-lg p-4 flex-shrink-0">
                <img 
                  src="/lovable-uploads/b0aa9c0b-9905-4b39-af7c-5ad9a9f4aa34.png" 
                  alt="Strutish Logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">Strutish</h2>
                <p className="text-xl text-slate-300 mb-4">D2C Fashion • Streetwear • Growth Stage (4 Months Post-Launch)</p>
                <div className="flex flex-wrap gap-2">
                  {["Brand Strategy", "Marketing Optimization", "E-commerce Funnel Setup", "Creative Campaigns"].map((service) => (
                    <span key={service} className="bg-slate-700/50 text-white px-3 py-1 rounded-full text-sm">
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
                  The streetwear market was split between overpriced designer brands and generic mass-market apparel. For anime lovers and meme culture enthusiasts, nothing truly resonated.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  When Strutish launched, it faced:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Low brand awareness in a market dominated by The Souled Store and Snitch.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Conversions stuck at less than 1%, despite ads and decent designs.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Operational learning curves in print-on-demand fulfilment, returns, and quality management.
                  </li>
                </ul>
                <p className="text-lg text-slate-700 mt-4 font-medium">
                  Breaking through required a bold, niche-driven strategy.
                </p>
              </div>
            </section>

            {/* Our Approach */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Approach</h3>
              </div>
              
              <div className="grid gap-6">
                {[
                  {
                    title: "1. Niche Positioning",
                    items: [
                      "Focused on anime-meets-streetwear to carve a cultural niche rather than competing with mainstream brands."
                    ]
                  },
                  {
                    title: "2. Funnel Optimization & Conversions",
                    subtitle: "We rebuilt Strutish's conversion funnel end-to-end:",
                    items: [
                      "Traffic to Add-to-Cart (ATC): Increased via hyper-targeted ads aimed at anime/meme communities.",
                      "ATC to Checkout: Improved by simplifying the cart and adding trust signals (reviews, COD).",
                      "Checkout to Purchase: Reduced friction with a faster flow, fewer form fields, and visible return policies."
                    ],
                    result: "Result: Funnel conversion rate rose from 1% to 2%, doubling sales efficiency."
                  },
                  {
                    title: "3. Hyper-Targeted Marketing",
                    items: [
                      "Ran Meta ads focused on anime enthusiasts & meme-driven subcultures.",
                      "Seeded products with micro-influencers to drive relatable UGC."
                    ]
                  },
                  {
                    title: "4. Creative Differentiation",
                    items: [
                      "Introduced QR Code Meme Tees, linking each tee to curated meme pages—this concept went viral on niche meme forums."
                    ]
                  }
                ].map((approach, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">{approach.title}</h4>
                    {approach.subtitle && (
                      <p className="text-slate-700 mb-3">{approach.subtitle}</p>
                    )}
                    <ul className="space-y-3">
                      {approach.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-slate-700">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {approach.result && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-green-800 font-medium">{approach.result}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* The Results */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Results</h3>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-lg text-slate-700 mb-6 font-medium">
                  In 4 months, Strutish scaled significantly:
                </p>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700"><strong>300+ orders shipped</strong> | ₹1200 Average Order Value (AOV)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Daily traffic: <strong>400+ visits</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Funnel Conversion: Improved from <strong>1% to 2%</strong> (2x growth in purchases per visitor)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Marketing ROI: <strong>₹30,000/month</strong> ad spend with profitable returns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">Fulfillment streamlined: Integrated POD (QikInk) reduced delays & manual effort</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* The Impact */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Impact</h3>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-lg text-slate-700 mb-4 font-medium">
                  Strutish evolved into a niche brand with a cult-like community:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-700">Increased return customer rate and organic referrals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-700">Meme-driven campaigns sparked unpaid buzz on Instagram.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-700">Established anime-streetwear as its identity, separating it from generic streetwear brands.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Current Stage */}
            <section className="mb-8">
              <div className="bg-slate-900 text-white rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <h4 className="text-lg font-semibold">Current Stage</h4>
                </div>
                <p className="text-slate-300 mb-4">
                  Strutish is now focusing on:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Seasonal drops with limited-edition anime-inspired designs.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Expanding into hoodies, oversized fits, and caps.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scaling UGC & meme influencer-driven marketing for sustained growth.
                  </li>
                </ul>
              </div>
            </section>

            {/* Key Insight */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Key Insight</h4>
                <p className="text-slate-700 font-medium">
                  Optimizing the funnel + niche targeting = accelerated D2C growth.
                </p>
                <p className="text-slate-700 mt-2">
                  Strutish doubled its conversion rate and built a loyal community by pairing anime culture with streamlined e-commerce tactics.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-slate-200">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                Ready to scale your D2C brand like Strutish?
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
      <Footer />
    </div>
  );
};

export default StrutishCaseStudy;