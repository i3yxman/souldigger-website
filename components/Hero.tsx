import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import { site } from '@/data/site';

const badges = ['企业调研系统', '分析决策平台', '智能工作流', '可审计数据治理'];

export function Hero() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow">{site.name} · 企业级调研与分析智能软件</p>
            <h1>{site.tagline}</h1>
            <p className={styles.lead}>
              我们聚焦调研执行、过程分析与智能协同，构建可扩展、可治理、可持续进化的企业软件平台，
              帮助组织把业务目标转化为可量化、可追溯的日常执行结果。
            </p>
            <div className={styles.badges}>
              {badges.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/contact/">预约咨询</Link>
              <Link className="btn btn-ghost" href="/product/">查看产品矩阵</Link>
            </div>
          </div>

          <div className={styles.visual}>
            <Image src="/souldigger-company-panel.svg" alt="SoulDigger 公司能力示意图" width={920} height={620} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
