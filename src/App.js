import logo from './logo.svg';
import cover from './images/cover.png';
import boy from './images/boy.svg';
import girl from './images/girl.svg';
import arrow from './images/arrow.svg';
import { CoverWrapper, Figure, CardWrapper, CardContent, Title, TextDefault, TextDateTime, TextLocation, ChName,
  FormWrapper, FormItem, ScrollLink, RadioGroup, RadioWrapper, BtnSubmit } from './style';
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
          <FormWrapper>
            <FormItem>
              <label>姓名</label>
              <input type="text" />
            </FormItem>
            <FormItem>
              <label>Email</label>
              <input type="email" />
            </FormItem>
            <FormItem>
              <label>身分</label>
              <RadioGroup>
                <RadioWrapper>
                  <input type="radio" name="role" />
                  <span>文翔親友</span>
                </RadioWrapper>
                <RadioWrapper>
                  <input type="radio" name="role" />
                  <span>怡君親友</span>
                </RadioWrapper>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <label>出席狀況</label>
              <RadioGroup>
                <RadioWrapper>
                  <input type="radio" name="attendance" />
                  <span>我會出席</span>
                </RadioWrapper>
                <RadioWrapper>
                  <input type="radio" name="attendance" />
                  <span>隔空祝福</span>
                </RadioWrapper>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <label>出席人數</label>
              <input type="number" min="1" placeholder="記得要算上自己唷!" />
            </FormItem>
            <FormItem>
              <label>出席者1</label>
              <RadioGroup>
                <RadioWrapper>
                  <input type="radio" name="food1" checked />
                  <span>葷食</span>
                </RadioWrapper>
                <RadioWrapper>
                  <input type="radio" name="food1" />
                  <span>素食</span>
                </RadioWrapper>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <label>出席者2</label>
              <RadioGroup>
                <RadioWrapper>
                  <input type="radio" name="food2" checked />
                  <span>葷食</span>
                </RadioWrapper>
                <RadioWrapper>
                  <input type="radio" name="food2" />
                  <span>素食</span>
                </RadioWrapper>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <label>紙本喜帖</label>
              <RadioGroup>
                <RadioWrapper>
                  <input type="radio" name="paper" />
                  <span>請寄給我</span>
                </RadioWrapper>
                <RadioWrapper>
                  <input type="radio" name="paper" />
                  <span>我不需要</span>
                </RadioWrapper>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <label>想說的話</label>
              <textarea rows="5"></textarea>
            </FormItem>
            <small>p.s. 當天女方不設禮金桌，有意送禮的朋友們可在領取喜餅時交予工作人員。</small>
            <BtnSubmit type="submit">送 出</BtnSubmit>
          </FormWrapper>
        </CardContent>
      </CardWrapper>
    </CoverWrapper>
  );
}

export default App;
