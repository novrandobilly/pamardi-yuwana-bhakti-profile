import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import Head from 'next/head';
import Logo from '../assets/images/Logo.png';
import Image from 'next/image';
import Backdrop from '../components/shared/Backdrop';

const Admission: NextPage = () => {
  const [studentName, setStudentName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [schoolOrigin, setSchoolOrigin] = useState<string>('');
  const [guardianName, setGuardianName] = useState<string>('');
  const [guardianPhone, setGuardianPhone] = useState<string>('');
  const [guardianEmail, setGuardianEmail] = useState<string>('');
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleConfirmation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setConfirmation(true);
  };

  const handleCancel = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    setConfirmation(false);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const payload = {
      studentName,
      gender,
      dateOfBirth,
      schoolOrigin,
      guardianName,
      guardianPhone,
      guardianEmail,
    };

    try {
      const res = await fetch('/api/admission/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const resJSON = await res.json();
      console.log(resJSON);
      setStudentName('');
      setGender('');
      setDateOfBirth('');
      setSchoolOrigin('');
      setGuardianName('');
      setGuardianPhone('');
      setGuardianEmail('');
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Pendaftaran</title>
        <meta name='description' content='Pendaftaran' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {confirmation && <Backdrop onCancel={handleCancel} />}
      <div
        className={`fixed w-11/12 md:w-auto transform -translate-x-1/2 p-5 top-1/2 left-1/2 bg-yellow-50 rounded-md z-30 transition-all duration-300 ease-in-out `}
        style={{ transform: `translateY(${confirmation ? '-50%' : '-500%'}) translateX(-50%)` }}>
        <h1 className='mb-5 text-lg font-bold text-center'>Anda yakin untuk mengirimkan data tersebut?</h1>
        <div className='flex items-center justify-evenly'>
          {!submitted ? (
            <Fragment>
              <button className='px-3 border-black rounded-md cursor-pointer border-1' onClick={handleCancel}>
                Cancel
              </button>
              <button
                className='px-3 text-white bg-blue-900 border-blue-900 rounded-md cursor-pointer border-1'
                onClick={handleSubmit}>
                Submit
              </button>
            </Fragment>
          ) : (
            <p className='text-center'>
              Data berhasil terkirim.{' '}
              <span onClick={handleCancel} className='italic text-blue-500 cursor-pointer hover:text-yellow-300'>
                Klik untuk menutup kotak dialog
              </span>
            </p>
          )}
        </div>
      </div>
      <main className='w-full bg-yellow-200 '>
        <div className='flex flex-col items-center justify-between w-full px-5 py-5 mx-auto bg-transparent lg:py-10 lg:flex-row lg:px-10 max-w-8xl'>
          <div className='flex flex-col items-start justify-start bg-transparent lg:mr-5'>
            <h1 className='text-2xl font-bold'>Form Pendaftaran Calon Peserta Didik</h1>
            <p className='italic '>Tahun Ajaran 2022/2023</p>
            <form className='flex flex-col items-center w-full max-w-xl mt-5 mb-16 lg:mb-0'>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Nama Calon Peserta Didik <span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  type='text'
                  name='studentName'
                  placeholder='Nama Lengkap'
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Jenis kelamin<span className='text-red-600'>*</span>
                </label>
                <select
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  name='gender'
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                  <option value=''></option>
                  <option value='male'>Laki-laki</option>
                  <option value='female'>Perempuan</option>
                </select>
              </div>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Tanggal Lahir<span className='text-red-600'>*</span>
                </label>
                <input
                  type='date'
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  placeholder='Nama Lengkap'
                  name='dateOfBirth'
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Asal Sekolah<span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  type='text'
                  placeholder='Asal Sekolah'
                  name='schoolOrigin'
                  value={schoolOrigin}
                  onChange={(e) => setSchoolOrigin(e.target.value)}
                />
              </div>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Nama Orangtua/Wali<span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  type='text'
                  placeholder='Nama Orangtua/Wali'
                  name='guardianName'
                  value={guardianName}
                  onChange={(e) => setGuardianName(e.target.value)}
                />
              </div>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Nomor HP Orangtua/Wali<span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  type='text'
                  placeholder='Nomor HP Orangtua/Wali'
                  name='guardianPhone'
                  value={guardianPhone}
                  onChange={(e) => setGuardianPhone(e.target.value)}
                />
              </div>
              <div className='flex flex-col justify-between w-full mb-3 lg:flex-row'>
                <label className='w-56 mr-2 '>
                  Email Orangtua/Wali<span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full py-1 pl-2 text-sm bg-transparent border-gray-500 rounded-lg outline-none lg:w-72 border-1'
                  type='text'
                  placeholder='Email Orangtua/Wali'
                  name='guardianEmail'
                  value={guardianEmail}
                  onChange={(e) => setGuardianEmail(e.target.value)}
                />
              </div>
              <p className='w-full max-w-lg mb-5 text-sm italic lg:mb-0'>
                *Mohon pastikan untuk mengisi nomor telepon dan alamat email yang valid untuk menerima informasi proses
                pendaftaran selanjutnya.
              </p>
              <button
                type='button'
                onClick={handleConfirmation}
                className='self-center px-5 text-base font-bold bg-blue-900 rounded-lg lg:self-end lg:text-lg text-gray-50'>
                Daftar
              </button>
            </form>
          </div>
          <div className='flex flex-col items-center justify-center w-full max-w-lg'>
            <div className='mb-3'>
              <Image alt='Pamardi Yuwana Bhakti' src={Logo} width={175} height={175} />
            </div>
            <h3 className='text-base text-center lg:text-2xl'>SMP PAMARDI YUWANA BHAKTI</h3>
            <h1 className='py-2 mb-10 font-serif text-4xl font-bold text-center lg:text-6xl'>
              Educating Future Leaders
            </h1>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Admission;
