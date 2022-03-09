import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
import { Title } from '../style';

const PhotoWrapper = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 30px;
padding: 0px;
> * {
  flex-basis: calc(50% - 20px);
  margin: 10px;
}
@media (min-width: 768px) {
  padding: 30px 20px;
    > * {
    flex-basis: calc(33% - 40px);
    max-width: 360px;
    margin: 20px;
  }
}
`;
const Photo = styled.figure`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 3px 2px 10px 0px hsl(0deg 0% 0% / 15%);
border: 6px solid #fff;
border-radius: 5px;
cursor: pointer;
&:before{
  content: '';
  padding-bottom: 100%;
  display: block;
  width: 100%;
}
`;

const Mask = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
z-index: 5;
background-color: rgba(0, 0, 0, 0.6);
`;

const CarouselWrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
.carousel-root {
  position: relative;
  width: 100%;
}
.carousel .control-dots {
  position: fixed;
}
.carousel .slide img {
  width: auto;
  max-height: 100vh;
  max-width: 100%;
}
`;

const BtnClose = styled.button`
background: none;
border: 0;
outline: none;
position: absolute;
top: 20px;
right: 20px;
z-index: 1;
cursor: pointer;
height: 40px;
padding: 0;
@media (min-width: 768px) {
  right: 60px;
}
&:before, &:after{
  height: 1px;
  width: 40px;
  content: '';
  background: #fff;
  display: block;
}
&:before{
  transform: rotate(45deg);
}
&:after{
  transform: rotate(-45deg);
}
`;

const Gallery = () => {
  const [selectSlide, setSelectSlide] = React.useState(null);
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
    <div>
      <Title>Gallery</Title>
      <PhotoWrapper>
        {imgArray.map((n, i) => (
          <Photo
            key={n.url}
            onClick={() => setSelectSlide(i)}
            style={{backgroundImage: `url(${n.url})`, backgroundPosition: n.position || 'center'}}
          />
        ))}
      </PhotoWrapper>
      {selectSlide !== null && (
        <Mask>
          <BtnClose onClick={() => setSelectSlide(null)} />
          <CarouselWrapper>
            <Carousel showArrows={true} showThumbs={false} dynamicHeight={true} selectedItem={selectSlide} emulateTouch={true}>
              {imgArray.map((n) => (
                <div key={n.url}>
                  <img src={n.url} alt='' />
                </div>
              ))}
            </Carousel>
          </CarouselWrapper>
        </Mask>
      )}
    </div>
  );
};

export default Gallery;