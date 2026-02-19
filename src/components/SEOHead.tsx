import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "🏆 IN-STAN Stolarija Vrnjačka Banja #1 | Nameštaj po meri | Kantovanje MDF/HDF | CNC Obrada",
  description = "🏆 IN-STAN - Najbolja stolarija u Vrnjačkoj Banji! ✅ Nameštaj po meri ✅ Kantovanje ✅ Rezanje MDF/HDF ✅ CNC obrada ✅ Kuhinje ✅ Spavaće sobe ✅ 20+ godina iskustva ✅ 500+ zadovoljnih klijenata ☎ 063/1125490",
  keywords = "IN-STAN, in stan, in-stan, stolarija vrnjačka banja, najbolja stolarija vrnjačka banja, nameštaj po meri vrnjačka banja, kantovanje vrnjačka banja, rezanje MDF HDF vrnjačka banja, CNC obrada vrnjačka banja",
  canonical = "https://in-stan.rs/",
  ogImage = "/images/logo.png",
  structuredData
}) => {
  React.useEffect(() => {
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
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) ogImageMeta.setAttribute('content', ogImage);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', ogImage);
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', canonical);
    
    // Add structured data if provided
    if (structuredData) {
      let structuredDataScript = document.querySelector('#structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;