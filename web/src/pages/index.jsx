import Head from 'next/head';

import { BannerChef } from '../components/BannerChef';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

import styles from './style.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodfy</title>
      </Head>
      <Header />
      <BannerChef />
      <section className={styles.cards_home}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
