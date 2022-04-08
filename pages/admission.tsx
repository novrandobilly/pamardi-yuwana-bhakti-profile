import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
import Logo from '../assets/images/Logo.png';
import Image from 'next/image';

const Admission: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Admission</title>
        <meta name='description' content='Admission' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-full bg-yellow-200 '>
        <div className='flex justify-between w-full py-10 mx-auto bg-transparent max-w-8xl'>
          <div className='flex flex-col items-start justify-start bg-transparent'>
            <h1 className='text-3xl'>Form Pendaftaran Calon Peserta Didik</h1>
            <p className='italic '>Tahun Ajaran 2022/2023</p>
            <form className='w-full max-w-lg mt-5'>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Nama Calon Peserta Didik <span className='text-red-600'>*</span>
                </label>
                <input
                  className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'
                  type='text'
                  placeholder='Nama Lengkap'
                />
              </div>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Jenis kelamin<span className='text-red-600'>*</span>
                </label>
                <select className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'>
                  <option value='Male'>Laki-laki</option>
                  <option value='Female'>Perempuan</option>
                </select>
              </div>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Tanggal Lahir<span className='text-red-600'>*</span>
                </label>
                <input
                  type='date'
                  className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'
                  placeholder='Nama Lengkap'
                />
              </div>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Asal Sekolah<span className='text-red-600'>*</span>
                </label>
                <input
                  className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'
                  type='text'
                  placeholder='Asal Sekolah'
                />
              </div>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Nama Orangtua/Wali<span className='text-red-600'>*</span>
                </label>
                <input
                  className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'
                  type='text'
                  placeholder='Nama Orantua/Wali'
                />
              </div>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Nomor HP Orangtua/Wali<span className='text-red-600'>*</span>
                </label>
                <input
                  className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'
                  type='text'
                  placeholder='Nomor HP Orangtua/Wali'
                />
              </div>
              <div className='flex mb-3'>
                <label className='w-56 mr-2 '>
                  Email Orangtua/Wali<span className='text-red-600'>*</span>
                </label>
                <input
                  className='py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none w-72 border-1'
                  type='text'
                  placeholder='Email Orangtua/Wali'
                />
              </div>
              <p className='w-full max-w-lg text-sm italic'>
                *Mohon pastikan untuk mengisi nomor telepon dan alamat email yang valid untuk menerima informasi proses
                pendaftaran selanjutnya.
              </p>
              <button className='float-right px-5 text-lg font-bold bg-blue-900 rounded-lg text-gray-50'>Daftar</button>
            </form>
          </div>
          <div className='flex flex-col items-center justify-center w-full max-w-lg'>
            <div className='mb-3'>
              <Image alt='Pamardi Yuwana Bhakti' src={Logo} width={175} height={175} />
            </div>
            <h3 className='text-2xl text-center'>SMP PAMARDI YUWANA BHAKTI</h3>
            <h1 className='py-2 mb-10 font-serif text-6xl font-bold text-center'>Educating Future Leaders</h1>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Admission;
