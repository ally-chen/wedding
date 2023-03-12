import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageCarousel from '../component/ImageCarousel';
import pic1 from '../images/photo/s1-1.webp';
import pic2 from '../images/photo/s1-2.webp';
import pic3 from '../images/photo/s1-3.webp';
import pic3_2 from '../images/photo/s1-3-2.webp';
import pic4 from '../images/photo/s1-4.webp';
import pic5 from '../images/photo/s1-5.webp';
import pic5_2 from '../images/photo/s1-6.webp';
import pic5_3 from '../images/photo/s1-7.webp';
import pic5_4 from '../images/photo/s1-8.webp';
import pic6 from '../images/photo/s2-1.webp';
import pic7 from '../images/photo/s2-2.webp';
import pic7_2 from '../images/photo/s2-2-2.webp';
import pic8 from '../images/photo/s2-3.webp';
import pic9 from '../images/photo/s2-4.webp';
import pic10 from '../images/photo/s2-5.webp';
import pic11 from '../images/photo/s2-6.webp';
import pic12 from '../images/photo/s2-7.webp';
import pic13 from '../images/photo/s2-8.webp';
import pic14 from '../images/photo/s3-1.webp';
import pic14_2 from '../images/photo/s3-1-2.webp';
import pic15 from '../images/photo/s3-2.webp';
import pic16 from '../images/photo/s3-3.webp';
import pic17 from '../images/photo/s3-4.webp';
import pic17_2 from '../images/photo/s3-4-1.webp';
import pic17_3 from '../images/photo/s3-4-2.webp';
import pic18 from '../images/photo/s3-5.webp';
import pic19 from '../images/photo/s3-6.webp';
import pic20 from '../images/photo/s3-7.webp';
import pic21 from '../images/photo/s3-8.webp';
import pic22 from '../images/photo/s3-9.webp';
import pic23 from '../images/photo/s4-1.webp';
import pic24 from '../images/photo/s4-2.webp';

const Gallery = () => {
  const imgArray = [
    { url: pic1, position: 'center bottom' },
    { url: pic2, position: 'center bottom' },
    { url: pic3, position: 'center bottom' },
    { url: pic3_2, position: 'center bottom' },
    { url: pic4, position: 'center bottom' },
    { url: pic5 },
    { url: pic5_2 },
    { url: pic5_3 },
    { url: pic5_4, position: 'center top' },
    { url: pic6, position: 'center top' },
    { url: pic7, position: 'center 20%' },
    { url: pic7_2, position: 'center 20%' },
    { url: pic8 },
    { url: pic9, position: '30% center' },
    { url: pic10, position: '30% center' },
    { url: pic11, position: '40% center' },
    { url: pic12 },
    { url: pic13, position: 'center 70%' },
    { url: pic14 },
    { url: pic14_2, position: '45% center' },
    { url: pic15, position: '60% center' },
    { url: pic16 },
    { url: pic17 },
    { url: pic17_2 },
    { url: pic17_3 },
    { url: pic18 },
    { url: pic19 },
    { url: pic20, position: 'center 35%' },
    { url: pic22, position: 'center 30%' },
    { url: pic21, position: 'center 35%' },
    { url: pic23 },
    { url: pic24 },
  ];
  return (
    <ImageCarousel
      title="Prewedding"
      imgs={imgArray}
    />
  );
};

export default Gallery;