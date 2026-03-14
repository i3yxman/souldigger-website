import Link from "next/link";
import styles from "./Footer.module.css";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.brandBlock}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </span>

            <div className={styles.beianGroup}>
              <span className={styles.beian}>
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  沪ICP备2026008268号
                </a>
              </span>

              {/* 公安备案完成后，取消注释并替换号码 */}
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
          </div>
        </div>

        <div className={styles.right}>
          <nav className={styles.links} aria-label="页脚导航">
            <Link href="/privacy/">隐私政策</Link>
            <Link href="/terms/">服务条款</Link>
            <Link href="/contact/">联系我们</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
