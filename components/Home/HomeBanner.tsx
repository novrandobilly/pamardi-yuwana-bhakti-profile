// import React from 'react';
// import styles from './HomeBanner.module.scss';

// const HomeBanner = () => {
//   return (
//     <div className={styles.HomeBanner}>
//       <div className='absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-black'></div>
//     </div>
//   );
// };

// export default HomeBanner;
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './HomeBanner.module.scss';

import Graduation from '../../assets/images/HomeBanner/Graduation.jpg';
import Basket from '../../assets/images/HomeBanner/Basket.jpg';
import Chess from '../../assets/images/HomeBanner/Chess.jpg';
import PojokSeni from '../../assets/images/HomeBanner/PojokSeni.jpg';
import Teamwork from '../../assets/images/HomeBanner/Teamwork.jpg';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      emulateTouch
      stopOnHover={false}
      transitionTime={1000}
      interval={5000}>
      <div id={styles.Banner1} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-5xl italic leading-tight text-right text-white'>
          Talent wins games, but teamwork win championships.
        </q>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner2} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-5xl italic leading-tight text-right text-white'>
          I’ve learned that something constructive comes from every defeat.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner3} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-5xl italic leading-tight text-right text-white'>
          Nothing is at last sacred but the integrity of your own mind.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner4} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-5xl italic leading-tight text-right text-white'>
          Tell me and I forget. Teach me and I remember. Involve me and I learn.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner5} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-5xl italic leading-tight text-right text-white'>
          The future belongs to those who believe in the beauty of their dreams.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
    </Carousel>
  );
};

export default HomeBanner;
