import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  children?: ReactNode;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const defaultImage = '/images/hero-placeholder.svg';

const SEO = ({ title, description, url, image = defaultImage, children, jsonLd }: SEOProps) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://vitaverawellness.com';
  const canonical = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      {children}
    </Helmet>
  );
};

export default SEO;
