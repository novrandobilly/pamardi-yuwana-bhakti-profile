import React from 'react';
import Link from 'next/link';

import styles from './HomeBanner.module.scss';

const HomeBanner: React.FC = () => {
  return (
    <div className={`${styles['homebanner']} w-full flex flex-col items-center justify-center px-5`}>
      <h3 className='text-base text-center lg:text-2xl'>SMP PAMARDI YUWANA BHAKTI</h3>
      <h1 className='py-2 mb-10 text-5xl font-bold text-center lg:text-6xl'>Educating Future Leaders</h1>
      <Link href='/admission' passHref>
        <button className='px-5 py-2 text-base font-bold bg-transparent border-2 rounded-lg lg:text-2xl'>
          Daftar Sekarang
        </button>
      </Link>
    </div>
  );
};

export default HomeBanner;
