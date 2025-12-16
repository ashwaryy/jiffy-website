import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Jiffy.live',
  url: 'https://jiffy.live',
  ogImage: 'https://jiffy.live/og-image.png',
  description: 'Lightning-fast answers. Deep insights. Built on Integrated Context Architecture (ICA).',
  links: {
    demo: '/demo',
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Jiffy.live - Your Institution's Knowledge Agent",
    template: '%s | Jiffy.live',
  },
  description: siteConfig.description,
  keywords: [
    'knowledge agent',
    'institutional knowledge',
    'AI assistant',
    'ICA',
    'Integrated Context Architecture',
    'RAG',
    'knowledge management',
    'enterprise AI',
  ],
  authors: [{ name: 'Jiffy' }],
  creator: 'Jiffy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Jiffy.live - Your Institution's Knowledge Agent",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Jiffy - Your Institution\'s Knowledge Agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jiffy.live - Your Institution's Knowledge Agent",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/giraffe.svg',
  },
};

export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}
