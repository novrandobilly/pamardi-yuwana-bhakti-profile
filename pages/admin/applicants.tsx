import { GetServerSideProps, NextPage } from 'next';
import { connectToDatabase } from '../../lib/db';
import { getSession } from 'next-auth/react';
import Image from 'next/image';
import DownloadIcon from '../../assets/icons/download-icon.svg';
import React from 'react';
import NoSSR from '../../components/shared/NoSSR';
import { CSVLink } from 'react-csv';
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
  const headers = [
    { label: 'Nama', key: 'studentName' },
    { label: 'Jenis Kelamin', key: 'gender' },
    { label: 'Tanggal Lahir', key: 'dateOfBirth' },
    { label: 'Asal Sekolah', key: 'schoolOrigin' },
    { label: 'Nama Orangtua/Wali', key: 'guardianName' },
    { label: 'No HP Orangtua/Wali', key: 'guardianPhone' },
    { label: 'Email Orangtua/Wali', key: 'guardianEmail' },
    { label: 'Tanggal Daftar', key: 'dateCreated' },
  ];

  const csvData = applicants.map((applicant) => {
    return {
      ...applicant,
      guardianPhone: `'${applicant.guardianPhone}`,
      dateCreated: new Date(applicant.dateCreated).toLocaleDateString('id-ID'),
    };
  });

  return (
    <AdminLayout>
      {/* <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Admin Panel" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between w-full pt-5 mx-auto pb-14 max-w-8xl">
        <div className="flex flex-col items-start justify-between w-full mb-3 sm:items-center sm:flex-row ">
          <h1 className="mb-2 font-serif text-xl font-bold sm:mb-0">Daftar Calon Peserta Didik</h1>
          <NoSSR>
            <CSVLink
              href={'/'}
              className="flex items-center py-1 text-sm text-white bg-blue-900 rounded-md justify-evenly w-36"
              target="_blank"
              filename={new Date().toLocaleDateString('id-ID') + '-daftar-calon-peserta-didik.csv'}
              data={csvData}
              headers={headers}
              separator={';'}
              enclosingCharacter={''}>
              <Image alt="download-icon" src={DownloadIcon} width={20} height={20} />
              Download All
            </CSVLink>
          </NoSSR>
        </div>
        <div className={styles['table-container']}>
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
                  <td>
                    {applicant.gender === 'male' ? 'Laki-laki' : applicant.gender === 'female' ? 'Perempuan' : '-'}
                  </td>
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
        </div>
      </main> */}
    </AdminLayout>
  );
};

export default Applicants;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession({ req: context.req });

//   if (!session || !session?.id || !session?.adminRole) {
//     return {
//       redirect: {
//         destination: '/admin',
//         permanent: false,
//       },
//     };
//   }
//   try {
//     const client = await connectToDatabase();
//     const db = client.db();
//     const data = await db.collection('applicants').find().toArray();
//     const applicants = JSON.parse(JSON.stringify(data));
//     return { props: { applicants } };
//   } catch (err) {
//     console.log(err);
//     return { props: { applicants: [] } };
//   }
// };
