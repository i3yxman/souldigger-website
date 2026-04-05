import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '公司介绍',
  description: 'SoulDigger：面向企业调研、分析与智能平台建设的软件公司。',
};

const pillars = [
  { title: '产品化思维', text: '长期维护可演进的平台，而不是一次性项目。' },
  { title: '业务可落地', text: '先做可上线闭环，再做自动化放大。' },
  { title: '结果可验证', text: '关键流程有证据、关键结论可复核。' },
];

const methods = [
  { step: '诊断', detail: '目标与流程盘点' },
  { step: '设计', detail: '规则与权限配置' },
  { step: '落地', detail: '试点上线与陪跑' },
  { step: '驱动', detail: '复盘优化与扩展' },
];

export default function CompanyPage() {
  return (
    <main className="section">
      <div className="container policy">
        <p className="eyebrow">关于 SoulDigger</p>
        <h1>调研、分析与智能平台软件公司</h1>
        <p className="desc">
          SoulDigger 聚焦企业调研执行、分析决策与智能协同场景，提供平台化产品与工程化交付能力，
          旗下产品 Vantara 服务于线下执行与运营管理场景。
        </p>

        <section>
          <h2>我们在做什么</h2>
          <div className="grid grid-3" style={{ marginTop: '0.9rem' }}>
            {pillars.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>交付方法</h2>
          <div className="chips" style={{ marginTop: '0.8rem' }}>
            {methods.map((m) => (
              <span className="chip chip-soft" key={m.step}>{m.step} · {m.detail}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
