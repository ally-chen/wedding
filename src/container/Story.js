import groom from '../images/groom.jpg';
import bride from '../images/bride.jpg';
import { StoryText, Title, Brief, BeenTogether, AvatorWrapper, CharacterTitle, Quote, CharacterCard } from '../style';
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
            <Quote>體悟生活處處的細節，享受身而為己的人生。放下越多，得到越多。</Quote>
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
      <StoryText>發票中不了，手遊神卡抽不到，繞了一圈才發現彼此的重要，原來運氣早就用在我們的遇到。</StoryText>
    </div>
  );
};

export default Story;