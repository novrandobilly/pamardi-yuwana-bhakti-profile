import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleType } from '../../pages';

type LatestNewsProps = {
  article: Array<ArticleType>;
};

const LatestNews: React.FC<LatestNewsProps> = ({ article }) => {
  return (
    <Fragment>
      <div className='flex flex-col w-1/2 space-y-5'>
        <Link passHref href={`/blog/${article[0]._id}`}>
          <div className='w-full transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
            <div className='w-full'>
              <Image
                width={868}
                height={450}
                objectFit='cover'
                alt='News'
                src={article[0].images[0]}
                className='rounded-t-md'
              />
            </div>
            <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
              {article[0].tags.map((tag) => tag.toUpperCase()).join(', ')}
            </h6>
            <h2 className='px-5 py-2 text-xl font-bold'>{article[0].title}</h2>
            <p className='px-5 pt-2 pb-4 text-gray-400'>{new Date(article[0].dateCreated).toLocaleDateString()}</p>
          </div>
        </Link>
        <div className='flex space-x-5'>
          <Link passHref href={`/blog/${article[1]._id}`}>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className=' rounded-t-md'
                  alt='News'
                  src={article[1].images[0]}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
                {article[1].tags.map((tag) => tag.toUpperCase()).join(', ')}
              </h6>
              <h2 className='px-5 py-2 font-bold text-md'>{article[1].title}</h2>
              <p className='px-5 pt-2 pb-4 text-gray-400'>{new Date(article[1].dateCreated).toLocaleDateString()}</p>
            </div>
          </Link>
          <Link passHref href={`/blog/${article[2]._id}`}>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className=' rounded-t-md'
                  alt='News'
                  src={article[2].images[0]}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
                {article[2].tags.map((tag) => tag.toUpperCase()).join(', ')}
              </h6>
              <h2 className='px-5 py-2 font-bold text-md'>{article[2].title}</h2>
              <p className='px-5 pt-2 pb-4 text-gray-400'>{new Date(article[2].dateCreated).toLocaleDateString()}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col-reverse w-1/2 '>
        <Link passHref href={`/blog/${article[3]._id}`}>
          <div className='w-full transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
            <div className='w-full'>
              <Image
                width={868}
                height={450}
                objectFit='cover'
                alt='News'
                src={article[3].images[0]}
                className='rounded-t-md'
              />
            </div>
            <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
              {article[3].tags.map((tag) => tag.toUpperCase()).join(', ')}
            </h6>
            <h2 className='px-5 py-2 text-xl font-bold'>{article[3].title}</h2>
            <p className='px-5 pt-2 pb-4 text-gray-400'>{new Date(article[3].dateCreated).toLocaleDateString()}</p>
          </div>
        </Link>
        <div className='flex mb-5 space-x-5'>
          <Link passHref href={`/blog/${article[4]._id}`}>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className=' rounded-t-md'
                  alt='News'
                  src={article[4].images[0]}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
                {article[4].tags.map((tag) => tag.toUpperCase()).join(', ')}
              </h6>
              <h2 className='px-5 py-2 font-bold text-md'>{article[4].title}</h2>
              <p className='px-5 pt-2 pb-4 text-gray-400'>{new Date(article[4].dateCreated).toLocaleDateString()}</p>
            </div>
          </Link>
          <Link passHref href={`/blog/${article[5]._id}`}>
            <div className='w-1/2 transition-all rounded-md shadow-md cursor-pointer hover:shadow-2xl'>
              <div className='w-full'>
                <Image
                  width={400}
                  height={300}
                  objectFit='cover'
                  className=' rounded-t-md'
                  alt='News'
                  src={article[5].images[0]}
                />
              </div>
              <h6 className='px-5 pt-6 pb-2 text-sm italic text-yellow-700'>
                {article[5].tags.map((tag) => tag.toUpperCase()).join(', ')}
              </h6>
              <h2 className='px-5 py-2 font-bold text-md'> {article[5].title}</h2>
              <p className='px-5 pt-2 pb-4 text-gray-400'>{new Date(article[5].dateCreated).toLocaleDateString()}</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestNews;
