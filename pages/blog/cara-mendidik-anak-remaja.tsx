import Image from 'next/image';
import Head from 'next/head';
import Parenting from '../../assets/images/Articles/Parenting.png';
import ArticleWrapper from '../../components/Articles/ArticleWrapper';

const ArticleBody = () => {
  return (
    <ArticleWrapper>
      <Head>
        <title>Cara Mendidik Anak Remaja</title>
        <meta name='description' content='Cara Mendidik Anak Remaja' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col'>
        <h1 className='mb-3 font-serif text-lg font-bold text-blue-900 border-b-2 border-yellow-300 lg:border-b-4 lg:pb-2 lg:mb-8 lg:text-3xl'>
          Cara Mendidik Anak Remaja
        </h1>
        <Image alt='Article' src={Parenting} width={1270} height={500} objectFit='cover' />
        <div className='flex flex-col items-start justify-between w-full mb-4 lg:mb-10 lg:pt-2 lg:items-center lg:flex-row'>
          <div className='mb-2 lg:mb-0'>
            <p className='font-serif text-xs italic text-gray-500 lg:text-base'>
              Diterbitkan pada {new Date('2022-05-23').toLocaleDateString()}
            </p>
            <p className='font-serif text-xs italic text-gray-500 lg:text-base'>Ditulis oleh anonymous</p>
          </div>
          <div className='flex flex-wrap items-center justify-between lg:flex-nowrap '>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              PARENTING
            </span>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              PERKEMBANGAN ANAK
            </span>
          </div>
        </div>
        <div className='mb-5'>
          <p className='mb-2'>
            Perkembangan setiap anak tentunya tidak bisa disamaratakan. Hal ini karena remaja mempunyai perkembangan
            emosi serta kognitif yang berbeda. Dikutip dari{' '}
            <a href='https://www.kidshealth.org/en/parents/teen-depression.html' target='_blank' rel='noreferrer'>
              Kids Health
            </a>
            , masa perkembangan remaja menjadi hal yang cukup menantang bagi keluarga karena ada kemungkinan terjadinya
            pergolakan. Hubungan anak dengan orangtua pun bisa saja berubah karena ada perdebatan saat anak berada di
            fase ini.
          </p>
          <p>
            Namun, sudah menjadi hal yang wajib pula bagi orangtua memberikan pengertian mengenai nilai-nilai kehidupan
            untuk bekalnya kelak. Walaupun akan ada fase anak sulit untuk dihadapi dan diajak berkomunikasi, Anda perlu
            mengerti karena memang ini adalah masa-masa anak bertumbuh. Adapun beberapa cara mendidik remaja yang bisa
            dilakukan orangtua, seperti:
          </p>

          <ol className='pl-5 list-decimal'>
            <li className='mb-2'>
              <strong>Jadilah pendengar yang baik</strong>
              <p>
                Di usia remaja biasanya anak mulai mengalami berbagai gejolak dalam dirinya, dari masalah pubertas
                hingga pergaulannya.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Hormati privasi anak</strong>
              <p>
                Orangtua sering kali menganggap urusan anak adalah urusannya juga. Hal ini memang berlaku saat anak
                masih kecil. Akan tetapi, ketika anak beranjak remaja, orangtua perlu memahami bahwa anak mulai memiliki
                privasi yang harus dijaga dan dihormati.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Sepakati aturan-aturan penting</strong>
              <p>
                Menyepakati aturan penting merupakan hal yang perlu dilakukan antara anak dan orangtua. Saat remaja,
                Anda tak lagi bisa mengaturnya dengan mudah.
              </p>
            </li>
            <li className='mb-2'>
              <strong> Jadi teladan yang baik</strong>
              <p>
                Merupakan hal yang wajar saat orangtua memiliki harapan untuk anak-anaknya. Oleh karena itu, beri tahu
                dan beri contoh nyata mengenai harapan Anda padanya.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Berikan motivasi untuk cita-citanya</strong>
              <p>Doronglah anak untuk terus berkembang dan mengeksplorasi diri serta kemampuannya</p>
            </li>
            <li className='mb-2'>
              <strong>Berikan informasi dalam bergaul</strong>
              <p>
                Remaja merupakan usia yang rentan karena di usia ini mereka akan melihat banyak hal di lingkungannya.
                Maka dari itu, Anda perlu memberanikan diri untuk membicarakan tentang pergaulan remaja saat ini.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Sampaikan cara mengelola stres</strong>
              <p>
                Ada berbagai tantangan dan sumber stres yang harus dihadapi setiap orang termasuk remaja. Jika tidak
                dilatih sejak dini, anak akan kewalahan menghadapi stres di masa depan sehingga mentalnya tidak cukup
                kuat.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default ArticleBody;
