
import { Check, X } from "lucide-react";

const WhyMe = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why work with{" "}
            <span className="text-orange-500">me?</span>
          </h2>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 text-gray-900 font-semibold text-lg">Feature</th>
                    <th className="text-center p-6 text-gray-600 font-medium">Agencies</th>
                    <th className="text-center p-6 text-orange-600 font-semibold bg-orange-50 rounded-t-lg">Me (Saksham)</th>
                    <th className="text-center p-6 text-gray-600 font-medium">Consultants</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">Direct, 1:1 Work</td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center bg-orange-50">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">Fast Execution</td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center bg-orange-50">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">Hands-on Implementation</td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center bg-orange-50">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">Clear Roadmaps</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <Check className="h-6 w-6 text-green-500 mb-1" />
                        <span className="text-xs text-gray-500">(Slow)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-orange-50">
                      <div className="flex flex-col items-center">
                        <Check className="h-6 w-6 text-green-500 mb-1" />
                        <span className="text-xs text-orange-600 font-medium">(Lean & Simple)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <Check className="h-6 w-6 text-green-500 mb-1" />
                        <span className="text-xs text-gray-500">(Theoretical)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">Custom-Tailored Solutions</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-6 w-6 text-red-500 mb-1" />
                        <span className="text-xs text-gray-500">(One-size)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-orange-50">
                      <div className="flex flex-col items-center">
                        <Check className="h-6 w-6 text-green-500 mb-1" />
                        <span className="text-xs text-orange-600 font-medium">(Team-specific)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-6 w-6 text-red-500 mb-1" />
                        <span className="text-xs text-gray-500">(Generic)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 text-gray-900 font-medium">Affordable & Lean</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-6 w-6 text-red-500 mb-1" />
                        <span className="text-xs text-gray-500">(High Retainer)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center bg-orange-50">
                      <div className="flex flex-col items-center">
                        <Check className="h-6 w-6 text-green-500 mb-1" />
                        <span className="text-xs text-orange-600 font-medium">(No Overhead)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-6 w-6 text-red-500 mb-1" />
                        <span className="text-xs text-gray-500">(Hourly Fees)</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-900 font-medium">Ongoing Support</td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center bg-orange-50 rounded-b-lg">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-8 rounded-2xl shadow-2xl mt-12">
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
