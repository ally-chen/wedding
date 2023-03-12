import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Footer } from '../style';
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
import qrcode from '../images/qrcode_home.png';

const OverwriteStyle = createGlobalStyle`
@media (max-width: 1023px) {
  .light ${Footer} {
    display: none;
  }
}
`;

const scroll = (h) => keyframes`
  0% {
    top: 50%;
  }
  100% {
    top: -${h}px;
  }
`;

const BoardWrap = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 50%;
top: 0;
z-index: 5;
background-color: #f2f2f2;
@media (min-width: 1024px) {
  left: 60%;
  bottom: 0;
}
`;

const Board = styled.div`
position: absolute;
top: 5%;
right: 5%;
left: 5%;
bottom: 5%;
overflow: hidden;
`;

const QrcodeWrap = styled.div`
position: absolute;
top: 0;
right: 0;
z-index: 2;
background-color: #f2f2f2;
padding: 1em;
color: #202020;
img {
  width: 120px;
  display: block;
  margin-top: 0.25em;
  @media (max-width: 767px) {
    display: none;
  }
}
`;

const MessageList = styled.ul`
  padding: 0 6px;
  margin: 0;
  list-style-type: none;
  color: #202020;
  position: absolute;
  width: 100%;
  left: 0;
  text-align: left;
  animation: ${props => scroll(props.height)} ${props => props.duration}s linear infinite;
`;

const MessageListItem = styled.li`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
`;

const ItemBox = styled.div`
flex: auto;
background: #fff;
border-radius: 6px;
box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
padding: 0.5em;
font-family: 'Helvetica', 'Arial', 'sans-serif';
white-space: pre-wrap;
`;

const Author = styled.div`
text-align: right;
font-size: 14px;
color: #898989;
margin-top: 4px;
`;

const Mask = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 50%;
z-index: 5;
background-color: rgba(0, 0, 0, 0.6);
@media (min-width: 1024px) {
  right: 40%;
  top: 0;
}
`;

const CarouselWrapper = styled.div`
height: 50vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
@media (min-width: 1024px) {
  height: 100vh;
  width: 60vw;
}
.carousel-root {
  position: relative;
  width: 100%;
}
.carousel .control-dots {
  position: fixed;
  width: 100%;
  @media (min-width: 1024px) {
    width: 60%;
  }
}
.carousel .slide img {
  width: auto;
  max-height: 100vh;
  max-width: 100%;
}
`;

const Play = () => {
  const [messages, setMessages] = React.useState([]);
  const [animationConfig, setAnimationConfig] = React.useState({height: 0, duration: 0});
  const containerRef = React.useRef();
  const boardRef = React.useRef();

  const getList = () => {
    fetch('https://script.google.com/macros/s/AKfycbzjkvxIG9r6phnVR8dETCIuJDk7HgYOJ9ifbEWdmHDiwnOtRc5toipJEhcSd7bc9g77gA/exec')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error('不ok!');
      })
      .then((res) => {
        const list = res.data.flat().map((n, i) => {
          let align = 'center';
          const category = i % 3;
          switch (category) {
            case 1:
              align = 'flex-start';
              break;
            case 2:
              align = 'flex-end';
              break;
            default:
              break;
          }
          return { content: n.content, align, name: n.name };
        });
        const shuffleList = list.sort(() => Math.random() - 0.5);
        setMessages(shuffleList)
        console.log(shuffleList);
      })
      .catch(error => {
        alert('出錯了!');
      })
  };
  React.useEffect(() => {
    getList();
  }, []);
  React.useEffect(() => {
    if (messages.length > 0) {
      const eleHeight = containerRef.current.clientHeight;
      const containerHeight = boardRef.current.clientHeight;
      const duration = Math.round(eleHeight / containerHeight * 15);
      const config = {
        height: eleHeight - (containerHeight / 2),
        duration,
      };
      setAnimationConfig(config);
      console.log('config:', config);
      const reload = setTimeout(() => {
        getList();
      }, duration * 1000);
      return () => {
        clearTimeout(reload);
      }
    }
  }, [messages]);

  const seed = Math.ceil((Math.random()*10));
  
  const imgArray = Array.from({length: 30}, (_, i) => ({
    url: require(`../images/wedding/w-${seed + i*3}.jpg`).default
  }));
  return (
    <div>
      <OverwriteStyle />
      <Mask>
        <CarouselWrapper>
          <Carousel showArrows={true} showIndicators={false} showThumbs={false} dynamicHeight={true} stopOnHover={false} emulateTouch={true} autoPlay={true} interval={5000} infiniteLoop={true}>
            {imgArray.map((n) => (
              <div key={n.url}>
                <img src={n.url} alt='' />
              </div>
            ))}
          </Carousel>
        </CarouselWrapper>
      </Mask>
      <BoardWrap ref={boardRef}>
        <QrcodeWrap>
          <NavLink to="/" title="填寫祝福">
            填寫祝福
            <img src={qrcode} alt="" />
          </NavLink>
        </QrcodeWrap>
        <Board>
          <MessageList height={animationConfig.height} duration={animationConfig.duration} ref={containerRef}>
            {
              messages.length > 0 && messages.map((n, i) => (
                <MessageListItem style={{ alignItems: n.align }} key={i}>
                  <ItemBox>
                    {n.content}
                    {n.name && <Author>{n.name}</Author>}
                  </ItemBox>
                </MessageListItem>
              ))
            }
          </MessageList>
        </Board>
      </BoardWrap>
    </div>
  );
};

export default Play;