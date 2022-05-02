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
        <p className='text-base italic leading-5 text-center lg:leading-relaxed lg:mb-5 lg:text-lg lg:text-left'>
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem eos officia quo vel adipisci, molestias
          qui eveniet dolorem neque veritatis tempora nulla. Vitae beatae dolores maxime sed. Esse quis libero sed,
          magnam facilis vero totam et vitae, beatae, voluptate enim eius! Ab quos qui maxime unde commodi praesentium,
          aut blanditiis explicabo repellendus, esse voluptatibus corporis impedit quod quisquam autem maiores nam nobis
          aliquid? Officia quasi reiciendis maiores repellat rerum iure sit tenetur, natus, velit dolor atque doloremque
          quae quos?&rdquo;
        </p>
        <p className='hidden font-serif text-xs italic text-blue-600 lg:text-lg lg:block'>
          - Kepala Sekolah SMP Pamardi Yuwana Bhakti
        </p>
      </div>
    </section>
  );
};

export default PrincipalMessage;
