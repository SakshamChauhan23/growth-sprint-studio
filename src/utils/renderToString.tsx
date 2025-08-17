// Server-side rendering helper for better SEO
export const getPageContent = (path: string) => {
  const baseContent = {
    title: "Saksham Chauhan - Growth Sprint Studio | Transform Ideas into Products, Scale Businesses Fast",
    description: "Expert growth consultant helping lean teams turn ideas into products and scale businesses. Specializing in MVP development, brand positioning, conversion optimization, and AI automation for startups and SMBs.",
    keywords: "growth consultant, product strategy, MVP development, brand positioning, conversion optimization, AI automation, startup growth, business development, growth sprint, lean teams, SaaS growth",
    image: "https://eeddf88f-39e9-4e25-8dc4-a11bffdaa8c7.lovableproject.com/lovable-uploads/b2f89dab-e169-4505-a629-4530f5989b23.png",
    url: `https://eeddf88f-39e9-4e25-8dc4-a11bffdaa8c7.lovableproject.com${path}`
  };

  switch (path) {
    case '/case-studies':
      return {
        ...baseContent,
        title: "Case Studies - Growth Sprint Studio | Client Success Stories",
        description: "Explore our client success stories. See how we've helped startups and SMBs transform ideas into products, scale businesses, and achieve growth through strategic consulting and AI automation.",
        keywords: "case studies, client success stories, startup growth, business transformation, MVP development case studies, growth consulting results"
      };
    
    case '/case-studies/socialripple':
      return {
        ...baseContent,
        title: "SocialRipple Case Study - Growth Sprint Studio | Social Media Analytics Platform",
        description: "How we helped SocialRipple build and scale their social media analytics platform, achieving significant user growth and market penetration through strategic product development.",
        keywords: "SocialRipple, social media analytics, platform development, user growth, case study"
      };
    
    case '/case-studies/strutish':
      return {
        ...baseContent,
        title: "Strutish Case Study - Growth Sprint Studio | Fashion E-commerce Success",
        description: "Discover how we transformed Strutish's fashion e-commerce business through strategic growth consulting, brand positioning, and conversion optimization strategies.",
        keywords: "Strutish, fashion ecommerce, brand positioning, conversion optimization, case study"
      };
    
    case '/case-studies/rainesdev':
      return {
        ...baseContent,
        title: "RainesDev Case Study - Growth Sprint Studio | Development Agency Growth",
        description: "Learn how we helped RainesDev scale their development agency through strategic positioning, client acquisition optimization, and business process automation.",
        keywords: "RainesDev, development agency, business scaling, client acquisition, case study"
      };
    
    default:
      return baseContent;
  }
};