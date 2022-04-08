import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';
import ID from '../assets/icons/ID.svg';
import UK from '../assets/icons/UK.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className='fixed z-20 flex items-center justify-between w-full px-10 py-2 mx-auto bg-white bg-opacity-90'>
      <div className='flex items-center justify-between w-full mx-auto max-w-8xl'>
        {/* Pamardi Yuwana Bhakti's Logo */}
        <Link passHref href='/'>
          <div className='flex items-center w-1/3 '>
            <Image src={Logo} objectFit='contain' width={50} height={50} className='cursor-pointer' alt='School Logo' />
          </div>
        </Link>

        {/* Navgiation Bar */}
        <ul className='flex justify-between w-48 text-base leading-4 '>
          {/* <li className='pr-5 hover:text-blue-800 '>
          <Link passHref href='/'>
            Home
          </Link>
        </li>
        <li className='relative px-5 border-blue-800 cursor-pointer border-l-1 group hover:text-blue-800 '>
          Profile
          <ul className='absolute hidden py-2 text-sm text-left text-black bg-transparent w-max left-5 group-hover:block top-4'>
            <Link passHref href='/profile/vission-mission'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>
                Vision &amp; Mission
              </li>
            </Link>
            <Link passHref href='/profile/logo'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>Logo</li>
            </Link>
            <Link passHref href='/profile/march'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>Mars</li>
            </Link>
          </ul>
        </li>

        <li className='relative px-5 border-blue-800 cursor-pointer border-l-1 group hover:text-blue-800 '>
          Academic
          <ul className='absolute hidden py-2 text-sm text-left text-black bg-transparent w-max left-5 group-hover:block top-4'>
            <Link passHref href='/academic/curriculum'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>Curriculum</li>
            </Link>
            <Link passHref href='/academic/code-of-conduct'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>
                Code of Conduct
              </li>
            </Link>
            <Link passHref href='/academic/students-book'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>
                Student&apos;s Book
              </li>
            </Link>
            <Link passHref href='/academic/schedule'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>Schedule</li>
            </Link>
            <Link passHref href='/academic/academic-calendar'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>
                Academic Calendar
              </li>
            </Link>
            <Link passHref href='/academic/faculty-staff'>
              <li className='py-2 pl-3 pr-2 bg-white border-b-2 border-blue-100 w-52 hover:bg-blue-100 '>
                Faculty &amp; Staff
              </li>
            </Link>
          </ul>
        </li>
        <li className='px-5 border-blue-800 border-l-1 hover:text-blue-800'>
          <Link passHref href='/extracurricular'>
            Extracurricular
          </Link>
        </li>
        <li className='px-5 border-blue-800 border-l-1 hover:text-blue-800'>
          <Link passHref href='/student-life'>
            Student Life
          </Link>
        </li>
        <li className='px-5 border-blue-800 border-l-1 hover:text-blue-800'>
          <Link passHref href='/facilities'>
            Facilities
          </Link>
        </li>
        <li className='px-5 border-blue-800 border-l-1 hover:text-blue-800'>
          <Link passHref href='/blog'>
            Blog
          </Link>
        </li> */}
          <li
            className={`${styles['nav-item']} font-serif transition-all duration-150 ease-in-out hover:text-blue-800`}>
            <Link passHref href='/admission'>
              Pendaftaran
            </Link>
          </li>
          <li className='flex items-center justify-between w-14 hover:text-blue-800'>
            <span className='cursor-pointer'>
              <Image width={20} height={20} layout='fixed' src={ID} alt='Bahasa Indonesia' />
            </span>
            <span className='cursor-pointer'>
              <Image width={20} height={20} layout='fixed' src={UK} alt='English' />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
