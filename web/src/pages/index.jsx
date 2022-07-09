import Head from 'next/head';
import BannerChef from './components/BannerChef';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodfy</title>
      </Head>
      <Header />
      <BannerChef />
    </div>
  );
}
