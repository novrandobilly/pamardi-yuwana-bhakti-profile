import type { NextPage } from 'next';
import Head from 'next/head';
import HomeBanner from '../components/Home/HomeBanner';
import SchoolSummary from '../assets/images/SchoolSummary.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Pamardi Yuwana Bhakti Homepage' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section>
          <HomeBanner />
        </section>
        <section className='flex flex-col items-center my-12'>
          <h1 className='font-serif text-4xl font-bold text-yellow-600'>"</h1>
          <p className='w-3/5 text-2xl text-center text-gray-800'>
            Selain pembelajaran akademik, disini saya memiliki teman-teman yang baik, gurunya asik-asik, dan kegiatan
            sekolahnya seru-seru.
          </p>
          <span className='mt-5 font-serif italic text-yellow-600'>2020 Pamardi Yuwana Bhakti Alumnus</span>
        </section>
        <section className='flex items-center justify-between mx-auto max-w-7xl'>
          <div className='relative w-full max-w-2xl'>
            <Image alt='School Summary' src={SchoolSummary} />
          </div>
          <div className='w-full max-w-xl p-5 space-y-5 text-lg text-gray-800'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam id accusamus atque ipsa soluta repudiandae
              sapiente eum doloremque laboriosam.
            </p>
            <p>
              Tempore iusto quibusdam soluta vitae earum atque itaque laborum illum, ex sed! Expedita, tempora
              cupiditate praesentium laboriosam beatae harum porro delectus quam.
            </p>
            <p>
              Mauris auctor volutpat cursus. Vestibulum molestie sed nibh quis imperdiet. Donec tempus consectetur dui
              id condimentum. Phasellus ac nunc non mi egestas sodales in vitae eros.
            </p>
            <p>
              In consequatur magni iste, quis cumque at alias, id unde neque accusamus beatae corrupti amet reiciendis,
              saepe esse obcaecati quas! Ipsa fugiat, laboriosam saepe dolores officiis reprehenderit quod sed quisquam
              odit iste explicabo error doloribus quasi autem.
            </p>
            <p>
              A nihil repellendus molestias magnam earum totam omnis accusamus laboriosam, ut corporis rerum quae
              aliquid natus esse nobis voluptatibus tempora doloremque dolor eligendi inventore distinctio atque
              exercitationem? Aliquid eaque ab rem officia soluta quam excepturi eos.
            </p>
            <Link href='/' passHref>
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
            </Link>
          </div>
        </section>
        <section>Life At Our School</section>
        <section>Academic Calendar</section>
        <section>Latest News & Events</section>
        <section>Covid-19 Plan</section>
      </main>
    </div>
  );
};

export default Home;
