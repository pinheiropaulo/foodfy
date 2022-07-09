import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodfy</title>
      </Head>
      <Header />
    </div>
  );
}
