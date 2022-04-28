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

      <div className='flex items-start w-full pt-4 mx-auto max-w-8xl px-14'>
        <div className='w-9/12 pr-10'>
          <p className='mb-5 italic hover:text-yellow-300'>
            <Link href='/'>&lt; Kembali ke beranda</Link>
          </p>
          <h1 className='pb-2 mb-8 font-serif text-3xl font-bold text-blue-900 border-b-4 border-yellow-300'>
            {article.title}
          </h1>
          <Image alt='Article' src={article.images[0]} width={1270} height={600} objectFit='cover' />
          <div className='flex items-center justify-between w-full pt-2 mb-10'>
            <div>
              <p className='font-serif italic text-gray-500'>
                Diterbitkan pada {new Date(article.dateCreated).toLocaleDateString()}
              </p>
              <p className='font-serif italic text-gray-500'>Ditulis oleh {article.author}</p>
            </div>
            <div className='flex items-center justify-between '>
              {article.tags.map((tag, index) => (
                <span key={index} className='px-4 mx-1 font-bold text-gray-100 bg-blue-900 rounded-full'>
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <p className='w-full mt-5 mb-5 text-lg font-bold text-left text-gray-800'>{article.summary}</p>
          {article.content.split('\n').map((paragraph, index) => (
            <p className='w-full mt-5 mb-5 font-serif text-base text-left text-gray-800' key={index}>
              {paragraph}
            </p>
          ))}

          <div className='flex justify-between w-full'>
            <Link passHref href={`/blog/${prevArticleId}`}>
              <p className='mt-5 mb-5 italic text-left text-yellow-500 cursor-pointer text-md'>&lt;&lt;Previous</p>
            </Link>
            <Link passHref href={`/blog/${nextArticleId}`}>
              <p className='mt-5 mb-5 italic text-left text-yellow-500 cursor-pointer text-md'>Next&gt;&gt;</p>
            </Link>
          </div>
        </div>
        <div className='w-3/12 p-4 bg-yellow-200 rounded-lg mt-36'>
          <h2 className='mb-2 text-2xl font-bold text-blue-900'>Artikel lainnya</h2>
          <ul className='pl-6 italic list-disc'>
            {allArticleExceptCurrent.map((article, index) => (
              <li key={index} className='mb-2'>
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
