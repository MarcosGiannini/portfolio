import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({ title, description, canonical, ogImage }: SEOProps) => {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourportfolio.com";
  const fullTitle = `${title} | John Doe - Portfolio`;
  const fullDescription =
    description.length > 160
      ? `${description.substring(0, 157)}...`
      : description;
  const ogImageUrl = ogImage
    ? `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.jpg`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical || siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonical || siteUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
};

export default SEO;
