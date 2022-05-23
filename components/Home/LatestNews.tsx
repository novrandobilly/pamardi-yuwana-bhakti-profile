import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Parenting from '../../assets/images/Articles/Parenting.png';
import Play from '../../assets/images/Articles/Play.png';
import Reading from '../../assets/images/Articles/Reading.png';
import Skills from '../../assets/images/Articles/Skills.png';
import { ArticleType } from '../../pages';

type LatestNewsProps = {
  article: Array<ArticleType>;
};

const LatestNews: React.FC<LatestNewsProps> = () => {
  return (
    <Fragment>
      <section className='flex flex-col items-center mx-auto max-w-8xl'>
        <h1 className='mb-4 font-serif font-bold text-center text-gray-800 border-b-4 border-yellow-300 lg:pb-2 lg:mb-8 lg:text-3xl'>
          ARTIKEL
        </h1>
        <div className='flex flex-col items-center justify-between px-5 mx-auto mb-5 lg:space-x-5 lg:flex-row lg:px-10'>
          <Link passHref href={`/blog/kemampuan-dasar-yang-perlu-diajarkan-orangtua-kepada-anak-remajanya`}>
            <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
              <div className='w-full'>
                <Image width={400} height={300} objectFit='cover' className=' rounded-t-md' alt='News' src={Skills} />
              </div>
              <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>SKILLS, SOFT SKILLS</h6>
              <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>
                Kemampuan Dasar Yang Perlu Diajarkan Orangtua Kepada Anak Remajanya
              </h2>
              <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                {new Date('2022-05-23').toLocaleDateString()}
              </p>
            </div>
          </Link>
          <Link passHref href={`/blog/permainan-yang-mendorong-perkembangan-anak-dengan-autisme`}>
            <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
              <div className='w-full'>
                <Image width={400} height={300} objectFit='cover' className=' rounded-t-md' alt='News' src={Play} />
              </div>
              <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                PERMAINAN, PERKEMBANGAN ANAK
              </h6>
              <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>
                Permainan Yang Mendorong Perkembangan Anak Dengan Autisme
              </h2>
              <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                {new Date('2022-05-23').toLocaleDateString()}
              </p>
            </div>
          </Link>

          <Link passHref href={`/blog/cara-mendidik-anak-remaja`}>
            <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className=' rounded-t-md'
                  alt='News'
                  src={Parenting}
                />
              </div>
              <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                PARENTING, PERKEMBANGAN ANAK
              </h6>
              <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>Cara Mendidik Anak Dalam Memasuki Usia Remaja</h2>
              <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                {new Date('2022-05-23').toLocaleDateString()}
              </p>
            </div>
          </Link>
          <Link passHref href={`/blog/cara-membaca-cepat-dan-efektif`}>
            <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
              <div className='w-full'>
                <Image width={400} height={300} objectFit='cover' className=' rounded-t-md' alt='News' src={Reading} />
              </div>
              <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>MEMBACA, HOBI, WAWASAN</h6>
              <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>
                Cara Menumbuhkan Kebiasaan Membaca Cepat Dan Efektif
              </h2>
              <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                {new Date('2022-05-23').toLocaleDateString()}
              </p>
            </div>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default LatestNews;
{
  /* <Fragment>
      <section className='flex flex-col items-center mx-auto max-w-8xl'>
        <h1 className='mb-4 font-serif font-bold text-center text-gray-800 border-b-4 border-yellow-300 lg:pb-2 lg:mb-8 lg:text-3xl'>
          ARTIKEL
        </h1>
        <div className='flex flex-col items-center justify-between px-5 mx-auto mb-5 lg:space-x-5 lg:flex-row lg:px-10'>
          <div className='flex flex-col items-center w-full lg:w-1/2 lg:space-y-5'>
            <Link passHref href={`/blog/${article[0]._id}`}>
              <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:max-w-none hover:shadow-2xl'>
                <div className='w-full'>
                  <Image
                    width={868}
                    height={450}
                    objectFit='cover'
                    alt='News'
                    src={article[0].images[0]}
                    className='rounded-t-md'
                  />
                </div>
                <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                  {article[0].tags.map((tag) => tag.toUpperCase()).join(', ')}
                </h6>
                <h2 className='px-2 py-1 text-base font-bold lg:text-xl lg:px-5'>{article[0].title}</h2>
                <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                  {new Date(article[0].dateCreated).toLocaleDateString()}
                </p>
              </div>
            </Link>
            <div className='flex flex-col lg:flex-row lg:space-x-5'>
              <Link passHref href={`/blog/${article[1]._id}`}>
                <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
                  <div className='w-full'>
                    <Image
                      width={400}
                      height={300}
                      objectFit='cover'
                      className=' rounded-t-md'
                      alt='News'
                      src={article[1].images[0]}
                    />
                  </div>
                  <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                    {article[1].tags.map((tag) => tag.toUpperCase()).join(', ')}
                  </h6>
                  <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>{article[1].title}</h2>
                  <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                    {new Date(article[1].dateCreated).toLocaleDateString()}
                  </p>
                </div>
              </Link>
              <Link passHref href={`/blog/${article[2]._id}`}>
                <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
                  <div className='w-full'>
                    <Image
                      width={400}
                      height={300}
                      objectFit='cover'
                      className=' rounded-t-md'
                      alt='News'
                      src={article[2].images[0]}
                    />
                  </div>
                  <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                    {article[2].tags.map((tag) => tag.toUpperCase()).join(', ')}
                  </h6>
                  <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>{article[2].title}</h2>
                  <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                    {new Date(article[2].dateCreated).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center w-full lg:w-1/2 lg:flex-col-reverse '>
            <Link passHref href={`/blog/${article[3]._id}`}>
              <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:max-w-none hover:shadow-2xl'>
                <div className='w-full'>
                  <Image
                    width={868}
                    height={450}
                    objectFit='cover'
                    alt='News'
                    src={article[3].images[0]}
                    className='rounded-t-md'
                  />
                </div>
                <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                  {article[3].tags.map((tag) => tag.toUpperCase()).join(', ')}
                </h6>
                <h2 className='px-2 py-1 text-base font-bold lg:text-xl lg:px-5'>{article[3].title}</h2>
                <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                  {new Date(article[3].dateCreated).toLocaleDateString()}
                </p>
              </div>
            </Link>
            <div className='flex flex-col mb-5 lg:flex-row lg:space-x-5'>
              <Link passHref href={`/blog/${article[4]._id}`}>
                <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
                  <div className='w-full'>
                    <Image
                      width={400}
                      height={300}
                      objectFit='cover'
                      className=' rounded-t-md'
                      alt='News'
                      src={article[4].images[0]}
                    />
                  </div>
                  <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                    {article[4].tags.map((tag) => tag.toUpperCase()).join(', ')}
                  </h6>
                  <h2 className='px-2 py-1 font-bold lg:px-5 text-md'>{article[4].title}</h2>
                  <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                    {new Date(article[4].dateCreated).toLocaleDateString()}
                  </p>
                </div>
              </Link>
              <Link passHref href={`/blog/${article[5]._id}`}>
                <div className='w-full max-w-sm mb-5 transition-all border-gray-300 rounded-md shadow-md cursor-pointer border-1 lg:w-1/2 hover:shadow-2xl'>
                  <div className='w-full'>
                    <Image
                      width={400}
                      height={300}
                      objectFit='cover'
                      className=' rounded-t-md'
                      alt='News'
                      src={article[5].images[0]}
                    />
                  </div>
                  <h6 className='px-2 text-sm italic text-yellow-700 lg:px-5 lg:pb-2 lg:pt-6'>
                    {article[5].tags.map((tag) => tag.toUpperCase()).join(', ')}
                  </h6>
                  <h2 className='px-2 py-1 font-bold lg:px-5 text-md'> {article[5].title}</h2>
                  <p className='px-2 pt-2 pb-4 text-xs text-gray-400 lg:text-base lg:px-5'>
                    {new Date(article[5].dateCreated).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment> */
}
