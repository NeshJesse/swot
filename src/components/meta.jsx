import React from 'react';
import Head from 'next/head';

const MetaTags = () => (
  <Head>
    {/* Primary Meta Tags */}
    <title>BaeSWOT - Smart Dating Analysis Tool</title>
    <meta name="description" content="Make smarter dating decisions with BaeSWOT. Analyze potential partners, relationships, and dating prospects using our intuitive SWOT analysis tool. No signup required." />
    <meta name="keywords" content="dating analysis, relationship tool, SWOT analysis, dating app, relationship compatibility" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content="BaeSWOT - Smart Dating Analysis Tool" />
    <meta property="og:description" content="Make smarter dating decisions with our relationship analysis tool" />
    <meta property="og:url" content="https://baeswota.vercel.app/" />
    <meta property="og:site_name" content="BaeSWOT" />
    <meta property="og:image" content="/social.jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="BaeSWOT - Dating Analysis Tool" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="BaeSWOT - Smart Dating Analysis Tool" />
    <meta name="twitter:description" content="Make smarter dating decisions with our relationship analysis tool" />
    <meta name="twitter:image" content="/social.jpeg" />

    {/* Robots Meta Tags */}
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

    {/* Verification Meta Tags */}
    <meta name="google-site-verification" content="your-google-verification-code" />

    {/* Author Meta Tags */}
    <meta name="author" content="Your Name" />
  </Head>
);

export default MetaTags;