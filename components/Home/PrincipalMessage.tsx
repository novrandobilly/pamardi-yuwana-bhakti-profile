import React, { Fragment } from 'react';
import Image from 'next/image';
import Principal from '../../assets/images/principal.jpg';

const PrincipalMessage: React.FC = () => {
  return (
    <section className='flex flex-col-reverse items-center px-5 mx-auto mb-10 lg:max-w-8xl lg:justify-evenly lg:items-start lg:flex-row lg:px-10'>
      <p className='font-serif text-xs italic text-blue-600 lg:hidden'>Kepala Sekolah SMP Pamardi Yuwana Bhakti</p>
      <div className='relative mb-2 rounded-full lg:m-0 w-28 h-28 min-w-max lg:w-40 lg:h-40'>
        <Image className='rounded-full' src={Principal} alt='Principal' objectFit='cover' layout='fill' />
      </div>
      <div className='flex flex-col items-start w-full mb-5 lg:ml-5 lg:w-10/12'>
        <p className='mb-5 text-base italic leading-5 text-center lg:leading-relaxed lg:mb-5 lg:text-lg lg:text-left'>
          &ldquo;Puji syukur kepada Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerahNya sehingga website
          SMP Pamardi Yuwana Bhakti ini dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab akan
          setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.
        </p>
        <p className='mb-5 text-base italic leading-5 text-center lg:leading-relaxed lg:mb-5 lg:text-lg lg:text-left'>
          Kami sadar sepenuhnya dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu
          pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru,
          orangtua maupun masyarakat, sehingga kami berusaha mewujudkan hal tersebut semaksimal mungkin. Semoga dengan
          adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu
          pengetahuan dan informasi seputar SMP Pamardi Yuwana Bhakti.
        </p>
        <p className='mb-5 text-base italic leading-5 text-center lg:leading-relaxed lg:mb-5 lg:text-lg lg:text-left'>
          Besar harapan kami, semoga sarana ini dapat memberi manfaat bagi semua pihak yang ada dilingkup pendidikan dan
          pemerhati pendidikan secara khusus bagi SMP Pamardi Yuwana Bhakti. Akhirnya kami mengharapkan masukan dari
          berbagai pihak untuk website ini agar kami terus belajar dan meng-update diri, sehingga tampilan, isi dan mutu
          website akan terus berkembang dan lebih baik nantinya.
        </p>
        <p className='mb-5 text-base italic leading-5 text-center lg:leading-relaxed lg:mb-5 lg:text-lg lg:text-left'>
          Akhir kata, tak lupa saya ucapkan terima kasih kepada Yayasan Pamardi Yuwana Bhakti atas dukungannya, terima
          kasih kepada Tim pengelola web yang telah bekerja keras demi terwujudnya web ini, serta seluruh guru, karyawan
          dan siswa/i SMP Pamardi Yuwana Bhakti, semoga website sekolah ini menjadi lebih berguna dan bermanfaat Terima
          kasih atas kerjasamanya, maju terus untuk mencapai SMP Pamardi Yuwana Bhakti yang lebih baik. &rdquo;
        </p>
        <p className='hidden font-serif text-xs italic text-blue-600 lg:text-lg lg:block'>
          - Kepala Sekolah SMP Pamardi Yuwana Bhakti
        </p>
      </div>
    </section>
  );
};

export default PrincipalMessage;
