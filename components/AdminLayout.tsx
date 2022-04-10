import React from 'react';
import Link from 'next/link';

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className='flex justify-center w-full pt-1 mx-auto max-w-8xl'>
      <div className='flex flex-col items-start justify-start w-2/12 min-h-screen p-3 text-gray-200 bg-blue-900 rounded-tr-2xl'>
        <h1 className='w-full mb-3 text-xl font-bold border-b-2 border-yellow-300'>Admin Panel</h1>
        <ul>
          <li className='mb-3 transition-all duration-200 cursor-pointer hover:text-yellow-300 hover:scale-110'>
            <Link href='/admin/applicants'>Pendaftaran</Link>
          </li>
          <li className='mb-3 text-gray-500 transition-all duration-200 cursor-not-allowed'>Post Artikel</li>
          <li className='mb-3 text-gray-500 transition-all duration-200 cursor-not-allowed'>Data Siswa Aktif</li>
          <li className='mb-3 text-gray-500 transition-all duration-200 cursor-not-allowed'>Guru &amp; Karyawan</li>
        </ul>
      </div>
      <div className='w-10/12 pl-5 pr-10'>{children}</div>
    </div>
  );
};

export default AdminLayout;
