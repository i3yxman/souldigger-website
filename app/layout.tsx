import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | ${site.product}`,
    template: `%s | ${site.name}`,
  },
  description:
    'SoulDigger 旗下 Vantara 执行智能平台，覆盖任务编排、现场采集、质量审核、洞察分析与闭环优化。',
  keywords: [
    'SoulDigger',
    'Vantara',
    '执行智能',
    '神秘顾客',
    '门店巡检',
    '调研执行',
    '运营质控',
    'AI企业软件',
  ],
  alternates: { canonical: site.domain },
  openGraph: {
    title: `${site.name} | ${site.product}`,
    description:
      '面向线下执行与调研场景的企业级平台，提升执行确定性、审核效率与管理可视化能力。',
    type: 'website',
    url: site.domain,
    siteName: `${site.name} ${site.product}`,
    locale: 'zh_CN',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630, alt: 'SoulDigger Vantara' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.product}`,
    description: '企业执行智能平台',
    images: ['/og-cover.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.domain,
    email: site.email,
    brand: site.product,
  };

  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
        <Script id="org-ld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgLd)}
        </Script>
      </body>
    </html>
  );
}
