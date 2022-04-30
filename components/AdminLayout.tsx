import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { data: session, status } = useSession();

  return (
    <Fragment>
      <Head>
        <title>Admin Panel</title>
        <meta name='description' content='Admin Panel' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-center w-full pt-1 mx-auto max-w-8xl'>
        <div className='flex flex-col items-start justify-start w-2/12 min-h-screen p-3 text-gray-200 bg-blue-900 rounded-tr-2xl'>
          <h1 className='w-full mb-3 text-xl font-bold border-b-2 border-yellow-300'>Admin Panel</h1>
          {session && session.id && session.adminRole === 'general-admin' && (
            <ul>
              <li className='mb-3 transition-all duration-200 cursor-pointer hover:text-yellow-300 hover:scale-110'>
                <Link href='/admin/applicants'>Pendaftaran</Link>
              </li>
              <li className='mb-3 italic text-gray-500 transition-all duration-200 cursor-not-allowed'>Post Artikel</li>
              <li className='mb-3 italic text-gray-500 transition-all duration-200 cursor-not-allowed'>
                Data Siswa Aktif
              </li>
              <li className='mb-3 italic text-gray-500 transition-all duration-200 cursor-not-allowed'>
                Guru &amp; Karyawan
              </li>
            </ul>
          )}
        </div>
        <div className='w-10/12 pl-5 pr-10'>{children}</div>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
