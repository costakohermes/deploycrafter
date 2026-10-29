import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeployCrafter - Craft seamless deployments with zero-downtime confidence',
  description: 'Craft seamless deployments with zero-downtime confidence. Deployment craftsmanship: visual pipelines, automated safety, instant recovery',
  keywords: ['deployment', 'developer tools', 'software engineering', 'SaaS'],
  authors: [{ name: 'DeployCrafter' }],
  creator: 'DeployCrafter',
  publisher: 'DeployCrafter',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deploycrafter.com',
    siteName: 'DeployCrafter',
    title: 'DeployCrafter - Craft seamless deployments with zero-downtime confidence',
    description: 'Craft seamless deployments with zero-downtime confidence',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeployCrafter - Craft seamless deployments with zero-downtime confidence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeployCrafter - Craft seamless deployments with zero-downtime confidence',
    description: 'Craft seamless deployments with zero-downtime confidence',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#059669',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}