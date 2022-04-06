import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './LifeAtOurSchool.module.scss';

const LifeAtOurSchool: React.FC = () => {
  return (
    <Fragment>
      <h1 className='pb-2 mb-8 font-serif text-3xl font-bold text-gray-800 border-b-4 border-yellow-300'>
        LIFE AT OUR SCHOOL
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
      <div className='flex items-center justify-between w-full space-x-4'>
        <div id={styles.Activity1} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>ENGLISH LEARNING</p>
            <div className={styles.BackdropText}>
              <p>Daily Conversation</p>
              <p>TOEFL Course</p>
              <p>8 Hours A Week</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity2} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>TEKNOLOGI</p>
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
    </Fragment>
  );
};

export default LifeAtOurSchool;
