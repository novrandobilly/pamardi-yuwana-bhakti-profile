import React from 'react';
import Link from 'next/link';

const ArticleWrapper: React.FC = ({ children }) => {
  return (
    <div className='flex flex-col items-start w-full px-5 pt-4 mx-auto lg:flex-row max-w-8xl lg:px-10'>
      <div className='lg:w-9/12 lg:pr-10'>
        <p className='mb-5 italic hover:text-yellow-300'>
          <Link href='/'>&lt; Kembali ke beranda</Link>
        </p>
        {children}
      </div>
      <div className='w-full p-4 mb-5 bg-yellow-200 rounded-lg lg:w-3/12 lg:mt-36'>
        <h2 className='mb-2 text-base font-bold text-blue-900 lg:text-2xl'>Artikel lainnya</h2>
        <ul className='pl-6 italic list-disc'>
          <li className='mb-2 leading-5 hover:text-blue-900 '>
            <Link href={`/blog/kemampuan-dasar-yang-perlu-diajarkan-orangtua-kepada-anak-remajanya`}>
              Kemampuan Dasar Yang Perlu Diajarkan Orangtua Kepada Anak Remajanya
            </Link>
          </li>
          <li className='mb-2 leading-5 hover:text-blue-900 '>
            <Link href={`/blog/permainan-yang-mendorong-perkembangan-anak-dengan-autisme`}>
              Permainan Yang Mendorong Perkembangan Anak Dengan Autisme
            </Link>
          </li>
          <li className='mb-2 leading-5 hover:text-blue-900 '>
            <Link href={`/blog/cara-mendidik-anak-remaja`}>Cara Mendidik Anak Remaja</Link>
          </li>
          <li className='mb-2 leading-5 hover:text-blue-900 '>
            <Link href={`/blog/cara-membaca-cepat-dan-efektif`}>Cara Membaca Cepat Dan Efektif</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticleWrapper;
