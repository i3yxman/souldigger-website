import Link from 'next/link';
import styles from './Footer.module.css';
import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className={styles.links}>
          <Link href="/privacy/">隐私政策</Link>
          <Link href="/terms/">服务条款</Link>
        </span>
      </div>
    </footer>
  );
}
