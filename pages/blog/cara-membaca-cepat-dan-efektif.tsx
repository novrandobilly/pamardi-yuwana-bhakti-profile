import Image from 'next/image';
import Head from 'next/head';
import Reading from '../../assets/images/Articles/Reading.png';
import ArticleWrapper from '../../components/Articles/ArticleWrapper';

const ArticleBody = () => {
  return (
    <ArticleWrapper>
      <Head>
        <title>Cara Membaca Cepat Dan Efektif</title>
        <meta name='description' content='Cara Membaca Cepat Dan Efektif' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col'>
        <h1 className='mb-3 font-serif text-lg font-bold text-blue-900 border-b-2 border-yellow-300 lg:border-b-4 lg:pb-2 lg:mb-8 lg:text-3xl'>
          Cara Membaca Cepat Dan Efektif
        </h1>
        <Image alt='Article' src={Reading} width={1270} height={500} objectFit='cover' />
        <div className='flex flex-col items-start justify-between w-full mb-4 lg:mb-10 lg:pt-2 lg:items-center lg:flex-row'>
          <div className='mb-2 lg:mb-0'>
            <p className='font-serif text-xs italic text-gray-500 lg:text-base'>
              Diterbitkan pada {new Date('2022-05-23').toLocaleDateString()}
            </p>
            <p className='font-serif text-xs italic text-gray-500 lg:text-base'>Ditulis oleh anonymous</p>
          </div>
          <div className='flex flex-wrap items-center justify-between lg:flex-nowrap '>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              MEMBACA
            </span>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              HOBI
            </span>
            <span className='px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0'>
              WAWASAN
            </span>
          </div>
        </div>
        <div className='mb-5'>
          <p className='mb-2'>
            Halo semuanya! Di sini ada yang suka membaca buku kah? Pastinya pada suka dong ya. Nah, pernah gak sih
            kalian merasa kok baca buku tuh lama dan pengen tahu cara baca cepat? Di tulisan kali ini ada beberapa tips
            yang bisa kalian gunakan untuk meningkatkan kecepatan membaca. Silakan disimak, ya!
          </p>

          <ol className='pl-5 list-decimal'>
            <li className='mb-2'>
              <strong>Tentukan Target Baca Cepat</strong>
              <p>
                Hal pertama yang perlu kamu lakukan adalah memasang target. Tujuan dari memasang target adalah supaya
                kamu merasa memiliki tanggung jawab dalam sehari harus membaca berapa halaman kah misalnya atau malah
                berapa buku dalam tempo satu bulan. Dengan adanya perasaan bertanggungjawab, kamu bisa mendapatkan
                dorongan untuk terus baca cepat dan tidak berhenti melakukannya. Jangan lupa untuk membuat target yang
                realistis. Artinya, target yang kamu buat tidak mengganggu kegiatanmu yang lainnya seperti belajar dan
                mengerjakan PR.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Manfaatkan Pembatas Buku</strong>
              <p>
                Dewasa ini, beberapa penerbit biasanya menyelipkan pembatas buku dalam buku yang mereka terbitkan.
                Biasanya, pembatas yang disisipkan ini memiliki tema yang matching dengan buku yang kamu baca.
                Manfaatkanlah pembatas tersebut dengan baik. Misalnya, kamu tidak dapat menyelesaikan bacaan suatu buku
                dalam sekali duduk. Gunakanlah pembatas untuk memberi tanda supaya kamu tidak perlu mencari di halaman
                berapa kamu terakhir, sehingga membantumu dapat baca cepat.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Hindari Membaca Setiap Kata </strong>
              <p>
                Sering kali yang membuat proses membaca buku menjadi lama adalah karena kamu membaca setiap kata yang
                ada dalam buku tersebut. Membaca setiap kata sebenarnya bukanlah merupakan suatu hal yang buruk hanya
                saja dapat memakan waktu lebih lama. Buat yang sudah terbiasa membaca per kata mungkin akan mengalami
                kesulitan untuk meninggalkan kebiasaan tersebut. Sulit bukan berarti mustahil karenanya kamu tetap perlu
                mencobanya supaya target bisa baca cepat dapat tercapai.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Jangan Mengulang yang Sudah Dibaca </strong>
              <p>
                Selain membaca per kata, ada hal lain yang bisa membuat kegiatan membaca buku berlangsung lama yaitu
                ketika kamu mengulang apa yang sudah kamu baca. Hal ini biasanya terjadi karena kamu belum memahami apa
                yang tadi kamu baca. Untuk menghindari hal tersebut sebenarnya kamu perlu menambah jam terbang
                membacamu. Dengan semakin sering membaca seharusnya kemampuanmu memahami bacaan dapat terasah sehingga
                kamu tidak lagi harus mengulang kalimat karena belum memahami maksudnya.
              </p>
            </li>
            <li className='mb-2'>
              <strong>Buat Ringkasan </strong>
              <p>
                Terlepas dari secepat apa kamu bisa menghabiskan suatu buku, adalah hal yang rasanya kurang tepat jika
                kamu tidak mendapat apa-apa dari buku yang telah kamu baca. Karenanya, ada baiknya kalau kamu membuat
                ringkasan dari apa yang sudah kamu baca. Ringkasan bisa kamu buat di tepi buku di halamannya atau jika
                kamu merasa sayang untuk melakukannya kamu bisa membuat ringkasan di luar buku baik di buku catatan atau
                di gawaimu. Dengan membuat ringkasan, kamu dapat membantu dirimu supaya tidak mudah melupakan apa yang
                sudah kamu dapatkan dari buku yang kamu baca.
              </p>
            </li>
          </ol>

          <p>
            Kurang lebih begitulah cara membaca lebih cepat yang bisa kamu terapkan. Dengan kemampuan baca cepat kamu
            jadi bisa membaca lebih banyak buku dari yang sudah kamu baca selama ini karena memang di luar sana ada
            banyak sekali buku menarik yang patut dibaca. Seperti kata pepatah,{' '}
            <em>too many books but so little time</em>. Namun, dengan berusaha kita bisa kok membaca buku sebanyak yang
            kita bisa. So, selamat membaca!
          </p>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default ArticleBody;
