import mrt from '../images/mrt.svg';
import bus from '../images/bus.svg';
import car from '../images/car.svg';
import { Title, TextDefault, SubTitle, TransportIcon, TransportList, FlexC, MrtTag } from '../style';

const Information = () => {
  return (
    <div>
      <Title>Information</Title>
      <SubTitle>日期</SubTitle>
      <TextDefault>2022/03/12 (六) 中午12:30</TextDefault>
      <SubTitle>地點</SubTitle>
      <TextDefault>
        晶宴民權館<br />
        <small>
          <a href="https://g.page/amazinghall_minquan?share" target="_blank" rel="noreferrer">台北市中山區民權東路三段2號B1</a><br />
          宴會廳：第八劇場(入口直走到底)
        </small>
      </TextDefault>
      <SubTitle>交通方式</SubTitle>
      <TransportList>
        <li>
          <FlexC><TransportIcon src={mrt} alt="" /> <MrtTag style={{backgroundColor: '#f8b61c', color: "#000"}}>中和新蘆線</MrtTag> 捷運行天宮站</FlexC>
          3號出口，往東北東方向步行約10分鐘。
        </li>
        <li>
          <FlexC><TransportIcon src={mrt} alt="" /> <MrtTag style={{backgroundColor: '#c48c31'}}>文湖線</MrtTag> 捷運中山國中站</FlexC>
          往西北西方向步行約10分鐘。
        </li>
        <li>
          <FlexC><TransportIcon src={bus} alt="" /> 公車民權建國路站</FlexC>
          5 、49 、63、74 、214、225、285、 527、617、642、685、801、803、棕16、紅29、紅31、紅32、敦化幹線
        </li>
        <li>
          <FlexC><TransportIcon src={car} alt="" /> 自行開車</FlexC>
          中山高→國道1號→圓山交流道下→建國高架橋→民權東路閘道口下。
        </li>
      </TransportList>
      <SubTitle>停車資訊</SubTitle>
      <TextDefault>會場大樓設有停車場</TextDefault>
    </div>
  );
};

export default Information;