import { GetServerSideProps, NextPage } from 'next';
import { connectToDatabase } from '../../lib/db';
import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import Head from 'next/head';
import styles from './applicants.module.scss';

type ApplicantsType = {
  studentName: string;
  gender: string;
  dateOfBirth: string;
  schoolOrigin: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  dateCreated: string;
};

const Applicants: NextPage<{ applicants: Array<ApplicantsType> }> = ({ applicants }) => {
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
            <tr>
              <th>No</th>
              <th>Nama Peserta</th>
              <th>Jenis Kelamin</th>
              <th>Tanggal Lahir</th>
              <th>Asal Sekolah</th>
              <th>Nama Orangtua/Wali</th>
              <th>Nomor HP</th>
              <th>Email</th>
              <th>Tgl. Daftar</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{applicant.studentName}</td>
                <td>{applicant.gender === 'male' ? 'Laki-laki' : applicant.gender === 'female' ? 'Perempuan' : '-'}</td>
                <td>{new Date(applicant.dateOfBirth).toLocaleDateString()}</td>
                <td>{applicant.schoolOrigin}</td>
                <td>{applicant.guardianName}</td>
                <td>{applicant.guardianPhone}</td>
                <td>{applicant.guardianEmail}</td>
                <td>{new Date(applicant.dateCreated).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </AdminLayout>
  );
};

export default Applicants;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session || !session?.id || !session?.adminRole) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const data = await db.collection('applicants').find().toArray();
    const applicants = JSON.parse(JSON.stringify(data));
    return { props: { applicants } };
  } catch (err) {
    console.log(err);
    return { props: { applicants: [] } };
  }
};
