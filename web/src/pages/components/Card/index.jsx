import Image from 'next/image';

import Burger from '../../../assets/burger.png';

import styles from './style.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <Image
        src={Burger}
        alt="Imagem de Triplo bacon burger"
        width={300}
        height={140}
      />
      <div className={styles.text}>
        <span className={styles.name}>Triplo bacon burger</span>
        <span className={styles.author}>porJorge Relato</span>
      </div>
    </div>
  );
}
