import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Pamardi Yuwana Bhakti Homepage' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex items-center justify-center h-96 '>
        <h1 className='text-3xl'>Pamardi Yuwana Bhakti</h1>
      </main>
    </div>
  );
};

export default Home;
