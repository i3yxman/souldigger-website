import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { IconGlyph } from '@/components/IconGlyph';

export const metadata: Metadata = {
  title: '首页',
  description: 'Vantara 执行智能平台：任务编排、现场采集、质量审核、运营洞察的一体化方案。',
};

const modules = [
  { icon: 'plan' as const, title: '任务编排', text: '多项目、多区域、多人协同的一体化任务配置。' },
  { icon: 'collect' as const, title: '现场采集', text: '问卷、图像、视频、定位与时间戳同源留存。' },
  { icon: 'review' as const, title: '质量审核', text: '规则抽检、多级复核、驳回重提闭环。' },
  { icon: 'insight' as const, title: '管理洞察', text: '按门店、区域、项目的可视化运营看板。' },
  { icon: 'govern' as const, title: '流程治理', text: '角色权限、状态流转、审计日志全链路可追溯。' },
  { icon: 'ai' as const, title: 'AI增强', text: '摘要、周报与运营建议在受控边界内上线。' },
];

const industries = [
  { icon: 'retail' as const, name: '连锁零售' },
  { icon: 'auto' as const, name: '汽车渠道' },
  { icon: 'medical' as const, name: '医药流通' },
  { icon: 'fmcg' as const, name: '快消终端' },
  { icon: 'service' as const, name: '酒店服务' },
  { icon: 'research' as const, name: '市场研究' },
];

const updates = [
  { date: '2026-03', title: 'Vantara 质控流程升级', text: '新增审核路由与异常闭环提醒机制。' },
  { date: '2026-02', title: '执行看板优化', text: '总部视角新增项目进度与风险热区。' },
  { date: '2026-01', title: '移动端采集体验优化', text: '现场采集交互与回传稳定性增强。' },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section section-compact">
        <div className="container">
          <div className="kpi-strip">
            <article className="kpi-tile"><span>平台定位</span><strong>Execution OS</strong></article>
            <article className="kpi-tile"><span>核心原则</span><strong>One Data Source</strong></article>
            <article className="kpi-tile"><span>管理目标</span><strong>Traceable Workflow</strong></article>
            <article className="kpi-tile"><span>升级路径</span><strong>AI Assisted</strong></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>核心能力模块</h2>
          <p className="desc">每个模块都围绕一个目标：让执行动作更标准、结果更可信、复盘更高效。</p>
          <div className="feature-grid" style={{ marginTop: '1rem' }}>
            {modules.map((item) => (
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
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Blueprint</p>
            <h2>从计划到复盘的一张图</h2>
            <p className="desc">统一的数据层是关键。任务、采集、审核、洞察必须在同一系统内闭环。</p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/product/">查看产品架构</Link>
              <Link className="btn btn-ghost" href="/contact/">预约演示</Link>
            </div>
          </div>
          <div className="media-card">
            <Image src="/vantara-capability-map.svg" alt="Vantara capability blueprint" width={1200} height={640} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="media-card">
            <Image src="/vantara-solution-map.svg" alt="Vantara solution map" width={1200} height={660} />
          </div>
          <div>
            <p className="eyebrow">Scenarios</p>
            <h2>重点行业场景覆盖</h2>
            <div className="chips" style={{ marginTop: '1rem' }}>
              {industries.map((item) => (
                <span key={item.name} className="chip"><IconGlyph name={item.icon} />{item.name}</span>
              ))}
            </div>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/solutions/">查看行业方案</Link>
            </div>
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
