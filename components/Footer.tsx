import Link from "next/link";
import styles from "./Footer.module.css";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.meta}>
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>

          <span className={styles.beian}>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              沪ICP备2026008268号
            </a>
          </span>

          {/* 公安备案完成后取消注释 */}
          {/*
          <span className={styles.beian}>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo"
              target="_blank"
              rel="noreferrer"
            >
              沪公网安备XXXXXXXXXXXX号
            </a>
          </span>
          */}
        </div>

        <span className={styles.links}>
          <Link href="/privacy/">隐私政策</Link>
          <Link href="/terms/">服务条款</Link>
        </span>
      </div>
    </footer>
  );
}
