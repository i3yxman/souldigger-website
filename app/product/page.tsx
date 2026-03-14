import type { Metadata } from 'next';
import Image from 'next/image';
import { IconGlyph } from '@/components/IconGlyph';

export const metadata: Metadata = {
  title: 'Vantara 产品介绍',
  description: 'Vantara 产品能力全景：任务、采集、审核、看板与协同治理。',
};

const cards = [
  {
    icon: 'plan' as const,
    title: 'Project Studio',
    points: ['任务模板', '项目排期', '区域分配'],
  },
  {
    icon: 'collect' as const,
    title: 'Mobile Capture',
    points: ['问卷采集', '媒体回传', '离线容错'],
  },
  {
    icon: 'review' as const,
    title: 'QA Workflow',
    points: ['规则抽检', '多级审核', '异常回流'],
  },
  {
    icon: 'insight' as const,
    title: 'Insight Board',
    points: ['趋势分析', '问题分布', '管理周报'],
  },
];

const now = ['多项目并行管理', '角色权限分层', '流程日志留痕', '审核驳回重提', '区域与门店看板', '通知与提醒机制'];
const next = ['自动周报草稿', '风险点预警建议', '审核负载预测', '策略执行偏差识别', '可控范围内AI自动化'];

export default function ProductPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Vantara Platform</p>
        <h1>一套系统管理执行、审核与洞察</h1>
        <p className="desc">少切系统、少追进度、少重复沟通。让总部与一线围绕同一事实决策。</p>

        <div className="feature-grid" style={{ marginTop: '1rem' }}>
          {cards.map((card) => (
            <article className="feature-card" key={card.title}>
              <div className="icon-badge"><IconGlyph name={card.icon} /></div>
              <h3>{card.title}</h3>
              <ul className="list compact-list">
                {card.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="media-card" style={{ marginTop: '1.2rem' }}>
          <Image src="/vantara-delivery-loop.svg" alt="Vantara delivery loop" width={1200} height={580} />
        </div>

        <section className="section-tight">
          <div className="grid grid-2">
            <article className="card">
              <h3>当前能力</h3>
              <div className="chips" style={{ marginTop: '0.8rem' }}>
                {now.map((item) => <span key={item} className="chip chip-soft">{item}</span>)}
              </div>
            </article>
            <article className="card">
              <h3>升级路线</h3>
              <div className="chips" style={{ marginTop: '0.8rem' }}>
                {next.map((item) => <span key={item} className="chip chip-soft">{item}</span>)}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
