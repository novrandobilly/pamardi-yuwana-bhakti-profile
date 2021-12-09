import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LatestNews = () => {
  return (
    <Fragment>
      <div className='flex flex-col w-1/2 space-y-5'>
        <Link passHref href='/blog'>
          <div className='w-full transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
            <div className='w-full'>
              <Image
                width={630}
                height={400}
                objectFit='cover'
                alt='News'
                src='https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/70689694_378368429779300_8408032878654390272_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=49qoi9zj8jQAX_QOV2z&_nc_ht=scontent.fcgk30-1.fna&oh=acd5a4c81abbaed6f5a5dd907b90eb68&oe=61D5C9C7'
              />
            </div>
            <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
              MATHEMATICS, COMPETITION, SCHOOL-RELATIONS
            </h6>
            <h2 className='px-5 py-2 text-2xl font-bold'>
              Tim Matematika PYB berhasil meraih juara II dalam kompetisi Matematika PL Cup
            </h2>
            <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
          </div>
        </Link>
        <div className='flex space-x-5'>
          <Link passHref href='/blog'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src='https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/84037284_494516958164446_5791807121423073280_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=U8wPrf1akBIAX-nP2g6&tn=O8IzagTKjFjQ-8lk&_nc_ht=scontent.fcgk30-1.fna&oh=acf2ca2ac46381d55ae6609454d63685&oe=61D64057'
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>OSIS, LEADERSHIP, ORGANIZATION</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>
                Pergantian tahun, diklat calon pengurus OSIS ditutup dengan serah terima jabatan.
              </h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
          <Link passHref href='/blog'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src='https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/43178859_1093883120793029_2399394453551841280_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=2jqP5G6uHgsAX9T8CPa&_nc_ht=scontent.fcgk30-1.fna&oh=a6d8f1a2c5642399b91850ac5859dab3&oe=61D75049'
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>ARTS, MUSIC, EXTRACURRICULAR</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>Pojok Seni, 8 grup siswa/i persembahkan performa menawan</h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col-reverse w-1/2 '>
        <Link passHref href='/blog'>
          <div className='w-full transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
            <div className='w-full'>
              <Image
                width={630}
                height={400}
                objectFit='cover'
                alt='News'
                src='https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/82388681_473819623567513_7402665744300769280_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=rw4ux33iJY8AX_To9fN&tn=O8IzagTKjFjQ-8lk&_nc_ht=scontent.fcgk30-1.fna&oh=55338faa4f1b9a076017db4a44e27965&oe=61D6C86E'
              />
            </div>
            <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>BAKTI SOSIAL, HUBUNGAN MASYARAKAT</h6>
            <h2 className='px-5 py-2 text-2xl font-bold'>
              Kolaborasi guru & murid SMP Pamardi Yuwana Bhakti merangkul masyarakat sekitar
            </h2>
            <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
          </div>
        </Link>
        <div className='flex mb-5 space-x-5'>
          <Link passHref href='/blog'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src='https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/79995470_455953555354120_7503276654584659968_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=iu-CxuNukGwAX-utIpH&tn=O8IzagTKjFjQ-8lk&_nc_ht=scontent.fcgk30-1.fna&oh=8c0e35f0e1a610899e123efdc352be95&oe=61D7716D'
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>SPORTS, COMPETITION</h6>
              <h2 className='px-5 py-2 text-lg font-bold'>
                Class Meeting berlangsung selama 4 hari, kelas 8 mendominasi.
              </h2>
              <p className='px-5 pt-2 pb-8 text-gray-400'>November 15, 2021</p>
            </div>
          </Link>
          <Link passHref href='/blog'>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className='object-cover w-full h-52 rounded-t-md'
                  alt='News'
                  src='https://scontent.fcgk30-1.fna.fbcdn.net/v/t1.6435-9/76938840_436243783991764_3278345942876553216_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=wSlNYx_hQ5gAX_c9riK&_nc_ht=scontent.fcgk30-1.fna&oh=f16b22230ca955b3d52f59d9643e25f1&oe=61D7B733'
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
