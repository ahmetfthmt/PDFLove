/**
 * Site configuration
 */
export const siteConfig = {
  name: 'PdfLove',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://PdfLove.devtoolcafe.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/PdfLoveTool/PdfLove',
    twitter: 'https://twitter.com/PdfLove',
  },
  creator: 'PdfLove Team',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | PdfLove',
    defaultTitle: 'PdfLove - Professional PDF Tools',
    twitterHandle: '@PdfLove',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};

