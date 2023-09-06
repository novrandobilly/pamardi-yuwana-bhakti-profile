import Image from 'next/image';
import Head from 'next/head';
import Play from '../../assets/images/Articles/Play.png';
import ArticleWrapper from '../../components/Articles/ArticleWrapper';

const ArticleBody = () => {
  return (
    <ArticleWrapper>
      <Head>
        <title>Permainan Yang Mendorong Perkembangan Anak Dengan Autisme</title>
        <meta name="description" content="Permainan Yang Mendorong Perkembangan Anak Dengan Autisme" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <h1 className="mb-3 font-serif text-lg font-bold text-blue-900 border-b-2 border-yellow-300 lg:border-b-4 lg:pb-2 lg:mb-8 lg:text-3xl">
          Permainan Yang Mendorong Perkembangan Anak Dengan Autisme
        </h1>
        <Image alt="Article" src={Play} width={1270} height={500} objectFit="cover" />
        <div className="flex flex-col items-start justify-between w-full mb-4 lg:mb-10 lg:pt-2 lg:items-center lg:flex-row">
          <div className="mb-2 lg:mb-0">
            <p className="font-serif text-xs italic text-gray-500 lg:text-base">
              Diterbitkan pada {new Date('2022-05-23').toLocaleDateString()}
            </p>
            <p className="font-serif text-xs italic text-gray-500 lg:text-base">Ditulis oleh anonymous</p>
          </div>
          <div className="flex flex-wrap items-center justify-between lg:flex-nowrap ">
            <span className="px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0">
              PERMAINAN
            </span>
            <span className="px-4 mx-1 mb-1 text-xs font-bold text-gray-100 bg-blue-900 rounded-full lg:text-base lg:mb-0">
              PERKEMBANGAN ANAK
            </span>
          </div>
        </div>
        <div className="mb-5">
          <p className="mb-2">
            Saat memilih mainan untuk anak dengan Autisme, Ayah dan Ibu dapat menyesuaikan dengan kemampuan perkembangan
            anak daripada usianya.
          </p>

          <ol className="pl-5 list-decimal">
            <li className="mb-2">
              <strong>Menyusun gambar &#40;puzzle&#41;</strong>
              <p>Bermain puzzle merupakan cara mudah dan menyenangkan untuk melatih fungsi kognitif anak.</p>
            </li>
            <li className="mb-2">
              <strong>Balok Susun</strong>
              <p>
                Permainan dasar ini dikenal luas untuk merangsang pertumbuhan anak, terutama kreativitas,kemampuan
                berfikir secara runtut, serta keluwesan bersosialisasi
              </p>
            </li>
            <li className="mb-2">
              <strong>Menggambar dan mewarnai</strong>
              <p>
                Kedua permainan ini merupakan cara ampuh untuk mengenalkan perbedaan warna pada anak serta melatih
                kemampuan motoric halusnya
              </p>
            </li>
            <li className="mb-2">
              <strong>Kartu bergambar &#40;flash card&#41;</strong>
              <p>
                Permainan ini memiliki manfaat untuk merangsang daya ingat anak untuk mengenal angka, huruf, hewan,
                bunga, bagian tubuh atau hal yang lainnya
              </p>
            </li>
            <li className="mb-2">
              <strong>Lilin Mainan &#40;Plastisin&#41;</strong>
              <p>
                Permainan ini merupakan mainan edukasi yang membantu gerak motoric serta merangsang daya imajinasi dan
                kreativitas anak
              </p>
            </li>
            <li className="mb-2">
              <strong>Lego</strong>
              <p>
                Bermain lego mengajarkan anak berkreasi membuat bangunan dan bentuk. Tidak hanya itu, lego juga membantu
                melatih koordinasi antara mata dan tangan
              </p>
            </li>
            <li className="mb-2">
              <strong>Boneka atau bantal yang lembut</strong>
              <p>
                Boneka empuk dengan bulu yang sangat lembut bisa menemani dan membantu mengendalikan emosi si kecil saat
                tantrum
              </p>
            </li>
          </ol>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default ArticleBody;
