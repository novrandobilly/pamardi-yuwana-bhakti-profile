import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';
import Whatsapp from '../assets/icons/Whatsapp.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Facebook from '../assets/icons/Facebook.svg';

const Footer: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center w-full text-white bg-blue-900 px-14'>
      <div className='flex items-start justify-between w-full pt-5 mx-auto max-w-8xl'>
        <div className='flex flex-col w-1/5 min-w-max '>
          <div className='flex items-center w-full mb-5'>
            <div className='bg-white border-white rounded-full' style={{ width: '125px', height: '125px' }}>
              <Image alt='Logo' width={125} height={125} src={Logo} />
            </div>
            <h1 className='w-1/3 ml-5 font-serif text-2xl leading-10 '>PAMARDI YUWANA BHAKTI</h1>
          </div>
          <div>
            <p className='leading-7'>Jl. Cendrawasih, Komp. Bumi Makmur</p>
            <p className='leading-7'>Jati Makmur, Kec. Pondokgede</p>
            <p className='leading-7'>Kota Bekasi, Jawa Barat, 17413 </p>
          </div>
        </div>

        {/* <div className='flex flex-col w-1/4'>
          <h1 className='mb-3 text-xl font-bold'>PYB&apos;s Profile</h1>
          <ul className='space-y-3'>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/profile/vission-mission'>
                Visi &amp; Misi
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/profile/logo'>
                Logo
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/profile/march'>
                March
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col w-1/4'>
          <h1 className='mb-3 text-xl font-bold'>Academics</h1>
          <ul className='space-y-3'>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/academic/curriculum'>
                Curriculum
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/academic/code-of-conduct'>
                Code of Conduct
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/academic/students-book'>
                Student&apos;s Book
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/academic/schedule'>
                Schedule
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/academic/academic-calendar'>
                Academic Calendar
              </Link>
            </li>
            <li className='transition-all text-md hover:text-yellow-300'>
              <Link passHref href='/academic/faculty-staff'>
                Faculty &amp; Staff
              </Link>
            </li>
          </ul>
        </div> */}
        <div className='flex flex-col w-1/5 min-w-max'>
          <h1 className='text-lg font-bold '>Kontak Kami</h1>
          <p className='leading-7'>Telepon: 021 123 4567</p>
          <p className='leading-7'>Whatsapp: 0821 1234 5678</p>
          <p className='mb-5 leading-7'>Email: pamardi.yuwana@bhakti.com</p>
          <h1 className='mb-2 text-lg font-bold'>Lihat Aktivitas Kami</h1>
          <ul className='flex w-full space-x-5'>
            <li className='cursor-pointer'>
              <a
                href='https://instagram.com/officialosispyb?utm_medium=copy_link'
                target='_blank'
                rel='noopener noreferrer'>
                <Image width={30} height={30} layout='fixed' src={Instagram} alt='Instagram' />
              </a>
            </li>
            <li className='cursor-pointer'>
              <a href='https://www.facebook.com/osis.pyb' target='_blank' rel='noopener noreferrer'>
                <Image width={30} height={30} layout='fixed' src={Facebook} alt='Facebook' />
              </a>
            </li>
            <li className='cursor-pointer'>
              <a href='https://www.facebook.com/osis.pyb' target='_blank' rel='noopener noreferrer'>
                <Image width={30} height={30} layout='fixed' src={Whatsapp} alt='Whatsapp' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className='py-3'>&#169; by Envien Studio | 2022 SMP PAMARDI YUWANA BHAKTI</p>
    </section>
  );
};

export default Footer;
