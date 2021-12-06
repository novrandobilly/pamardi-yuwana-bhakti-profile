import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Ceremony from '../../assets/images/Ceremony.jpg';
import Basket from '../../assets/images/Basket.jpg';
import Chess from '../../assets/images/Chess.jpg';
import Image from 'next/image';

const HeaderBanner = () => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} emulateTouch showThumbs={false} stopOnHover={false}>
      <Image alt='Banner 1' src={Ceremony} />
      <Image alt='Banner 2' src={Basket} />
      <Image alt='Banner 3' src={Chess} />
    </Carousel>
  );
};

export default HeaderBanner;
