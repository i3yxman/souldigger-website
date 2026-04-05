import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { IconGlyph } from '@/components/IconGlyph';

export const metadata: Metadata = {
  title: '首页',
  description: 'SoulDigger 面向企业提供调研执行系统、分析平台与智能协同软件能力。',
};

const directions = [
  { icon: 'research' as const, title: '调研执行系统', text: '覆盖任务设计、现场采集、审核复核与结果沉淀。' },
  { icon: 'insight' as const, title: '分析与洞察平台', text: '按项目、区域、渠道构建多维度经营分析视图。' },
  { icon: 'ai' as const, title: '人工智能辅助', text: '提供摘要、风险提示与策略建议，提升管理响应速度。' },
  { icon: 'govern' as const, title: '数据治理与安全', text: '权限分层、审计留痕、流程可追溯，满足企业级治理要求。' },
];

const strengths = [
  { title: '工程能力', text: '采用模块化架构与标准化交付流程，支持持续迭代。' },
  { title: '行业理解', text: '深耕零售、汽车、医药、快消与服务行业执行管理场景。' },
  { title: '交付方法', text: '从诊断、设计到上线陪跑，确保方案快速落地并持续优化。' },
];

const offerings = [
  { title: '调研执行平台', text: '统一管理任务、采集、审核与进度，提升执行确定性。' },
  { title: '数据分析平台', text: '沉淀结构化指标体系，形成可复用的经营分析能力。' },
  { title: '智能协同平台', text: '让总部、区域与一线在同一事实基础上协同决策。' },
];

const updates = [
  { date: '2026-03', title: '发布企业级交付规范', text: '统一项目模板、质控流程与复盘机制，提高交付一致性。' },
  { date: '2026-02', title: '上线智能分析能力升级', text: '新增跨项目洞察看板与异常发现机制，优化管理效率。' },
  { date: '2026-01', title: '完成多行业方案沉淀', text: '形成覆盖零售、医药与服务场景的标准化实施方法。' },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section section-compact">
        <div className="container">
          <div className="kpi-strip">
            <article className="kpi-tile"><span>公司定位</span><strong>企业软件公司</strong></article>
            <article className="kpi-tile"><span>核心能力</span><strong>调研 + 分析 + 智能</strong></article>
            <article className="kpi-tile"><span>技术方向</span><strong>平台化与可治理</strong></article>
            <article className="kpi-tile"><span>交付目标</span><strong>可落地、可持续</strong></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>业务方向</h2>
          <p className="desc">面向企业关键经营场景，构建从执行到洞察的一体化软件能力。</p>
          <div className="feature-grid" style={{ marginTop: '1rem' }}>
            {directions.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="icon-badge"><IconGlyph name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>技术与交付实力</h2>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            {strengths.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>产品与服务矩阵</h2>
          <p className="desc">围绕调研执行、分析决策与智能协同形成可组合的软件产品能力。</p>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            {offerings.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/product/">进入产品页面</Link>
            <Link className="btn btn-ghost" href="/contact/">联系商务团队</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>最新动态</h2>
          <div className="news-grid" style={{ marginTop: '1rem' }}>
            {updates.map((item) => (
              <article className="news-card" key={item.title}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn-ghost" href="/news/">查看更多动态</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
