import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.brandBlock}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} {site.name} 版权所有。
            </span>
            <span className={styles.copyright}>
              公司全称：{site.legalName}
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
              <span className={styles.beian}>
                <a
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=31011702891383"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.beianLink}
                >
                  <Image
                    src="/beian-icon.png"
                    alt="公安备案图标"
                    width={14}
                    height={14}
                    className={styles.beianIcon}
                  />
                  <span>沪公网安备31011702891383号</span>
                </a>
              </span>
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
