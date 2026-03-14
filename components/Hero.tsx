import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import { site } from '@/data/site';

const badges = ['Mystery Shopping', 'Field Audit', 'Execution QA', 'Insight Loop'];

export function Hero() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow">{site.name} · Field Intelligence Platform</p>
            <h1>{site.tagline}</h1>
            <p className={styles.lead}>
              Vantara 用一套系统连接任务下发、现场采集、质量审核与运营洞察，
              让总部和一线在同一事实基础上协同。
            </p>
            <div className={styles.badges}>
              {badges.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/contact/">预约演示</Link>
              <Link className="btn btn-ghost" href="/product/">查看产品能力</Link>
            </div>
          </div>

          <div className={styles.visual}>
            <Image src="/vantara-hero-panel.svg" alt="Vantara platform preview" width={920} height={620} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
