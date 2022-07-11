import Image from 'next/image';

import styles from './style.module.scss';

export function BannerChef() {
  return (
    <div className={styles.banner_chef_container}>
      <div className={styles.chef_text}>
        <h2>As melhores receitas</h2>
        <p>
          Aprenda a construir os melhores pratos
          <br />
          com receitas criadas por profissionais
          <br />
          do mundo inteiro.
        </p>
      </div>

      <div className={styles.chef_img}>
        <Image src="/assets/chef.png" alt="Chef Img" width={215} height={300} />
      </div>
    </div>
  );
}
