import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../../assets/images/HomeBanner/hero_image.jpg';
import styles from './HomeBanner.module.scss';

const HomeBanner: React.FC = () => {
  return (
    <div className={`${styles['homebanner-container']} flex flex-col items-center justify-center w-full px-5 `}>
      <Image alt='homebanner' src={HeroImage} layout='fill' className={styles['homebanner']} objectFit='cover' />
      <h3 className='z-10 text-base text-center text-white lg:text-2xl'>SMP PAMARDI YUWANA BHAKTI</h3>
      <h1 className='z-10 py-2 mb-10 text-5xl font-bold text-center text-white lg:text-6xl'>
        Educating Future Leaders
      </h1>
      <Link href='/admission' passHref>
        <button className='z-10 px-5 py-2 text-base font-bold text-white transition-all bg-transparent bg-blue-800 rounded-lg lg:text-2xl hover:border-yellow-300 hover:text-yellow-300 '>
          Daftar Sekarang
        </button>
      </Link>
    </div>
  );
};

export default HomeBanner;
