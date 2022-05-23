import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './LifeAtOurSchool.module.scss';

const LifeAtOurSchool: React.FC = () => {
  return (
    <section className='flex flex-col items-center px-5 mx-auto mb-0 lg:px-10 max-w-8xl'>
      <h1 className='mb-4 font-serif font-bold text-center text-gray-800 border-b-4 border-yellow-300 lg:pb-2 lg:mb-8 lg:text-3xl'>
        KEGIATAN KAMI DI SEKOLAH
      </h1>
      {/* <p className='w-full max-w-lg mt-5 mb-5 text-lg text-center text-gray-800'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, adipisci ratione? Animi quisquam eveniet
        unde incidunt, nostrum quod doloribus dignissimos adipisci debitis.
      </p> */}
      {/* <p className='self-start px-2 mb-3 text-xl italic text-left text-blue-700 transition-all hover:text-yellow-400 '>
        <Link href='/student-life' passHref>
          View all activities
        </Link>
      </p> */}
      <div className='flex flex-col items-center justify-between w-full lg:space-x-4 lg:flex-row'>
        <div id={styles.Activity1} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>GROUP PROJECT</p>
            <div className={styles.BackdropText}>
              <p>Discussion</p>
              <p>Empathize</p>
              <p>Innovate</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity2} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>LABORATORIUM</p>
            <div className={styles.BackdropText}>
              <p>Lab Komputer</p>
              <p>Lab Sains</p>
              <p>Lab Bahasa</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity3} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>OLAHRAGA</p>
            <div className={styles.BackdropText}>
              <p>Futsal, Basket, Volley</p>
              <p>Catur</p>
              <p>Kompetisi E-Sports</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity4} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>KESENIAN</p>
            <div className={styles.BackdropText}>
              <p>Seni Musik</p>
              <p>Seni Gambar</p>
              <p>Seni Tari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtOurSchool;
