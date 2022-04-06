import React, { Fragment } from 'react';
import Image from 'next/image';
import SchoolBuilding from '../../assets/images/SchoolBuilding.jpg';
import Link from 'next/link';
import { DateTime } from 'luxon';

const AcademicCalendar: React.FC = () => {
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
  return (
    <Fragment>
      <div className='w-full max-w-xl'>
        <Image src={SchoolBuilding} alt='School Building' className='rounded-xl' />
      </div>
      <div className='w-full max-w-2xl '>
        <div className='flex items-center justify-between mb-10'>
          <h1 className='text-2xl font-bold'>Academic Calendar 2021-2022</h1>
          <Link passHref href='/academic/academic-calendar'>
            <p className='box-border px-3 py-1 italic font-bold text-blue-900 transition-all bg-yellow-300 rounded cursor-pointer '>
              View Full Calendar
            </p>
          </Link>
        </div>
        <div>
          {CalendarActivity.map((activity, index) => {
            return (
              <div
                key={`${activity}_${index}`}
                className='flex items-center p-2 text-gray-800 border-blue-300 border-b-1 hover:bg-blue-100'>
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
    </Fragment>
  );
};

export default AcademicCalendar;
