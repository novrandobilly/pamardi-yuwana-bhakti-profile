import type { NextPage, GetStaticProps } from 'next';
import { connectToDatabase } from '../lib/db';
import Head from 'next/head';
import HomeBanner from '../components/Home/HomeBanner';
import SchoolSummary from '../components/Home/SchoolSummary';
import LifeAtOurSchool from '../components/Home/LifeAtOurSchool';
// import AcademicCalendar from '../components/Home/AcademicCalendar';
import PrincipalMessage from '../components/Home/PrincipalMessage';
import LatestNews from '../components/Home/LatestNews';
import Link from 'next/link';
// import Image from 'next/image';
// import Masker from '../assets/icons/Masker.svg';
// import Needle from '../assets/icons/Needle.svg';

export type ArticleType = {
  _id: string;
  title: string;
  dateCreated: string;
  tags: Array<string>;
  images: Array<string>;
};

const Home: NextPage<{ article: Array<ArticleType> }> = ({ article }) => {
  return (
    <div>
      <Head>
        <title>Pamardi Yuwana Bhakti</title>
        <meta name='description' content='Sekolah Menengah Pertama (SMP) Pamardi Yuwana Bhakti Homepage' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section>
          <HomeBanner />
        </section>
        <section className='flex items-center mx-auto my-16 px-14 max-w-8xl justify-evenly'>
          <div className='pr-20'>
            <h1 className='pb-2 mb-2 font-serif text-3xl font-bold border-b-4 border-yellow-300'>Visi</h1>
            <p className='text-lg italic leading-loose'>
              &ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur suscipit repudiandae corrupti
              eius pariatur consectetur temporibus rem reiciendis omnis nisi exercitationem veritatis expedita,
              molestias magni.&rdquo;
            </p>
          </div>
          <div className='pr-20'>
            <h1 className='pb-2 mb-2 font-serif text-3xl font-bold border-b-4 border-yellow-300'>Misi</h1>
            <p className='text-lg italic leading-loose'>
              &ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur suscipit repudiandae corrupti
              eius pariatur consectetur temporibus rem reiciendis omnis nisi exercitationem veritatis expedita,
              molestias magni.&rdquo;
            </p>
          </div>
        </section>
        <section className='flex justify-between mx-auto mt-10 mb-20 px-14 max-w-8xl '>
          <PrincipalMessage />
        </section>
        <section className='flex items-start justify-between mx-auto mb-20 px-14 max-w-8xl'>
          <SchoolSummary />
        </section>
        <section className='flex flex-col items-center mx-auto mb-0 px-14 max-w-8xl'>
          <LifeAtOurSchool />
        </section>
        <section className='flex flex-col items-center my-12 px-14'>
          <h1 className='font-serif text-4xl font-bold text-blue-600'>&#34;</h1>
          <p className='w-3/5 text-2xl text-center text-gray-800'>
            Selain pembelajaran akademik, disini saya memiliki teman-teman yang baik, gurunya asik-asik, dan kegiatan
            sekolahnya seru-seru.
          </p>
          <span className='mt-5 font-serif italic text-blue-600'>2020 Pamardi Yuwana Bhakti Alumnus</span>
        </section>

        {/* <section className='flex items-center justify-between mx-auto mb-28 max-w-8xl'>
          <AcademicCalendar />
        </section> */}
        <section className='flex items-center justify-between mx-auto space-x-5 mb-14 max-w-8xl px-14'>
          <LatestNews article={article} />
        </section>
        <section className='w-full mx-auto mb-14 max-w-7xl px-14'>
          <div className='flex flex-col items-center py-4 mx-auto space-y-5 border-t-4 border-b-4 border-yellow-300 '>
            <h1 className='pb-3 font-serif text-4xl text-center '>
              SMP Pamardi Yuwana Bhakti sebagai rumah kedua bagi siswa-siswi untuk mewujudkan cita-citanya.
            </h1>
            <Link passHref href='/admission'>
              <button className='px-5 py-2 text-2xl font-bold text-blue-900 transition-all transform bg-yellow-400 border-2 rounded hover:scale-110'>
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </section>

        {/* <section className='w-full py-4 bg-yellow-100 px-14'>
          <div className='flex items-start justify-between w-full mx-auto max-w-8xl'>
            <div className='flex flex-col items-start justify-start w-1/2'>
              <div className='flex items-center justify-start mb-2'>
                <Image src={Masker} width={35} height={35} alt='Masker' />
                <h1 className='ml-3 text-2xl font-bold '>Panduan KBB selama COVID-19</h1>
              </div>
              <p className='text-lg'>
                Protokol Kesehatan dan <span className='underline cursor-pointer'>Kewajiban Menggunakan Masker</span>
              </p>
            </div>
            <div className='flex flex-col items-start justify-start w-1/2'>
              <div className='flex items-center justify-start mb-2'>
                <Image src={Needle} width={35} height={35} alt='Masker' />
                <h1 className='ml-3 text-2xl font-bold '>COVID-19 School Resources</h1>
              </div>
              <p className='text-lg'>
                Cara menanggapi dan melaporkan hasil Vaksin, test COVID-19, dan perihal positif COVID-19
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = await connectToDatabase();
  const db = client.db();
  try {
    const data = await db
      .collection('articles')
      .find()
      .project({ _id: 1, title: 1, tags: 1, dateCreated: 1, images: 1 })
      .sort({ dateCreated: -1 })
      .limit(6)
      .toArray();
    const article = JSON.parse(JSON.stringify(data));
    return {
      props: { article },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
