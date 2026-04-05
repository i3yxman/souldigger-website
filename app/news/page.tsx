import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '动态与新闻',
  description: 'SoulDigger 公司动态、旗下产品动态、方案更新和行业观察。',
};

const posts = [
  {
    date: '2026-03-02',
    tag: '产品更新',
    title: 'Vantara 上线新版审核流转机制',
    summary: '支持更清晰的驳回重提链路，提升跨角色协同效率。',
  },
  {
    date: '2026-02-19',
    tag: '方案实践',
    title: '连锁巡检项目从试点到区域扩展',
    summary: '通过模板化任务与质控规则，实现多区域执行一致性。',
  },
  {
    date: '2026-02-05',
    tag: '行业观察',
    title: '执行管理平台的三类关键指标',
    summary: '执行达成率、审核通过率、问题闭环时效是核心。',
  },
  {
    date: '2026-01-28',
    tag: '产品更新',
    title: '移动采集体验优化发布',
    summary: '提升现场录入效率并优化媒体上传稳定性。',
  },
  {
    date: '2026-01-12',
    tag: '公司动态',
    title: 'SoulDigger 启动执行智能产品路线',
    summary: '以 Vantara 为核心，持续构建企业执行智能能力。',
  },
  {
    date: '2025-12-26',
    tag: '方案实践',
    title: '渠道暗访项目中的质控闭环设计',
    summary: '通过规则抽检和异常回流，提升数据可信度与复盘效率。',
  },
];

export default function NewsPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">新闻动态</p>
        <h1>动态与新闻</h1>
        <p className="desc">产品更新、行业观察与交付实践会持续在这里发布。</p>

        <div className="news-grid" style={{ marginTop: '1.1rem' }}>
          {posts.map((post) => (
            <article className="news-card" key={`${post.date}-${post.title}`}>
              <span>{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div className="chips" style={{ marginTop: '0.8rem' }}>
                <span className="chip chip-soft">{post.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
