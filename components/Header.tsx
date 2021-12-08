import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className='fixed z-20 flex items-center justify-between w-full px-10 py-2 bg-white bg-opacity-90'>
      {/* Pamardi Yuwana Bhakti's Logo */}
      <Link passHref href='/'>
        <div className='flex items-center w-1/3 '>
          <Image src={Logo} objectFit='contain' width={60} height={60} className='cursor-pointer' alt='School Logo' />
          <h1 className='ml-2 font-serif text-2xl font-bold'>PAMARDI YUWANA BHAKTI</h1>
        </div>
      </Link>

      {/* Navgiation Bar */}

      <ul className='flex text-base leading-4'>
        <li className='pr-5 hover:text-blue-800 '>
          <Link passHref href='/'>
            Home
          </Link>
        </li>
        <li className='relative px-5 border-blue-800 cursor-pointer border-l-1 group hover:text-blue-800 '>
          Profile
          <ul className='absolute hidden py-2 text-sm text-left text-black bg-transparent w-max left-5 group-hover:block top-4'>
            <Link passHref href='/profile/vission-mission'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>
                Vission & Mission
              </li>
            </Link>
            <Link passHref href='/profile/logo'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Logo</li>
            </Link>
            <Link passHref href='/profile/march'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Mars</li>
            </Link>
          </ul>
        </li>

        <li className='relative px-5 border-blue-800 cursor-pointer border-l-1 group hover:text-blue-800 '>
          Academic
          <ul className='absolute hidden py-2 text-sm text-left text-black bg-transparent w-max left-5 group-hover:block top-4'>
            <Link passHref href='/academic/curriculum'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Curriculum</li>
            </Link>
            <Link passHref href='/academic/code-of-conduct'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Code of Conduct</li>
            </Link>
            <Link passHref href='/academic/students-book'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>
                Student&apos;s Book
              </li>
            </Link>
            <Link passHref href='/academic/schedule'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Schedule</li>
            </Link>
            <Link passHref href='/academic/academic-calendar'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>
                Academic Calendar
              </li>
            </Link>
            <Link passHref href='/academic/faculty-staff'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Faculty & Staff</li>
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
          <Link passHref href='/gallery'>
            Gallery
          </Link>
        </li>
        <li className='pl-5 border-blue-800 border-l-1 hover:text-blue-800'>
          <Link passHref href='/admission'>
            Admission
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
