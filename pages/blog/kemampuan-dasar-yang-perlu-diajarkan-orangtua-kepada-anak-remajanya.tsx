import Image from 'next/image';
import Head from 'next/head';
import Skills from '../../assets/images/Articles/Skills.png';
import ArticleWrapper from '../../components/Articles/ArticleWrapper';

const ArticleBody = () => {
  return (
    <ArticleWrapper>
      <Head>
        <title>Kemampuan Dasar Yang Perlu Diajarkan Orangtua Kepada Anak Remajanya</title>
        <meta name='description' content='Kemampuan Dasar Yang Perlu Diajarkan Orangtua Kepada Anak Remajanya' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col'>
        <h1 className='mb-3 font-serif text-lg font-bold text-blue-900 border-b-2 border-yellow-300 lg:border-b-4 lg:pb-2 lg:mb-8 lg:text-3xl'>
          Kemampuan Dasar Yang Perlu Diajarkan Orangtua Kepada Anak Remajanya
        </h1>
        <Image alt='Article' src={Skills} width={1270} height={500} objectFit='cover' />
        <div className='flex flex-col items-start justify-between w-full mb-4 lg:mb-10 lg:pt-2 lg:items-center lg:flex-row'>
          <div className='mb-2 lg:mb-0'>
            <p className='font-serif text-xs italic text-gray-500 lg:text-base'>
              Diterbitkan pada {new Date('2022-05-23').toLocaleDateString()}
            </p>
            <p className='font-serif text-xs italic text-gray-500 lg:text-base'>Ditulis oleh anonymous</p>
          </div>
          <div className='flex flex-wrap items-center justify-between lg:flex-nowrap '>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              SKILLS
            </span>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              SOFT SKILLS
            </span>
          </div>
        </div>
        <div className='mb-5'>
          <p className='mb-2'>
            Menanamkan nilai-nilai tertentu memang perlu diberikan orangtua sebagai cara mendidik anak remaja. Namun,
            beberapa kemampuan dasar pun tidak kalah penting untuk melatih kemandirian anak di masa depan. Beberapa
            kemampuan dasar yang bisa diajarkan orangtua di antaranya adalah:
          </p>

          <ol className='pl-5 list-decimal'>
            <li className='mb-2'>
              <strong>Menyiapkan makanan sendiri</strong>
              <p>
                Memasuki masa remaja, anak harus mulai mandiri dan melakukan berbagai hal sederhana untuk kebutuhannya
                sendiri. Salah satunya adalah menyiapkan makanan yang juga menjadi salah satu cara mendidik anak remaja.
                Berikan kesempatan pada anak untuk mulai mempelajari bagaimana dasar-dasar memasak. Misalnya seperti
                menanak nasi, menggoreng telur, menumis sayur, dan lain-lain.,
              </p>
            </li>
            <li className='mb-2'>
              <strong>Bertanggung jawab dengan barang pribadi</strong>
              <p>
                Cara mendidik anak remaja lainnya adalah ajarkan anak bertanggung jawab dengan barang pribadi mereka.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Mengatur uang sendiri</strong>
              <p>
                Masa remaja sering kali dikaitkan dengan emosi yang labil dan belum bisa menentukan prioritas, termasuk
                ketika mengelola uang. Ajarkan anak bahwa menabung adalah kewajiban. Dengan begitu, nanti ketika dewasa
                dan sudah bekerja, ia bisa menyisihkan sebagian gajinya untuk ditabung.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Membersihkan rumah</strong>
              <p>
                Kemampuan dasar seperti mencuci piring, menyapu, membersihkan debu, serta merapikan kamar sendiri juga
                menjadi cara mendidik anak remaja. Membuat rumah tetap rapi dan bersih ini juga kemampuan wajib yang
                harus dimiliki anak memasuki masa remaja.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Membawa kendaran dan menggunakan transportasi umum</strong>
              <p>
                Kedua hal ini sama pentingnya sehingga menjadi salah satu cara mendidik anak remaja yang perlu
                diperhatikan orangtua. Biasakan anak untuk berani naik transportasi umum dan paham akan transportasi
                umum di sekitarnya. Berikan pula kesempatan pada anak untuk belajar berkendara mobil atau motor. Supaya
                anak lebih terampil dalam berkendara, Anda harus memberi contoh bagaimana cara mengemudi kendaraan
                dengan baik.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default ArticleBody;
