
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">showcasy.</div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="rounded-full px-6 py-2 border-border text-foreground hover:bg-accent"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-4">Hello! I'm [Your Name].</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-foreground">
              I help lean teams turn{" "}
              <span className="relative">
                ideas into products
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-muted opacity-50"></div>
              </span>
              , brands into growth engines, and{" "}
              <span className="text-muted-foreground">
                workflows into time saved.
              </span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="md:max-w-md">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A multidisciplinary approach combining product thinking and execution 
                to achieve online growth faster, simpler, and with measurable impact.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Phone mockup placeholder */}
            <div className="flex-shrink-0 md:ml-8">
              <div className="w-64 h-96 bg-muted/30 rounded-3xl border-8 border-muted/50 relative">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-muted rounded-full"></div>
                <div className="p-6 pt-12">
                  <div className="text-xs text-muted-foreground mb-2">showcasy.</div>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">Hello! I'm [Name].</div>
                    <div className="text-sm font-bold leading-tight">
                      Designing digital product with emphasis on{" "}
                      <span className="text-muted-foreground">visual design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
