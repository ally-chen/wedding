import boy from '../images/boy.svg';
import girl from '../images/girl.svg';
import arrow from '../images/arrow.svg';
import Invitation from '../component/Invitation';
import { Title, TextDefault, TextDateTime, TextLocation, ScrollLink } from '../style';

const Home = ({ setIsLoading }) => (
  <>
    <Title>Lotus & Ally</Title>
    <Title>
      <img src={boy} alt="Lotus" width="50" />
      <img src={girl} alt="Ally" width="50" />
    </Title>
    <TextDefault>Sincerely invite you to their wedding!</TextDefault>
    <TextDateTime>
      2022 03 12<br />
      <small>Saturday 12:00 P.M.</small>
    </TextDateTime>
    <TextLocation>
      @晶宴民權館 第八劇場<br />
      <small><a href="https://g.page/amazinghall_minquan?share" target="_blank" rel="noreferrer">台北市中山區民權東路三段2號B1</a></small>
    </TextLocation>
    <ScrollLink type="button">
      <img src={arrow} alt="v" width="30" />
    </ScrollLink>
    <Invitation setIsLoading={setIsLoading} />
  </>
);

export default Home;