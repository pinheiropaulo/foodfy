import Link from 'next/link';
import Image from 'next/image';

import styles from './style.module.scss';

export function Header() {
  return (
    <header className={styles.header_menu}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/assets/logo.png" alt="logo" width={90} height={27} />
        </Link>
      </div>
      <div className={styles.links}>
        <a href="/sobre">Sobre</a>
        <a href="/receitas">Receitas</a>
        <a href="/admin/recipes">Admin</a>
      </div>
    </header>
  );
}
