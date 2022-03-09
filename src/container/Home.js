import boy from '../images/boy.svg';
import girl from '../images/girl.svg';
import Invitation from '../component/Invitation';
import { Title} from '../style';

const Home = ({ setIsLoading }) => (
  <>
    <Title>Lotus & Ally</Title>
    <Title>
      <img src={boy} alt="Lotus" width="50" />
      <img src={girl} alt="Ally" width="50" />
    </Title>
    <Invitation setIsLoading={setIsLoading} />
  </>
);

export default Home;