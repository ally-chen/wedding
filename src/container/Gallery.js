import styled from 'styled-components';
import pic1 from '../images/photo/01.webp';
import pic2 from '../images/photo/02.webp';
import pic3 from '../images/photo/03.webp';
import pic4 from '../images/photo/04.webp';
import pic5 from '../images/photo/05.webp';
import pic6 from '../images/photo/06.webp';
import pic7 from '../images/photo/07.webp';
import pic8 from '../images/photo/08.webp';
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
&:before{
  content: '';
  padding-bottom: 100%;
  display: block;
  width: 100%;
}
`;

const Gallery = () => {
  const imgArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  return (
    <div>
      <Title>Gallery</Title>
      <PhotoWrapper>
        {imgArray.map((n) => (
          <Photo style={{backgroundImage: `url(${n})`}} />
        ))}
      </PhotoWrapper>
    </div>
  );
};

export default Gallery;