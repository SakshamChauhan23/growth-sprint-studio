import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary";
  text?: string;
  className?: string;
}

const CTAButton = ({ 
  variant = "primary", 
  text = "Start Your 2-Week Growth Sprint",
  className = ""
}: CTAButtonProps) => {
  const isPrimary = variant === "primary";
  
  return (
    <div className={`text-center pt-10 ${className}`}>
      <Button 
        size="lg" 
        className={`${isPrimary 
          ? "bg-orange-500 hover:bg-orange-600" 
          : "bg-primary hover:bg-primary/90"
        } text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl`}
      >
        {isPrimary ? (
          <>
            {text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        ) : (
          <>
            <Calendar className="mr-3 h-6 w-6" />
            Book Your 20-min Call
          </>
        )}
      </Button>
    </div>
  );
};

export default CTAButton;