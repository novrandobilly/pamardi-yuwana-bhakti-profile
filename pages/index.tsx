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
        <section className='flex flex-col items-center px-5 mx-auto my-5 lg:my-16 lg:flex-row lg:px-10 max-w-8xl justify-evenly'>
          <div className='mb-5 lg:pr-10'>
            <h1 className='mb-2 font-serif text-xl font-bold border-b-4 border-yellow-300 lg:pb-2 lg:text-3xl'>Visi</h1>
            <p className='italic leading-6 lg:leading-loose lg:text-lg'>
              &ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur suscipit repudiandae corrupti
              eius pariatur consectetur temporibus rem reiciendis omnis nisi exercitationem veritatis expedita,
              molestias magni.&rdquo;
            </p>
          </div>
          <div className='mb-5 '>
            <h1 className='mb-2 font-serif text-xl font-bold border-b-4 border-yellow-300 lg:pb-2 lg:text-3xl'>Misi</h1>
            <p className='italic leading-6 lg:leading-loose lg:text-lg'>
              &ldquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur suscipit repudiandae corrupti
              eius pariatur consectetur temporibus rem reiciendis omnis nisi exercitationem veritatis expedita,
              molestias magni.&rdquo;
            </p>
          </div>
        </section>

        <PrincipalMessage />
        <div className='pt-5 lg:pt-10 bg-yellow-50'>
          <SchoolSummary />
        </div>
        <LifeAtOurSchool />
        <section className='flex flex-col items-center px-5 mb-10 lg:my-12 lg:px-14'>
          <h1 className='font-serif text-2xl font-bold text-blue-600 lg:text-4xl'>&#34;</h1>
          <p className='w-full text-base text-center text-gray-800 lg:text-2xl lg:w-3/5'>
            Selain pembelajaran akademik, disini saya memiliki teman-teman yang baik, gurunya asik-asik, dan kegiatan
            sekolahnya seru-seru.
          </p>
          <span className='mt-3 font-serif text-xs italic text-blue-600 lg:text-base lg:mt-5'>
            2020 Pamardi Yuwana Bhakti Alumnus
          </span>
        </section>

        {/* <section className='flex items-center justify-between mx-auto mb-28 max-w-8xl'>
          <AcademicCalendar />
        </section> */}
        <div className='pt-5 lg:pt-10 bg-yellow-50'>
          <LatestNews article={article} />
        </div>
        <section className='w-full px-5 mx-auto py-14 max-w-7xl lg:px-10'>
          <div className='flex flex-col items-center py-4 mx-auto space-y-5 border-t-4 border-b-4 border-yellow-300 '>
            <h1 className='pb-0 font-serif text-base text-center lg:pb-3 lg:text-4xl '>
              SMP Pamardi Yuwana Bhakti sebagai rumah kedua bagi siswa-siswi untuk mewujudkan cita-citanya.
            </h1>
            <Link passHref href='/admission'>
              <button className='px-5 py-2 text-base font-bold text-blue-900 transition-all transform bg-yellow-400 border-2 rounded lg:text-2xl hover:scale-110'>
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
