import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import HomeBanner from '../assets/images/HomeBanner.png';
import HomeBanner from '../components/Home/HomeBanner';

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
          {/* <Image src={HomeBanner} /> */}
        </section>
        <section>Alumni Said</section>
        <section>School Summary</section>
        <section>Life At Our School</section>
        <section>Academic Calendar</section>
        <section>Latest News & Events</section>
        <section>Covid-19 Plan</section>
      </main>
    </div>
  );
};

export default Home;
