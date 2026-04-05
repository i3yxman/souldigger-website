import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | 官方网站`,
    template: `%s | ${site.name}`,
  },
  description:
    'SoulDigger 面向企业提供调研执行系统、分析平台与人工智能协同能力，帮助组织实现高质量增长。',
  keywords: [
    'SoulDigger',
    '企业调研',
    '智能平台',
    '执行智能',
    '神秘顾客',
    '门店巡检',
    '调研执行',
    '数据分析',
    '运营质控',
    '人工智能软件',
  ],
  alternates: { canonical: site.domain },
  openGraph: {
    title: `${site.name} | 官方网站`,
    description:
      '企业级调研、分析与智能平台软件服务商。',
    type: 'website',
    url: site.domain,
    siteName: `${site.name} 官方网站`,
    locale: 'zh_CN',
    images: [{ url: '/og-cover.svg', width: 1200, height: 630, alt: 'SoulDigger 官方网站封面图' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | 官方网站`,
    description: '企业级调研、分析与智能平台软件服务商',
    images: ['/og-cover.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
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
