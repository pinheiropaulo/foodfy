import Image from 'next/image';
import styles from './style.module.scss';

export function Card(props) {
  return (
    <div className={styles.card}>
      <Image
        src={props.item.image}
        alt={`Imagem de ${props.item.name}`}
        width={300}
        height={140}
      />

      <div className={styles.text}>
        <span className={styles.name}>{props.item.title}</span>
        <span className={styles.author}>por {props.item.author}</span>
      </div>
    </div>
  );
}
