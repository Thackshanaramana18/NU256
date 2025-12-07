import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NU256 - Advanced Genomics | Precision Medicine Solutions',
  description: 'NU256 - Advanced Genomics. Decoding the future of genomic medicine with cutting-edge technology and precision analysis.',
  keywords: 'genomics, precision medicine, genome analysis, genetic research, DNA analysis',
  authors: [{ name: 'NU256' }],
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#071127',
  openGraph: {
    title: 'NU256 - Advanced Genomics | Precision Medicine Solutions',
    description: 'Decoding the future of genomic medicine with cutting-edge technology',
    url: 'https://nu256.com',
    siteName: 'NU256',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NU256',
              url: 'https://nu256.com',
              description: 'Advanced Genomics - Decoding the future of genomic medicine',
              logo: 'https://nu256.com/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/nu256',
                'https://twitter.com/nu256',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'contact@nu256.com',
              },
            }),
          }}
        />
        <link
          rel="stylesheet"
          href="https://code.iconify.design/1/1.0.8/iconify.min.css"
        />
        <script src="https://code.iconify.design/1/1.0.8/iconify.min.js"></script>
      </head>
      <body className="bg-[#071127] text-white">
        {children}
      </body>
    </html>
  );
}
