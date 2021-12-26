import groom from '../images/groom.webp';
import bride from '../images/bride.webp';
import { StoryText, Title, Brief, BeenTogether, AvatorWrapper, CharacterTitle, Quote, CharacterCard, TimeLine, TimeLineItem, TimeLineDate, TimeLineContent } from '../style';
const Story = () => {
  const duration = Math.ceil((new Date() - new Date('2018/10/30')) / (1000*60*60*24));
  return (
    <div>
      <Title>Our Story</Title>
      <Brief>
        <CharacterCard>
          <CharacterTitle>The Groom<small>李文翔 (aka 廢柴繪師)</small><small>aka Lotus Lee</small></CharacterTitle>
          <AvatorWrapper style={{backgroundImage: `url(${groom})`}} />
          <div className="quoteSection">
            {/* <CharacterTitle>The Groom<small>李文翔 (aka Lotus Lee)</small></CharacterTitle> */}
            <Quote>繪畫是興趣使然，武學是使命的召喚，體悟生命之美是人生中的必然。</Quote>
          </div>
        </CharacterCard>
        <div className="togetherText">
          We've been together for
          <BeenTogether>
            {duration}
          </BeenTogether>
          Days
        </div>
        <CharacterCard>
          <CharacterTitle>The Bride<small>陳怡君 (aka 軟懶工程師)</small><small>aka Ally Chen</small></CharacterTitle>
          <AvatorWrapper style={{backgroundImage: `url(${bride})`}}  />
          <div className="quoteSection">
            {/* <CharacterTitle>The Bride<small>陳怡君 (aka Ally Chen)</small></CharacterTitle> */}
            <Quote>太懶的時候會不小心睡一整天，太認真的時候會不小心寫扣到白天。</Quote>
          </div>
        </CharacterCard>
      </Brief>
      <TimeLine>
        <TimeLineItem className="centered">
          <TimeLineDate>2012/10</TimeLineDate>
          <TimeLineContent>在輔大校園，因為彼此的摯友而相遇、相識。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="left">
          <TimeLineDate>2014</TimeLineDate>
          <TimeLineContent>參與彼此人生的重要事件，陪伴對方面對前所未有的挑戰。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="right">
          <TimeLineDate>2015-2018</TimeLineDate>
          <TimeLineContent>各自在情感中跌跌撞撞，學習成為更好的人。同時也是遠遠關心，遠遠分享的好夥伴。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="centered">
          <TimeLineDate>2018/10/30</TimeLineDate>
          <TimeLineContent>確認彼此共通的心意，友情昇華成了愛情。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="left">
          <TimeLineDate>2018-2019</TimeLineDate>
          <TimeLineContent>填補彼此生命中空白的時光，走過那些沒有一起走的路，看過那些未曾分享的風景。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="right">
          <TimeLineDate>2019-2020</TimeLineDate>
          <TimeLineContent>彼此包容、磨合，為對方調整雙人舞的步伐。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="left">
          <TimeLineDate>2021</TimeLineDate>
          <TimeLineContent>兩個靈魂的相知相惜，決定攜手步入下一個人生階段。</TimeLineContent>
        </TimeLineItem>
        <TimeLineItem className="centered">
          <TimeLineDate>2022</TimeLineDate>
          <TimeLineContent>We're getting married!</TimeLineContent>
        </TimeLineItem>
      </TimeLine>
      <StoryText>我們繞了一圈才發現彼此的重要，原來對方就是自己靈魂的另外一塊缺角。</StoryText>
    </div>
  );
};

export default Story;