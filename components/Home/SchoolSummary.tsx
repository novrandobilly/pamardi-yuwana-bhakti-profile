import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SchoolSummaryImage from '../../assets/images/SchoolSummary.jpg';

const SchoolSummary = () => {
  return (
    <section className='flex flex-col items-center justify-between px-5 mx-auto mb-5 xl:items-start xl:mb-20 xl:flex-row xl:px-10 max-w-8xl'>
      <div className='relative w-full max-w-2xl mb-2'>
        <Image alt='School Summary' src={SchoolSummaryImage} width={650} height={700} />
      </div>
      <div className='w-full max-w-2xl text-lg text-gray-800 xl:space-y-5 xl:pr-5 xl:ml-5'>
        <h1 className='mb-2 font-serif text-base font-bold text-center border-b-4 border-yellow-300 xl:pb-2 xl:text-3xl xl:text-start'>
          Tentang SMP Pamardi Yuwana Bhakti
        </h1>
        <p className='mb-3 text-base italic xl:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id accusamus atque ipsa soluta repudiandae
          sapiente eum doloremque laboriosam.
        </p>
        <p className='mb-3 text-base italic xl:text-xl'>
          Tempore iusto quibusdam soluta vitae earum atque itaque laborum illum, ex sed! Expedita, tempora cupiditate
          praesentium laboriosam beatae harum porro delectus quam.
        </p>
        <p className='mb-3 text-base italic xl:text-xl'>
          Mauris auctor volutpat cursus. Vestibulum molestie sed nibh quis imperdiet. Donec tempus consectetur dui id
          condimentum. Phasellus ac nunc non mi egestas sodales in vitae eros.
        </p>
        <p className='mb-3 text-base italic xl:text-xl'>
          In consequatur magni iste, quis cumque at alias, id unde neque accusamus beatae corrupti amet reiciendis,
          saepe esse obcaecati quas! Ipsa fugiat, laboriosam saepe dolores officiis reprehenderit quod sed quisquam odit
          iste explicabo error doloribus quasi autem.
        </p>
        <p className='mb-3 text-base italic xl:text-xl'>
          A nihil repellendus molestias magnam earum totam omnis accusamus laboriosam, ut corporis rerum quae aliquid
          natus esse nobis voluptatibus tempora doloremque dolor eligendi inventore distinctio atque exercitationem?
          Aliquid eaque ab rem officia soluta quam excepturi eos.
        </p>
        {/* <Link href='/' passHref>
          <div className='flex items-center w-full max-w-xs italic font-bold text-gray-800 border-b-2 border-transparent cursor-pointer hover:border-b-2 hover:border-yellow-300'>
            Discover Pamardi Yuwana Bhakti &nbsp;
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default SchoolSummary;
