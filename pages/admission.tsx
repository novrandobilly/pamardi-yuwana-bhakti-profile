import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';

const Admission: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Admission</title>
        <meta name='description' content='Admission' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex items-center justify-center h-96 '>
        <h1 className='text-3xl'>Admission</h1>
      </main>
    </Fragment>
  );
};

export default Admission;
