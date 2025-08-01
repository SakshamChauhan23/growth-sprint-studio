
import { Check, X } from "lucide-react";

const WhyMe = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 text-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-foreground">
            Why work with{" "}
            <span className="text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Saksham?</span>
          </h2>
          
          {/* Mobile Table Layout */}
          <div className="block lg:hidden">
            <div className="bg-card rounded-2xl p-4 shadow-lg overflow-x-auto">
              <table className="w-full min-w-[600px] text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 text-foreground font-semibold">Feature</th>
                    <th className="text-center p-3 text-muted-foreground font-medium">Agencies</th>
                    <th className="text-center p-3 text-secondary font-semibold bg-secondary/10 rounded-t-lg">Saksham</th>
                    <th className="text-center p-3 text-muted-foreground font-medium">Consultants</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground font-medium">Direct, 1:1 Work</td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                    <td className="p-3 text-center bg-secondary/10">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground font-medium">Fast Execution</td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                    <td className="p-3 text-center bg-secondary/10">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground font-medium">Hands-on Implementation</td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                    <td className="p-3 text-center bg-secondary/10">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground font-medium">Clear Roadmaps</td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <Check className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xs text-muted-foreground">(Slow)</span>
                      </div>
                    </td>
                    <td className="p-3 text-center bg-secondary/10">
                      <div className="flex flex-col items-center">
                        <Check className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xs text-secondary font-medium">(Lean & Simple)</span>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <Check className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xs text-muted-foreground">(Theoretical)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground font-medium">Custom-Tailored Solutions</td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-4 w-4 text-destructive mb-1" />
                        <span className="text-xs text-muted-foreground">(One-size)</span>
                      </div>
                    </td>
                    <td className="p-3 text-center bg-secondary/10">
                      <div className="flex flex-col items-center">
                        <Check className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xs text-secondary font-medium">(Team-specific)</span>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-4 w-4 text-destructive mb-1" />
                        <span className="text-xs text-muted-foreground">(Generic)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground font-medium">Affordable & Lean</td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-4 w-4 text-destructive mb-1" />
                        <span className="text-xs text-muted-foreground">(High Retainer)</span>
                      </div>
                    </td>
                    <td className="p-3 text-center bg-secondary/10">
                      <div className="flex flex-col items-center">
                        <Check className="h-4 w-4 text-primary mb-1" />
                        <span className="text-xs text-secondary font-medium">(No Overhead)</span>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <X className="h-4 w-4 text-destructive mb-1" />
                        <span className="text-xs text-muted-foreground">(Hourly Fees)</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground font-medium">Ongoing Support</td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                    <td className="p-3 text-center bg-secondary/10 rounded-b-lg">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="p-3 text-center">
                      <X className="h-4 w-4 text-destructive mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden lg:block bg-white rounded-3xl p-8 shadow-2xl">
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Direct, 1:1 Work</div>
                      <div className="text-sm text-gray-500 mt-1">Personal attention, not team delegation</div>
                    </td>
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Fast Execution</div>
                      <div className="text-sm text-gray-500 mt-1">Deliver in weeks, not months</div>
                    </td>
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Hands-on Implementation</div>
                      <div className="text-sm text-gray-500 mt-1">I build systems alongside you, not just advise</div>
                    </td>
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Clear Roadmaps</div>
                      <div className="text-sm text-gray-500 mt-1">Simple frameworks that teams can execute</div>
                    </td>
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Custom-Tailored Solutions</div>
                      <div className="text-sm text-gray-500 mt-1">Built specifically for your team's workflow</div>
                    </td>
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Affordable & Lean</div>
                      <div className="text-sm text-gray-500 mt-1">Fixed sprint pricing, no surprise costs</div>
                    </td>
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
                    <td className="p-6 text-gray-900 font-medium">
                      <div>Ongoing Support</div>
                      <div className="text-sm text-gray-500 mt-1">Available for questions after delivery</div>
                    </td>
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
          
          <div className="bg-gradient-to-r from-secondary to-primary p-6 sm:p-6 lg:p-8 rounded-2xl shadow-2xl mt-8 lg:mt-12 mx-2 lg:mx-0">
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
