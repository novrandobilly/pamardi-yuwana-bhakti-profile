import type { NextPage } from 'next';
import Head from 'next/head';

const PageUnknown: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Page Not Found</title>
        <meta name='description' content='404 Page Not Found' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex items-center justify-center h-96 '>
        <h1 className='text-3xl'>Page Not Found</h1>
      </main>
    </div>
  );
};

export default PageUnknown;
