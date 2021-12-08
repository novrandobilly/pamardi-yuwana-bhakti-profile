import type { NextPage } from 'next';
import Head from 'next/head';
import HomeBanner from '../components/Home/HomeBanner';
import SchoolSummary from '../components/Home/SchoolSummary';
import LifeAtOurSchool from '../components/Home/LifeAtOurSchool';
import Image from 'next/image';
import SchoolBuilding from '../assets/images/SchoolBuilding.jpg';
import Link from 'next/link';
import { DateTime } from 'luxon';

const Home: NextPage = () => {
  interface CalendarActivityType {
    date: string;
    activity: string;
    note?: string;
  }

  const CalendarActivity: CalendarActivityType[] = [
    {
      date: '2021-07-18',
      activity: 'Masa Orientasi Peserta Didik Baru',
    },
    {
      date: '2021-08-18',
      activity: 'Diklat OSIS',
    },
    {
      date: '2021-09-18',
      activity: 'Bakti Sosial',
    },
    {
      date: '2021-10-18',
      activity: 'Ujian Tengah Semester',
    },
    {
      date: '2021-11-18',
      activity: 'Masa Orientasi Peserta Didik Baru',
      note: 'Orientasi ke-2',
    },
    {
      date: '2021-12-18',
      activity: 'Diklat OSIS',
    },

    {
      date: '2022-01-18',
      activity: 'Bakti Sosial',
    },
    {
      date: '2022-02-18',
      activity: 'Ujian Tengah Semester',
    },
    {
      date: '2022-03-18',
      activity: 'Masa Orientasi Peserta Didik Baru',
      note: 'Orientasi ke-3',
    },
    {
      date: '2022-04-18',
      activity: 'Diklat OSIS',
    },

    {
      date: '2022-05-18',
      activity: 'Bakti Sosial',
    },
    {
      date: '2022-06-18',
      activity: 'Ujian Tengah Semester',
    },
  ];

  console.log(DateTime.fromISO('2019-11-07').toLocaleString(DateTime.DATE_FULL));
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
          <h1 className='font-serif text-4xl font-bold text-yellow-600'>&#34;</h1>
          <p className='w-3/5 text-2xl text-center text-gray-800'>
            Selain pembelajaran akademik, disini saya memiliki teman-teman yang baik, gurunya asik-asik, dan kegiatan
            sekolahnya seru-seru.
          </p>
          <span className='mt-5 font-serif italic text-yellow-600'>2020 Pamardi Yuwana Bhakti Alumnus</span>
        </section>
        <section className='flex items-center justify-between mx-auto mb-28 max-w-7xl'>
          <SchoolSummary />
        </section>
        <section className='flex flex-col items-center mx-auto mb-28 max-w-7xl'>
          <LifeAtOurSchool />
        </section>
        <section className='flex items-center justify-between mx-auto mb-28 max-w-7xl'>
          <div className='w-full max-w-xl'>
            <Image src={SchoolBuilding} alt='School Building' className='rounded-xl' />
          </div>
          <div className='w-full max-w-2xl '>
            <div className='flex items-center justify-between mb-10'>
              <h1 className='text-2xl font-bold'>Academic Calendar 2021-2022</h1>
              <Link passHref href='/'>
                <p className='box-border p-1 italic bg-yellow-400 border-2 border-yellow-400 rounded-lg cursor-pointer hover:underline hover:text-white'>
                  View Full Calendar
                </p>
              </Link>
            </div>
            <div>
              {CalendarActivity.map((activity, index) => {
                return (
                  <div
                    key={`${activity}_${index}`}
                    className='flex items-center p-1 text-gray-800 border-blue-300 border-b-1 hover:bg-blue-100'>
                    <p className='w-3/12 italic font-bold'>
                      {DateTime.fromISO(activity.date).toLocaleString(DateTime.DATE_FULL)}
                    </p>
                    <p className='w-6/12'>{activity.activity}</p>
                    <p className='w-3/12'>{activity.note || ''}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>Latest News & Events</section>
        <section>Covid-19 Plan</section>
      </main>
    </div>
  );
};

export default Home;
