import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import Head from 'next/head';
import styles from './applicants.module.scss';

const Applicants = () => {
  return (
    <AdminLayout>
      <Head>
        <title>Admin Panel</title>
        <meta name='description' content='Admin Panel' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col justify-between w-full pt-5 mx-auto pb-14 max-w-8xl'>
        <h1 className='mb-3 font-serif text-xl font-bold'>Daftar Calon Peserta Didik</h1>
        <table className={`${styles['applicants-table']} w-full `}>
          <thead>
            <th>No</th>
            <th>Nama Peserta</th>
            <th>Jenis Kelamin</th>
            <th>Tanggal Lahir</th>
            <th>Asal Sekolah</th>
            <th>Nama Orangtua/Wali</th>
            <th>Nomor HP</th>
            <th>Email</th>
            <th>Tgl. Daftar</th>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Rean Schwarzer</td>
              <td>Laki-laki</td>
              <td>01-05-1993</td>
              <td>Thors Academy</td>
              <td>Theo Schwarzer</td>
              <td className={styles['phone']}>082145351234</td>
              <td className={styles['email']}>tschwarzer@gmail.com</td>
              <td>{new Date().toDateString()}</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Klaudia von Auslese</td>
              <td>Perempuan</td>
              <td>11-10-1993</td>
              <td>Jenis Royal Academy</td>
              <td>Alicia von Auslese</td>
              <td className={styles['phone']}>082188467522</td>
              <td className={styles['email']}>avauslese@gmail.com</td>
              <td>{new Date().toDateString()}</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Kilika Rouran</td>
              <td>Perempuan</td>
              <td>25-06-1993</td>
              <td>Taito School</td>
              <td>Zin Vathek</td>
              <td className={styles['phone']}>082287553171</td>
              <td className={styles['email']}>zvathek@gmail.com</td>
              <td>{new Date().toDateString()}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </AdminLayout>
  );
};

export default Applicants;
