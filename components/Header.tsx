import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className='fixed z-20 flex items-center justify-between w-full px-10 pt-2 pb-3 bg-white bg-opacity-75'>
      {/* Pamardi Yuwana Bhakti's Logo */}
      <Link href='/'>
        <div>
          <Image src={Logo} objectFit='contain' width={60} height={60} className='cursor-pointer' alt='School Logo' />
        </div>
      </Link>

      {/* Navgiation Bar */}

      <ul className='flex text-base leading-4'>
        <li className='pr-5 hover:text-blue-600 '>
          <Link href='/'> Home </Link>
        </li>
        <li className='relative px-5 border-blue-600 cursor-pointer border-l-1 group hover:text-blue-600 '>
          Profile
          <ul className='absolute hidden py-2 text-sm text-left text-black bg-transparent w-max left-5 group-hover:block top-4'>
            <Link href='/profile/vission-mission'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>
                Vission & Mission
              </li>
            </Link>
            <Link href='/profile/logo'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Logo</li>
            </Link>
            <Link href='/profile/march'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Mars</li>
            </Link>
          </ul>
        </li>

        <li className='relative px-5 border-blue-600 cursor-pointer border-l-1 group hover:text-blue-600 '>
          Academic
          <ul className='absolute hidden py-2 text-sm text-left text-black bg-transparent w-max left-5 group-hover:block top-4'>
            <Link href='/academic/curriculum'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Curriculum</li>
            </Link>
            <Link href='/academic/code-of-conduct'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Code of Conduct</li>
            </Link>
            <Link href='/academic/students-book'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Student's Book</li>
            </Link>
            <Link href='/academic/schedule'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Schedule</li>
            </Link>
            <Link href='/academic/academic-calendar'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>
                Academic Calendar
              </li>
            </Link>
            <Link href='/academic/faculty-staff'>
              <li className='py-1 pl-1 pr-2 bg-white border-blue-300 hover:bg-blue-100 border-b-1 '>Faculty & Staff</li>
            </Link>
          </ul>
        </li>
        <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
          <Link href='/extracurricular'>Extracurricular</Link>
        </li>
        <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
          <Link href='/student-life'>Student Life</Link>
        </li>
        <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
          <Link href='/facilities'>Facilities</Link>
        </li>
        <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
          <Link href='/gallery'>Gallery</Link>
        </li>
        <li className='pl-5 border-blue-600 border-l-1 hover:text-blue-600'>
          <Link href='/admission'>Admission</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
