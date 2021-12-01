import logo from './logo.svg';
import cover from './images/cover.png';
import boy from './images/boy.svg';
import girl from './images/girl.svg';
import { CoverWrapper, Figure, CardWrapper, CardContent, Title, TextDefault, TextDateTime, TextLocation, ChName, FormItem } from './style';
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
            <img src={boy} width="50" style={{ marginRight: 180 }} />
            <img src={girl} width="50" />
          </Title>
          <TextDefault>Sincerely invite you to their wedding!</TextDefault>
          <TextDateTime>
            2021 03 12<br />
            <small>Saturday 12:30</small>
          </TextDateTime>
          <TextLocation>@晶宴民權館 第八劇場</TextLocation>
          <form>
            <FormItem>
              <label>姓名</label>
              <input type="text" />
            </FormItem>
            <FormItem>
              <label>Email</label>
              <input type="email" />
            </FormItem>
            <FormItem>
              <label>出席狀況</label>
              <input type="text" />
            </FormItem>
          </form>
        </CardContent>
      </CardWrapper>
    </CoverWrapper>
  );
}

export default App;
