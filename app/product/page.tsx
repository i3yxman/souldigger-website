import type { Metadata } from 'next';
import Image from 'next/image';
import { IconGlyph } from '@/components/IconGlyph';

export const metadata: Metadata = {
  title: '旗下产品 Vantara',
  description: 'SoulDigger 旗下产品 Vantara：任务、采集、审核、看板与协同治理的一体化平台。',
};

const cards = [
  {
    icon: 'plan' as const,
    title: '项目编排中心',
    points: ['任务模板', '项目排期', '区域分配'],
  },
  {
    icon: 'collect' as const,
    title: '移动采集终端',
    points: ['问卷采集', '媒体回传', '离线容错'],
  },
  {
    icon: 'review' as const,
    title: '质量审核流程',
    points: ['规则抽检', '多级审核', '异常回流'],
  },
  {
    icon: 'insight' as const,
    title: '洞察分析看板',
    points: ['趋势分析', '问题分布', '管理周报'],
  },
];

const now = ['多项目并行管理', '角色权限分层', '流程日志留痕', '审核驳回重提', '区域与门店看板', '通知与提醒机制'];
const next = ['自动周报草稿', '风险点预警建议', '审核负载预测', '策略执行偏差识别', '可控范围内AI自动化'];

export default function ProductPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">旗下产品</p>
        <h1>一套系统管理执行、审核与洞察</h1>
        <p className="desc">Vantara 是 SoulDigger 旗下执行智能平台。少切系统、少追进度、少重复沟通，让总部与一线围绕同一事实决策。</p>

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
          <Image src="/vantara-delivery-loop.svg" alt="Vantara 交付闭环示意图" width={1200} height={580} />
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
