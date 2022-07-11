import Head from 'next/head';

import { BannerChef } from '../components/BannerChef';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

import styles from './style.module.scss';

import data from '../assets/data.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodfy</title>
      </Head>
      <Header />
      <BannerChef />
      <section className={styles.cards_home}>
        {data.recipes.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
      <footer>
        <div className={styles.footer}>
          <span>Todos direitos reservados, receitas Foodfy.</span>
        </div>
      </footer>
    </>
  );
}
