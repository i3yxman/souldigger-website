'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { navItems, site } from '@/data/site';

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span>{site.name}</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} className={active ? styles.active : ''}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
