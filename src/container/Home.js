import React from 'react';
import boy from '../images/boy.svg';
import girl from '../images/girl.svg';
import Invitation from '../component/Invitation';
import { Title} from '../style';

const Home = ({ setIsLoading }) => {
  React.useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.scrollTo({
        top: 320,
        behavior: 'smooth'
      })
    }
  }, []);
  return (
    <>
      <Title>Lotus & Ally</Title>
      <Title>
        <img src={boy} alt="Lotus" width="50" />
        <img src={girl} alt="Ally" width="50" />
      </Title>
      <Invitation setIsLoading={setIsLoading} />
    </>
  );
};

export default Home;