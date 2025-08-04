import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import CaseStudiesListing from "./pages/CaseStudiesListing";
import StrutishCaseStudy from "./pages/StrutishCaseStudy";
import RainesDevCaseStudy from "./pages/RainesDevCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-studies" element={<CaseStudiesListing />} />
            <Route path="/case-studies/socialripple" element={<CaseStudies />} />
            <Route path="/case-studies/strutish" element={<StrutishCaseStudy />} />
            <Route path="/case-studies/rainesdev" element={<RainesDevCaseStudy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
