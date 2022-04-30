import React, { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Key from '../../assets/icons/key.png';
import { getSession, signIn } from 'next-auth/react';
import AdminLayout from '../../components/AdminLayout';

import styles from './index.module.scss';

const Admin: NextPage = () => {
  const router = useRouter();
  const [adminId, setAdminId] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const res: any = await signIn('credentials', { redirect: false, adminId, adminPassword, admin: true });
    if (res.error === null) router.push('/admin/applicants');
    setIsLoading(false);
  };

  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: '20vh' }}
        className='flex flex-col items-center justify-center w-full max-w-md p-5 mx-auto text-white bg-blue-900 rounded-md border-1 '>
        <div className='mb-3'>
          <Image alt='Key' src={Key} width={65} height={65} />
        </div>
        <h1 className='text-2xl text-yellow-300'>Admin Panel</h1>
        <div className='flex flex-col w-full mb-5 '>
          <label className='text-xs text-yellow-300' htmlFor='adminId'>
            Admin ID
          </label>
          <input
            type='text'
            id='adminId'
            className={`${styles['input']} w-full text-gray-200 bg-transparent border-b-2 border-yellow-300 outline-none`}
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </div>
        <div className='flex flex-col w-full mb-5 '>
          <label className='text-xs text-yellow-300' htmlFor='adminPassword'>
            Password
          </label>
          <input
            type='password'
            id='adminPassword'
            className='w-full text-gray-200 bg-transparent border-b-2 border-yellow-300 outline-none'
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </div>

        <button className='px-5 py-1 text-yellow-300 border-2 border-yellow-300'>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </AdminLayout>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });

  if (session && session?.id && session?.adminRole) {
    return {
      redirect: {
        destination: '/admin/applicants',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
