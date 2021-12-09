import type { NextPage } from 'next';
import Head from 'next/head';
import HomeBanner from '../components/Home/HomeBanner';
import SchoolSummary from '../components/Home/SchoolSummary';
import LifeAtOurSchool from '../components/Home/LifeAtOurSchool';
import AcademicCalendar from '../components/Home/AcademicCalendar';
import LatestNews from '../components/Home/LatestNews';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pamardi Yuwana Bhakti</title>
        <meta name='description' content='Pamardi Yuwana Bhakti Homepage' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section>
          <HomeBanner />
        </section>
        <section className='flex flex-col items-center my-12'>
          <h1 className='font-serif text-4xl font-bold text-blue-600'>&#34;</h1>
          <p className='w-3/5 text-2xl text-center text-gray-800'>
            Selain pembelajaran akademik, disini saya memiliki teman-teman yang baik, gurunya asik-asik, dan kegiatan
            sekolahnya seru-seru.
          </p>
          <span className='mt-5 font-serif italic text-blue-600'>2020 Pamardi Yuwana Bhakti Alumnus</span>
        </section>
        <section className='flex items-center justify-between mx-auto mb-28 max-w-7xl'>
          <SchoolSummary />
        </section>
        <section className='flex flex-col items-center mx-auto mb-28 max-w-7xl'>
          <LifeAtOurSchool />
        </section>
        <section className='flex items-center justify-between mx-auto mb-28 max-w-7xl'>
          <AcademicCalendar />
        </section>
        <section className='flex items-center justify-between mx-auto space-x-5 mb-28 max-w-7xl'>
          <LatestNews />
        </section>

        <section>Covid-19 Plan</section>
      </main>
    </div>
  );
};

export default Home;
