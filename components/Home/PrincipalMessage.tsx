import React, { Fragment } from 'react';
import Image from 'next/image';
import Principal from '../../assets/images/principal.jpg';

const PrincipalMessage: React.FC = () => {
  return (
    <Fragment>
      <div className='mr-5 min-w-max'>
        <Image src={Principal} alt='Principal' width={200} height={200} />
      </div>
      <div className='flex flex-col items-start w-10/12'>
        <p className='mb-5 text-lg italic leading-relaxed'>
          &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem eos officia quo vel adipisci, molestias
          qui eveniet dolorem neque veritatis tempora nulla. Vitae beatae dolores maxime sed. Esse quis libero sed,
          magnam facilis vero totam et vitae, beatae, voluptate enim eius! Ab quos qui maxime unde commodi praesentium,
          aut blanditiis explicabo repellendus, esse voluptatibus corporis impedit quod quisquam autem maiores nam nobis
          aliquid? Officia quasi reiciendis maiores repellat rerum iure sit tenetur, natus, velit dolor atque doloremque
          quae quos?&rdquo;
        </p>
        <p className='text-lg font-bold'>Kepala Sekolah SMP Pamardi Yuwana Bhakti</p>
      </div>
    </Fragment>
  );
};

export default PrincipalMessage;
