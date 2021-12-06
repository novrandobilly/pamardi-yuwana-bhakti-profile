import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Pamardi yuwana Bhakti Homepage' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-blue-600'>Pamardi Yuwana Bhakti</h1>
      </main>
    </div>
  );
};

export default Home;
