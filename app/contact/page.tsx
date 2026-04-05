import type { Metadata } from 'next';
import { ConsultForm } from '@/components/ConsultForm';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: '咨询合作',
  description: '联系 SoulDigger 团队，预约公司咨询与旗下产品演示。',
};

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">联系我们</p>
        <h1>预约公司咨询与产品演示</h1>
        <p className="desc">提交需求后，我们将在 1 个工作日内与你联系。</p>

        <div className="grid grid-2" style={{ marginTop: '1.2rem' }}>
          <article className="card">
            <h3>提交咨询</h3>
            <div style={{ marginTop: '0.85rem' }}>
              <ConsultForm />
            </div>
          </article>
          <article className="card">
            <h3>商务信息</h3>
            <ul className="list">
              <li>公司：{site.name}</li>
              <li>公司全称：{site.legalName}</li>
              <li>产品：{site.product}</li>
              <li>咨询邮箱：{site.email}</li>
              <li>联系电话：{site.phone}</li>
              <li>官网：souldigger.cn</li>
            </ul>
            <div className="chips" style={{ marginTop: '1rem' }}>
              <span className="chip chip-soft">产品演示</span>
              <span className="chip chip-soft">方案评估</span>
              <span className="chip chip-soft">试点建议</span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
