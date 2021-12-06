import logo from './logo.svg';
import cover from './images/cover.png';
import boy from './images/boy.svg';
import girl from './images/girl.svg';
import arrow from './images/arrow.svg';
import Invitation from './component/Invitation';
import { CoverWrapper, Figure, CardWrapper, CardContent, Title, TextDefault, TextDateTime, TextLocation, ChName, ScrollLink } from './style';
import './App.css';

function App() {
  return (
    <CoverWrapper>
      <Figure style={{ backgroundImage: `url(${cover})` }}>
        <ChName>文翔 & 怡君</ChName>
      </Figure>
      <CardWrapper>
        <CardContent>
          <Title>Lotus & Ally</Title>
          <Title>
            <img src={boy} width="50" />
            <img src={girl} width="50" />
          </Title>
          <TextDefault>Sincerely invite you to their wedding!</TextDefault>
          <TextDateTime>
            2021 03 12<br />
            <small>Saturday 12:30</small>
          </TextDateTime>
          <TextLocation>
            @晶宴民權館 第八劇場<br />
            <small><a href="https://g.page/amazinghall_minquan?share" target="_blank" rel="noreferrer">台北市中山區民權東路三段2號B1</a></small>
          </TextLocation>
          <ScrollLink type="button">
            <img src={arrow} alt="v" width="30" />
          </ScrollLink>
          <Invitation />
        </CardContent>
      </CardWrapper>
    </CoverWrapper>
  );
}

export default App;
