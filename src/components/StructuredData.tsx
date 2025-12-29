import React from 'react';

const StructuredData: React.FC = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IN-STAN Stolarija",
    "url": "https://in-stan.rs",
    "logo": "https://aislike.rs/panic/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+381631125490",
      "contactType": "customer service",
      "availableLanguage": "Serbian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Витојевачки Пут 10",
      "addressLocality": "Vrnjačka Banja",
      "postalCode": "36210",
      "addressCountry": "RS"
    },
    "sameAs": []
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Početna",
        "item": "https://in-stan.rs"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Usluge",
        "item": "https://in-stan.rs/#/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Galerija",
        "item": "https://in-stan.rs/#/gallery"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Kontakt",
        "item": "https://in-stan.rs/#/contact"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliko košta izrada nameštaja po meri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cena zavisi od složenosti projekta, materijala i dimenzija. Kontaktirajte nas za besplatnu procenu na 063/1125490."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko traje izrada nameštaja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vreme izrade zavisi od složenosti projekta, obično između 2-4 nedelje od potvrde narudžbine."
        }
      },
      {
        "@type": "Question",
        "name": "Da li nudite garanciju?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, nudimo 5 godina garancije na sve naše proizvode i usluge."
        }
      },
      {
        "@type": "Question",
        "name": "Koje materijale koristite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Koristimo visokokvalitetne MDF, HDF, Univer ploče, kao i granit, mramor i kvarc za radne ploče."
        }
      }
    ]
  };

  React.useEffect(() => {
    // Add organization structured data
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationData);
    orgScript.id = 'organization-structured-data';
    document.head.appendChild(orgScript);

    // Add breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbData);
    breadcrumbScript.id = 'breadcrumb-structured-data';
    document.head.appendChild(breadcrumbScript);

    // Add FAQ structured data
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqData);
    faqScript.id = 'faq-structured-data';
    document.head.appendChild(faqScript);

    return () => {
      // Cleanup on unmount
      const orgScriptElement = document.getElementById('organization-structured-data');
      const breadcrumbScriptElement = document.getElementById('breadcrumb-structured-data');
      const faqScriptElement = document.getElementById('faq-structured-data');
      
      if (orgScriptElement) orgScriptElement.remove();
      if (breadcrumbScriptElement) breadcrumbScriptElement.remove();
      if (faqScriptElement) faqScriptElement.remove();
    };
  }, []);

  return null;
};

export default StructuredData;