import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className='flex items-center justify-between px-10 py-2 '>
      {/* Pamardi Yuwana Bhakti's Logo */}
      <Image src={Logo} objectFit='contain' width={60} height={60} />

      {/* Navgiation Bar */}
      <div>
        <ul className='flex text-base leading-4'>
          <li className='pr-5 hover:text-blue-600 '>
            <Link href='/'> Home </Link>
          </li>
          <li className='relative px-5 border-blue-600 cursor-pointer border-l-1 group hover:text-blue-600 '>
            Profile
            <ul className='absolute hidden py-2 text-sm text-left text-black bg-white w-max left-5 group-hover:block top-4'>
              <Link href='/visi-misi'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Vission & Mission</li>
              </Link>
              <Link href='/logo'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Logo</li>
              </Link>
              <Link href='/mars'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Mars</li>
              </Link>
            </ul>
          </li>

          <li className='relative px-5 border-blue-600 cursor-pointer border-l-1 group '>
            Academic
            <ul className='absolute hidden py-2 text-sm text-left text-black bg-white w-max left-5 group-hover:block top-4'>
              <Link href='/kurikulum'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Curriculum</li>
              </Link>
              <Link href='/logo'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Code of Conduct (Tatib)</li>
              </Link>
              <Link href='/buku-siswa'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Student's Book</li>
              </Link>
              <Link href='/schedule'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Schedule</li>
              </Link>
              <Link href='/kalender-akademik'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Academic Calendar</li>
              </Link>
              <Link href='/faculty-staff'>
                <li className='py-1 pr-2 border-blue-300 hover:bg-blue-100 border-b-1 '>Faculty & Staff</li>
              </Link>
            </ul>
          </li>
          <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
            <Link href='/extrakurikuler'>Extracurricular</Link>
          </li>
          <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
            <Link href='/student-life'>Student Life</Link>
          </li>
          <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
            <Link href='/fasilitas'>Facilities</Link>
          </li>
          <li className='px-5 border-blue-600 border-l-1 hover:text-blue-600'>
            <Link href='/galeri'>Gallery</Link>
          </li>
          <li className='pl-5 border-blue-600 border-l-1 hover:text-blue-600'>
            <Link href='/admission'>Admission</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
