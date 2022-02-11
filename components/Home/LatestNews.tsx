import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LatestNews: React.FC = () => {
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
                src='https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/70428789_378368076446002_6761419851333369856_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeEyVX-KJYoza069S2cMwo8O_trVQfBwBUv-2tVB8HAFS-pL9bQCDdd7WRxtfqjm09Y&_nc_ohc=W2QMl7kB5sYAX8bQxrd&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT80kaGuTVRx55NhGp7G8Pqknc7vmVXcPabTlw7TQUys5w&oe=6229D8A2'
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
                  src='https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/83948291_494513364831472_6615202976845791232_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEYBmqq1q75WMVbNpqayy10WUzlGLBZdntZTOUYsFl2e0QmXOXtbdKrss2Dj-H61eQ&_nc_ohc=1mGSXfgx7lcAX8hhbmc&tn=dg4L8K7fLkj_W39C&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT-QlT7YHIFm-GvfXp1n7ls2E5J_Z9vUD5muZVEOCyMDPg&oe=622B31D7'
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
                  src='https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/43311629_1093882590793082_4156861454366015488_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeHCC7lE7mRpMXl_fMxWU5T4EiowU2UywhUSKjBTZTLCFdRCgoOZFxi2rbkwLXLtB_o&_nc_ohc=H1IxAHrEwWQAX-3R-UO&tn=dg4L8K7fLkj_W39C&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT8UhnaGY59GlHnFTV5o1aEifZmBXh-EqcCyVDVMYKja-A&oe=622ADD06'
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
                src='https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/81690559_473822646900544_6086522816587366400_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHd69P9apPP62tiAAfiG-if1EdAVgWpHinUR0BWBakeKVx9k8zWI3etm46bd0-bqhw&_nc_ohc=yuQDj269rPsAX-7JckG&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT-1Mm8FFMfcoKWfwebfVBEaSCFbNYC9_Fa7gXbFF6y63w&oe=622A94DC'
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
                  src='https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/79805615_455954322020710_4326915852612927488_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeH_-dZHkOzMU028VdvtRnKf5nWwJlc50gHmdbAmVznSAdE30CC8kuvmouHnzIgpXQI&_nc_ohc=JCL5OLgoo-QAX8P5WBc&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT_vYK8emRIch4Ptv597O2M0GafLyk_Cr6IhicEkB-wk0A&oe=622CEB06'
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
                  src='https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/74460261_436243663991776_6835650295096147968_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeEFmGvXGHrxe6iOkYoxkQ5sC3-iquGblLoLf6Kq4ZuUumWkzR2og7UsbqhzhZGUF1c&_nc_ohc=_fwm0695EnYAX-gMPJW&tn=dg4L8K7fLkj_W39C&_nc_ht=scontent.fcgk29-1.fna&oh=00_AT_e6PVCy5XTdmyNaQRnmuIm2AxyzJSXsgAVwQ0Ek5Y2aw&oe=6229733E'
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
