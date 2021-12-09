import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './LifeAtOurSchool.module.scss';

const LifeAtOurSchool = () => {
  return (
    <Fragment>
      <h1 className='pb-2 text-4xl font-bold text-gray-800 border-b-4 border-yellow-300'>LIFE AT OUR SCHOOL</h1>
      <p className='w-full max-w-lg mt-5 mb-5 text-lg text-center text-gray-800'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, adipisci ratione? Animi quisquam eveniet
        unde incidunt, nostrum quod doloribus dignissimos adipisci debitis.
      </p>
      <p className='self-start px-2 mb-3 text-xl italic text-left text-blue-700 transition-all hover:text-yellow-400 '>
        <Link href='/' passHref>
          View all activities
        </Link>
      </p>
      <div className='flex items-center justify-between w-full space-x-4'>
        <div id={styles.Activity1} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>ENGLISH LEARNING</p>
            <div className={styles.BackdropText}>
              <p>8 Hours A Week</p>
              <p>TOEFL Course</p>
              <p>Daily Conversation</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity2} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>TECHNOLOGY</p>
            <div className={styles.BackdropText}>
              <p>24/7 Mentoring</p>
              <p>Full Stack Development</p>
              <p>Javascript/TypeScript</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity3} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>HEALTH & WELLNESS</p>
            <div className={styles.BackdropText}>
              <p>Class Meeting Competition</p>
              <p>Reguler Practice</p>
              <p>Nutrition Education</p>
            </div>
          </div>
        </div>
        <div id={styles.Activity4} className={styles.ActivityItem}>
          <div className={styles.Backdrop}>
            <p className={styles.ActivityTitle}>ARTS</p>
            <div className={styles.BackdropText}>
              <p>Twice a Year Concert</p>
              <p>Twice a Year Exhibition</p>
              <p>Music & Art Studio</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LifeAtOurSchool;
