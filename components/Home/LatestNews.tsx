import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MathCup from '../../assets/images/Article/MathCup.jpg';
import SertijabOsis from '../../assets/images/Article/SertijabOsis.jpg';
import PojokSeni from '../../assets/images/Article/PojokSeni.jpg';
import HariGuru from '../../assets/images/Article/HariGuru.jpg';
import ClassMeeting from '../../assets/images/Article/ClassMeeting.jpg';
import Baksos from '../../assets/images/Article/Baksos.jpg';

const LatestNews: React.FC = () => {
  return (
    <Fragment>
      <div className='flex flex-col w-1/2 space-y-5'>
        <Link passHref href='/blog/1'>
          <div className='w-full transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
            <div className='w-full'>
              <Image width={630} height={400} objectFit='cover' alt='News' src={MathCup} />
            </div>
            <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
              MATHEMATICS, COMPETITION, SCHOOL-RELATIONS
            </h6>
            <h2 className='px-5 py-2 text-2xl font-bold'>
              Tim Matematika SMP PYB berhasil meraih juara II dalam kompetisi Matematika PL Cup
            </h2>
            <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
          </div>
        </Link>
        <div className='flex space-x-5'>
          <Link passHref href='/blog/2'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src={SertijabOsis}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>OSIS, LEADERSHIP, ORGANIZATION</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>
                Pergantian tahun, diklat calon pengurus OSIS ditutup dengan serah terima jabatan.
              </h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
          <Link passHref href='/blog/3'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src={PojokSeni}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>ARTS, MUSIC, EXTRACURRICULAR</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>
                Pojok Seni, 8 grup siswa-siswi persembahkan performa menawan
              </h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col-reverse w-1/2 '>
        <Link passHref href='/blog/4'>
          <div className='w-full transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
            <div className='w-full'>
              <Image width={630} height={400} objectFit='cover' alt='News' src={Baksos} />
            </div>
            <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>BAKTI SOSIAL, HUBUNGAN MASYARAKAT</h6>
            <h2 className='px-5 py-2 text-2xl font-bold'>
              Kolaborasi guru &amp; murid SMP Pamardi Yuwana Bhakti merangkul masyarakat sekitar
            </h2>
            <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
          </div>
        </Link>
        <div className='flex mb-5 space-x-5'>
          <Link passHref href='/blog/5'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src={ClassMeeting}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>SPORTS, COMPETITION</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>
                Class Meeting berlangsung selama 4 hari, kelas 8 mendominasi.
              </h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
          <Link passHref href='/blog/6'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src={HariGuru}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>TEACHER, STUDENT, BONDING</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>Selamat Hari Guru untuk Bapak Ibu Guru yang kami sayangi!</h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestNews;
