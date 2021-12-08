import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './HomeBanner.module.scss';

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
        <q className='z-20 w-1/3 pl-10 font-serif text-4xl italic leading-tight text-right text-white'>
          Talent wins games, but teamwork wins championships.
        </q>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner2} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-4xl italic leading-tight text-right text-white'>
          I’ve learned that something constructive comes from every defeat.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner3} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-4xl italic leading-tight text-right text-white'>
          Nothing is at last sacred but the integrity of your own mind.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner4} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-4xl italic leading-tight text-right text-white'>
          Tell me and I forget.
          <p>Teach me and I remember.</p>
          Involve me and I learn.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
      <div id={styles.Banner5} className={styles.HomeBanner}>
        <q className='z-20 w-1/3 pl-10 font-serif text-4xl italic leading-tight text-right text-white'>
          The future belongs to those who believe in the beauty of their dreams.
        </q>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent' />
      </div>
    </Carousel>
  );
};

export default HomeBanner;
