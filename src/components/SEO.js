import { useEffect } from "react";

const SITE_URL = "https://www.kefahwambai.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-insights.png`;

function setMeta(selector, attribute, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) tag.setAttribute(match[1], match[2]);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
}

function SEO({
  title = "Kefah Wambai | Law, Technology & Emerging Issues",
  description = "Kefah Wambai writes about Kenyan legal practice, technology and emerging issues.",
  path = "/",
  type = "website",
  image = DEFAULT_IMAGE,
  article,
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:site_name"]', "content", "Kefah Wambai");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const oldSchema = document.getElementById("page-jsonld");
    if (oldSchema) oldSchema.remove();

    if (article) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-jsonld";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updated || article.date,
        mainEntityOfPage: canonicalUrl,
        image: [image],
        author: {
          "@type": "Person",
          name: "Kefah Wambai",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Person",
          name: "Kefah Wambai",
          url: SITE_URL,
        },
        keywords: article.keywords?.join(", "),
      });
      document.head.appendChild(script);
    }

    return () => {
      const schema = document.getElementById("page-jsonld");
      if (schema) schema.remove();
    };
  }, [title, description, path, type, image, article]);

  return null;
}

export default SEO;
