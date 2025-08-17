import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
}

export const SEOHead = ({ 
  title = "Saksham Chauhan - Growth Sprint Studio | Transform Ideas into Products, Scale Businesses Fast",
  description = "Expert growth consultant helping lean teams turn ideas into products and scale businesses. Specializing in MVP development, brand positioning, conversion optimization, and AI automation for startups and SMBs.",
  keywords = "growth consultant, product strategy, MVP development, brand positioning, conversion optimization, AI automation, startup growth, business development, growth sprint, lean teams, SaaS growth",
  image = "https://eeddf88f-39e9-4e25-8dc4-a11bffdaa8c7.lovableproject.com/lovable-uploads/b2f89dab-e169-4505-a629-4530f5989b23.png",
  canonical
}: SEOProps) => {
  const location = useLocation();
  useEffect(() => {
    const currentUrl = `https://eeddf88f-39e9-4e25-8dc4-a11bffdaa8c7.lovableproject.com${location.pathname}`;
    const canonicalUrl = canonical || currentUrl;
    
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl);
    }
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Add JSON-LD structured data for current page
    const existingJsonLd = document.querySelector('#page-jsonld');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }
    
    const jsonLdScript = document.createElement('script');
    jsonLdScript.type = 'application/ld+json';
    jsonLdScript.id = 'page-jsonld';
    jsonLdScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": currentUrl,
      "image": image,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Growth Sprint Studio",
        "url": "https://eeddf88f-39e9-4e25-8dc4-a11bffdaa8c7.lovableproject.com"
      },
      "inLanguage": "en-US",
      "dateModified": new Date().toISOString().split('T')[0]
    });
    document.head.appendChild(jsonLdScript);
  }, [title, description, keywords, image, canonical, location.pathname]);

  return null;
};