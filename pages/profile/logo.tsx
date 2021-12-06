import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';

const Logo: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Logo</title>
        <meta name='description' content='Logo' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex items-center justify-center h-96 '>
        <h1 className='text-3xl'>Logo</h1>
      </main>
    </Fragment>
  );
};

export default Logo;
