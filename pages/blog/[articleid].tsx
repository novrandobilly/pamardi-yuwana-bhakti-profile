import React, { Fragment } from 'react';
import next, { GetStaticProps, GetStaticPaths } from 'next';
import { connectToDatabase } from '../../lib/db';
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

type SingleArticleType = {
  _id: string;
  title: string;
  author: string;
  dateCreated: string;
  tags: string[];
  content: string;
  images: string[];
  summary: string;
};

const ArticlePost: React.FC<{
  article: SingleArticleType;
  prevArticleId: string;
  nextArticleId: string;
  allArticleExceptCurrent: Array<SingleArticleType>;
}> = ({ article, prevArticleId, nextArticleId, allArticleExceptCurrent }) => {
  return (
    <Fragment>
      <Head>
        <title>{article.title}</title>
        <meta name='description' content={article.summary} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col items-start w-full px-5 pt-4 mx-auto lg:flex-row max-w-8xl lg:px-10'>
        <div className='lg:w-9/12 lg:pr-10'>
          <p className='mb-5 italic hover:text-yellow-300'>
            <Link href='/'>&lt; Kembali ke beranda</Link>
          </p>
          <h1 className='mb-3 font-serif text-lg font-bold text-blue-900 border-b-2 border-yellow-300 lg:border-b-4 lg:pb-2 lg:mb-8 lg:text-3xl'>
            {article.title}
          </h1>
          <Image alt='Article' src={article.images[0]} width={1270} height={600} objectFit='cover' />
          <div className='flex flex-col items-start justify-between w-full mb-4 lg:mb-10 lg:pt-2 lg:items-center lg:flex-row'>
            <div className='mb-2 lg:mb-0'>
              <p className='font-serif text-xs italic text-gray-500 lg:text-base'>
                Diterbitkan pada {new Date(article.dateCreated).toLocaleDateString()}
              </p>
              <p className='font-serif text-xs italic text-gray-500 lg:text-base'>Ditulis oleh {article.author}</p>
            </div>
            <div className='flex flex-wrap items-center justify-between lg:flex-nowrap '>
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <p className='w-full mt-5 mb-5 text-base font-bold text-left text-gray-800 lg:text-lg'>{article.summary}</p>
          {article.content.split('\n').map((paragraph, index) => (
            <p className='w-full mt-5 mb-5 font-serif text-base text-left text-gray-800 ' key={index}>
              {paragraph}
            </p>
          ))}

          <div className='flex justify-between w-full'>
            <Link passHref href={`/blog/${prevArticleId}`}>
              <p className='mb-5 text-sm italic text-left text-yellow-500 cursor-pointer lg:my-5 lg:text-base'>
                &lt;&lt;Previous
              </p>
            </Link>
            <Link passHref href={`/blog/${nextArticleId}`}>
              <p className='mb-5 text-sm italic text-left text-yellow-500 cursor-pointer lg:my-5 lg:text-base'>
                Next&gt;&gt;
              </p>
            </Link>
          </div>
        </div>
        <div className='w-full p-4 mb-5 bg-yellow-200 rounded-lg lg:w-3/12 lg:mt-36'>
          <h2 className='mb-2 text-base font-bold text-blue-900 lg:text-2xl'>Artikel lainnya</h2>
          <ul className='pl-6 italic list-disc'>
            {allArticleExceptCurrent.map((article, index) => (
              <li key={index} className='mb-2 leading-5 '>
                <Link href={`/blog/${article._id}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default ArticlePost;

export const getStaticProps: GetStaticProps = async (context) => {
  const articleid = context.params?.articleid;
  const client = await connectToDatabase();
  const db = client.db();

  let data;
  let allArticles;
  try {
    data = await db.collection('articles').findOne({ _id: new ObjectId(articleid?.toString()) });
    allArticles = await db.collection('articles').find().toArray();
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const currentIndex = allArticles.findIndex((article) => article._id.toString() === articleid);
  const prevArticleIndex = currentIndex - 1 < 0 ? allArticles.length - 1 : currentIndex - 1;
  const nextArticleIndex = currentIndex + 1 > allArticles.length - 1 ? 0 : currentIndex + 1;
  const prevArticleId = allArticles[prevArticleIndex]._id.toString();
  const nextArticleId = allArticles[nextArticleIndex]._id.toString();
  const allDataExceptCurrent = allArticles.filter((article, index) => index !== currentIndex);
  const allArticleExceptCurrent = JSON.parse(JSON.stringify(allDataExceptCurrent));
  const article = JSON.parse(JSON.stringify(data));

  return {
    props: { article, prevArticleId, nextArticleId, allArticleExceptCurrent },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await connectToDatabase();
  const db = client.db();
  const articles = await db.collection('articles').find().sort({ dateCreated: -1 }).limit(6).toArray();
  const paths = articles.map((article) => ({ params: { articleid: article._id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
