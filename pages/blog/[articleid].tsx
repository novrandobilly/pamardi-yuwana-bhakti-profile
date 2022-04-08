import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MathCup from '../../assets/images/Article/MathCup.jpg';

const ArticlePost: React.FC = () => {
  return (
    <div className='flex items-start w-full mx-auto max-w-8xl'>
      <div className='w-9/12 pr-10'>
        <p className='mb-10 italic hover:text-yellow-300'>
          <Link href='/'>&lt; Kembali ke beranda</Link>
        </p>
        <h1 className='pb-2 mb-8 font-serif text-3xl font-bold text-blue-900 border-b-4 border-yellow-300'>
          Article Title
        </h1>
        <Image alt='Article' src={MathCup} height={400} objectFit='cover' />
        <div className='flex items-center justify-between w-full pt-2 mb-10'>
          <div>
            <p className='font-serif italic text-gray-500'>Diterbitkan pada April 2022</p>
            <p className='font-serif italic text-gray-500'>Ditulis oleh J.R.R Tolkien</p>
          </div>
          <div className='flex items-center justify-between '>
            <span className='px-4 mx-1 font-bold text-gray-100 bg-blue-900 rounded-full'>MATEMATIKA</span>
            <span className='px-4 mx-1 font-bold text-gray-100 bg-blue-900 rounded-full'>KOMPETISI</span>
            <span className='px-4 mx-1 font-bold text-gray-100 bg-blue-900 rounded-full'>PRESTASI</span>
          </div>
        </div>
        <p className='w-full mt-5 mb-5 text-xl font-bold text-left text-gray-800'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptas blanditiis enim recusandae. Sunt,
          tenetur? Voluptatibus officiis similique, blanditiis nobis architecto sapiente quam ab optio quisquam rerum
          maiores odio, a eaque tempore inventore aliquam.
        </p>
        <p className='w-full mt-5 mb-5 text-lg text-left text-gray-800'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius minus, quasi rem, reprehenderit iure cumque
          commodi sit perspiciatis quisquam neque ipsa! Nam animi provident iusto, aperiam quos accusamus non enim
          soluta dignissimos, tempore cupiditate. Molestiae enim, aliquam soluta odit molestias odio. Saepe enim eum
          nemo assumenda molestias et est suscipit, deleniti aspernatur nesciunt eveniet voluptatum cumque, doloremque
          ratione incidunt omnis. Ad alias adipisci deserunt autem iusto deleniti unde ea repellat distinctio
          perspiciatis. Velit quasi laboriosam modi, sapiente reiciendis odit enim, non labore quod ut perferendis autem
          esse, eos error. Eos cum animi et? Deleniti nihil ipsum quo, fugiat libero labore, suscipit hic veritatis,
          voluptates quaerat dolorum quam dicta omnis eaque laborum! Minus iste perferendis quis harum, ea dolore.
        </p>
        <p className='w-full mt-5 mb-5 text-lg text-left text-gray-800'>
          Sequi esse quasi repudiandae delectus possimus quia, itaque voluptas debitis, quae explicabo expedita ratione
          necessitatibus, iure molestiae. Veniam eveniet dolorum illum odit libero cupiditate laboriosam. Asperiores
          voluptate aliquam nam dolor magnam illo ex voluptas, dolores labore repellat, necessitatibus distinctio
          laboriosam fugiat neque maxime! Sed ullam delectus mollitia doloremque quod! Molestiae error possimus vero
          rerum? Eum vitae aperiam dolores maxime distinctio iusto ipsam iure corporis non saepe ratione voluptatem
          commodi velit, perspiciatis aut mollitia cupiditate cumque quod eligendi. Dolorem sit inventore unde, maxime
          omnis ipsa illum ut atque, quo quia laborum nobis iure, aliquid quidem. Sint, blanditiis expedita? Architecto
          laborum eaque exercitationem repellendus eius hic odio, fugit, voluptatem nulla quod similique ipsa, quae amet
          perspiciatis ut distinctio fuga quibusdam animi corrupti nesciunt laudantium! Cum explicabo praesentium totam
          aspernatur autem iusto veritatis nemo id earum enim ratione a optio, adipisci est error dolore nihil sunt
          illum facilis fugiat.
        </p>
        <p className='w-full mt-5 mb-5 text-lg text-left text-gray-800'>
          Rem dolores placeat laboriosam porro eligendi autem, natus mollitia obcaecati deleniti impedit perferendis,
          distinctio quo itaque accusamus asperiores at debitis tempore recusandae iusto dolorum, tenetur fugit odio
          reiciendis vel! Voluptatem explicabo non ab libero velit ipsum ipsa architecto praesentium. Distinctio vero ex
          ut optio temporibus culpa, ipsam suscipit itaque voluptatibus, reiciendis repudiandae nam, quam qui totam eos
          unde esse eius. Aliquid earum obcaecati cupiditate dolorum rerum architecto eos recusandae quam perspiciatis
          quasi cum facere, nulla praesentium dolorem, qui natus nemo maxime amet? Nemo dolore accusamus totam impedit
          inventore. Distinctio quo unde enim laudantium rerum consequuntur tempora qui et corrupti est ab doloribus non
          earum accusantium fugiat aperiam quibusdam quidem quis, molestias deleniti reiciendis debitis? Laborum quae
          obcaecati odio nisi incidunt blanditiis, ex quos. Harum magni consectetur, nam facere mollitia labore
          laboriosam iste expedita soluta obcaecati aspernatur maxime debitis laudantium esse fugiat, inventore
          doloribus, qui voluptatem?
        </p>
        <p className='w-full mt-5 mb-5 text-lg text-left text-gray-800'>
          Velit numquam, earum suscipit necessitatibus libero ratione in tempora, voluptatem unde molestiae obcaecati
          nemo id voluptatum omnis perferendis quae quam! Sint doloribus, necessitatibus pariatur quam voluptatum
          similique eaque sapiente nam blanditiis nemo dolorum consequuntur harum velit iure vitae recusandae adipisci
          inventore odit sequi error. Atque, nostrum sed? A rerum cupiditate nostrum, voluptatibus ab provident ipsum
          aliquam? Qui voluptatibus harum alias eius illo sapiente dicta provident? Asperiores expedita aspernatur amet
          ipsam ab optio deserunt saepe quod laboriosam consectetur, harum atque inventore exercitationem voluptates ea
          laudantium voluptatem repellendus quam omnis laborum, repudiandae praesentium dolores velit ducimus.
        </p>
        <p className='w-full mt-5 mb-5 text-lg text-left text-gray-800'>
          Dolor iure ut incidunt, eligendi voluptatem cumque id nam tempore reiciendis maiores ipsa laboriosam enim quas
          aperiam? Distinctio, autem. Odio possimus cum, sit iste porro molestiae reiciendis voluptatibus cupiditate
          sint provident tenetur? Doloremque, temporibus impedit mollitia tenetur reiciendis rerum iusto illum culpa,
          accusamus nulla maiores. Illum aut quo qui architecto, minus, tempore veritatis non culpa voluptate voluptatum
          exercitationem quis saepe natus magnam vel aperiam. Numquam optio molestias minima dolor quasi. Hic in
          consequatur quam excepturi quasi quas totam dolor, quod officiis consectetur eius dicta cupiditate labore
          aspernatur corrupti laboriosam pariatur at maiores id minima? Nostrum, at minima?
        </p>
      </div>
      <div className='w-3/12 p-4 bg-yellow-200 rounded-lg mt-36'>
        <h2 className='mb-2 text-2xl font-bold text-blue-900'>Artikel lainnya</h2>
        <ul className='pl-6 italic list-disc'>
          <li className='mb-3'>
            <Link href='/blog/2'>Judul Artikel 2</Link>
          </li>
          <li className='mb-3'>
            <Link href='/blog/3'>Judul Artikel 3</Link>
          </li>
          <li className='mb-3'>
            <Link href='/blog/4'>Judul Artikel 4</Link>
          </li>
          <li className='mb-3'>
            <Link href='/blog/5'>Judul Artikel 5</Link>
          </li>
          <li className='mb-3'>
            <Link href='/blog/6'>Judul Artikel 6</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArticlePost;
