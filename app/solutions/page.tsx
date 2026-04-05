import type { Metadata } from 'next';
import Image from 'next/image';
import { IconGlyph } from '@/components/IconGlyph';

export const metadata: Metadata = {
  title: '解决方案',
  description: 'Vantara 行业解决方案：零售、汽车、医药、快消、服务业与研究执行。',
};

const scenarios = [
  { icon: 'retail' as const, name: '连锁零售巡检', text: '陈列、服务、标准执行一致性管理' },
  { icon: 'auto' as const, name: '汽车渠道暗访', text: '经销商销售流程与服务体验评估' },
  { icon: 'medical' as const, name: '医药渠道走访', text: '区域合规执行与关键风险留痕' },
  { icon: 'fmcg' as const, name: '快消终端稽核', text: '活动执行、库存与陈列同步检查' },
  { icon: 'service' as const, name: '酒店服务质检', text: '服务触点检查与整改闭环追踪' },
  { icon: 'research' as const, name: '研究执行管理', text: '样本采集、审核质控与进度透明' },
];

const delivery = [
  { title: '第一步：诊断', text: '梳理流程与指标，确定最小试点范围。' },
  { title: '第二步：落地', text: '配置任务模板、审核规则和协同机制。' },
  { title: '第三步：扩展', text: '基于试点数据扩展到更多区域和团队。' },
];

export default function SolutionsPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">行业解决方案</p>
        <h1>按行业落地，不按模板套用</h1>
        <p className="desc">同一平台能力，结合不同业务目标配置不同执行流程。</p>

        <div className="grid grid-3" style={{ marginTop: '1rem' }}>
          {scenarios.map((item) => (
            <article key={item.name} className="feature-card">
              <div className="icon-badge"><IconGlyph name={item.icon} /></div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="media-card" style={{ marginTop: '1.2rem' }}>
          <Image src="/vantara-solution-map.svg" alt="Vantara 行业场景图" width={1200} height={660} />
        </div>

        <section className="section-tight">
          <h2>实施节奏</h2>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            {delivery.map((step) => (
              <article className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
