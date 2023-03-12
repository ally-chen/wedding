import styled, { keyframes } from "styled-components";
import border from "./images/border.svg";
import avatorFrame from "./images/avator-border.png";

export const CoverWrapper = styled.div`
padding: 0 20px 20px;
position: relative;
&:after {
  content: '';
  display: block;
  width: 100%;
  background: linear-gradient(to bottom, transparent 320px, #202020 400px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
&.light {
  &:after {
    background: #f2f2f2;
  }
}
@media (min-width: 1024px) {
  height: 100vh;
  min-height: 600px;
  padding-bottom: 0;
  overflow: hidden;
  &:after {
    height: 100%;
    top: 0;
    background: linear-gradient(to right, transparent 10%, #202020 30%);
    width: 60%;
    right: 0;
    left: auto;
    transition: .3s linear all;
  }
  &.light {
    &:after {
      width: 140%;
      background: linear-gradient(to right, transparent 10%, #f2f2f2 30%);
    }
  }
}
`;

export const Figure = styled.figure`
height: 400px;
width: calc(100% + 40px);
background-size: cover;
background-repeat: no-repeat;
background-position: center 40%;
position: relative;
margin: 0 -20px;
transition: .3s linear all;
.light &{
  height: 60px;
}
@media (min-width: 1024px) {
  height: 100%;
  width: 60%;
  margin: 0 0 0 -20px;
  background-position: center;
  .light &{
    height: 100%;
  }
}
`;
export const CardWrapper = styled.div`
background-color: rgb(160 29 29 / 65%);
text-align: center;
position: relative;
z-index: 2;
transition: .3s linear all;
&:after {
  content: '';
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
  bottom: 16px;
  z-index: -1;
  border: 60px solid transparent;
  border-image: url(${border}) 155 155 round;
}
&:before {
  content: '';
  position: absolute;
  left: -8px;
  right: -8px;
  top: -8px;
  bottom: -8px;
  border: 2px solid rgb(160 29 29 / 65%);
  z-index: -1;
  transition: .3s linear all;
}
.light &{
  background-color: #fff;
  &:before {
    border-color: #fff;
  }
}
@media (min-width: 1024px) {
  position: absolute;
  left: 50%;
  width: 45%;
  min-width: 450px;
  top: 10%;
  height: 80%;
  .light &{
    left: 5%;
    width: 90%;
  }
}
`;

export const CardContent = styled.div`
height: 100%;
padding: 50px 20px;
overflow-y: scroll;
&::-webkit-scrollbar{
  width: 6px;
  height: 0;
}
&::-webkit-scrollbar-track{
  background-color: transparent;
}
&::-webkit-scrollbar-thumb{
  border-radius: 6px;
  background-color: #a03b3b;
}
.light &{
  &::-webkit-scrollbar-thumb{
    background-color: #ffcba0a8;
  }
}
`;

export const Title = styled.div`
font-weight: bold;
font-family: 'Marck Script', serif;
font-size: 36px;
img + img {
margin-left: 2.5em;
margin-top: 10px;
}
@media (min-width: 768px) {
  font-size: 60px;
}
@media (min-width: 1024px) {
  font-size: 72px;
}
`;

export const SubTitle = styled.h2`
font-weight: bold;
font-family: 'Gilda Display',serif;
font-size: 20px;
letter-spacing: 0.05em;
margin: 1.5em 0 0.75em;
@media (min-width: 1024px) {
  font-size: 28px;
}
`;

export const TextDefault = styled.div`

`;
export const TextDateTime = styled.div`
font-size: 30px;
margin: 0.75em 0;
/* font-style: italic; */
font-weight: bold;
letter-spacing: 0.05em;
line-height: 1;
font-style: italic;
@media (min-width: 1024px) {
  font-size: 40px;
}
small{
  font-size: 0.6em;
  font-weight: 400;
}
`;
export const TextLocation = styled.div`
font-size: 14px;
line-height: 1.5;
@media (min-width: 1024px) {
  font-size: 16px;
}
`;

export const ChName = styled.figcaption`
font-family: 'Ma Shan Zheng';
font-size: 28px;
position: absolute;
bottom: 14%;
right:2%;
background: #000000a6;
color: #fff;
padding: 10px;
@media (min-width: 1024px) {
bottom: 2%;
font-size: 40px;
left: 2%;
right: auto;
}
`;

export const FormWrapper = styled.form`
display:flex;
flex-direction: column;
align-items: center;
`;

export const FormItem = styled.div`
position: relative;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
margin: 0 auto 20px;
width: 100%;
@media (min-width: 1024px) {
  width: 80%;
}
> label {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  position: relative;
  @media (min-width: 1024px) {
    width: 80px;
    text-align: right;
    margin-right: 20px;
    line-height: 30px;
    margin-bottom: 0px;
  }
  + * {
    width: 100%;
    border-bottom: 1px solid #ffcba0;
    @media (min-width: 1024px) {
      width: calc(100% - 100px);
      height: 30px;
    }
  }
}
input {
  border: 0;
  border-bottom: 1px solid #ffcba0;
  background-color: transparent;
  outline: none;
  color: #fff;
  font-family: inherit;
  line-height: 29px;
  font-size: 16px;
  padding: 0 10px;
  text-align: center;
  letter-spacing: 0.05em;
  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }
}
textarea {
  height: auto;
  background-color: transparent;
  border-color: #ffcba0;
  outline: none;
  color: #fff;
  padding: 5px 10px;
  line-height: 1.5em;
  font-family: inherit;
  letter-spacing: 0.05em;
  font-size: 16px;
}
`;
export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 30px;
`;
export const RadioWrapper = styled.label`
cursor: pointer;
> input[type=radio] {
  visibility: hidden;
  position: absolute;
  width: 1px;
  &:checked + span {
    opacity: 1;
  }
}
> span {
  opacity: 0.35;
  color: #fff;
  font-size: 16px;
}
`;
const jumpping = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -8px);
  }
`;

export const ScrollLink = styled.button`
font-size: 20px;
background:none;
border: none;
outline: none;
font-family: inherit;
color: inherit;
letter-spacing: 0.03em;
margin: 60px 0;
> img {
  animation: ${jumpping} 0.3s ease-out infinite alternate;
}
`;

export const BtnSubmit = styled.button`
border-radius: 30px;
background: transparent;
color: inherit;
padding: 8px 24px;
font-size: 16px;
font-family: inherit;
margin: 20px 0;
border: 1px solid #ffcba0;
cursor: pointer;
&:hover {
  color: #731e1e;
  background: #ffcba0;
}
`;

export const MoreInfo = styled.span`
width: 16px;
height: 16px;
display: inline-block;
border: 1px solid #ffcba0;
line-height: 14px;
text-align: center;
border-radius: 50%;
font-size: 14px;
vertical-align: 3px;
position: relative;
@media (min-width: 1024px) {
  position: absolute;
  right: -18px;
  top: calc(50% - 8px);
}
&:before {
  content: '${({text}) => text}';
  display: none;
  position: absolute;
  bottom: 1.5em;
  left: 0;
  width: 160px;
  padding: 0.5em;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.75);
}
&:hover:before {
  display: block;
}
`;

export const ErrorText = styled.div`
position: absolute;
right: 0;
top: 0;
background-color: rgba(255, 255, 255, 0.8);
color: #b50000;
font-size: 14px;
padding: 3px 6px;
border-radius: 3px;
@media (min-width: 1024px) {
  position: relative;
  left: 100px;
  margin-top: 4px;
  flex-basis: calc(100% - 100px);
}
`;

const rotating = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoadingMask = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
z-index: 5;
background-color: rgba(0, 0, 0, 0.6);
display: flex;
align-items: center;
justify-content: center;
&:before {
  content: '';
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px dashed #fff;
  opacity: 0.6;
  animation: ${rotating} 2.5s linear infinite;
}
`;

export const Footer = styled.footer`
padding: 0.5em;
font-size: 13px;
text-align: center;
z-index: 2;
position: relative;
margin-top: 2em;
.light &{
  color: #7f7f7f;
}
@media (min-width: 1024px) {
position: absolute;
right: 1em;
bottom: 1em;
}
`;

export const LinkList = styled.ul`
padding: 0;
margin: 20px 0;
list-style: none;
> li + li{
  margin-top: 10px;
}
> li > a {
  border-bottom: 1px solid;
  font-size: 14px;
  text-decoration: none;
  color: #ffaaaa;
  &:hover {
    color: #ff6565;
  }
}
`;

export const NavLinkList = styled.ul`
position: absolute;
width: 100%;
padding: 0;
margin: 0;
list-style: none;
display: flex;
align-items: center;
justify-content: flex-end;
top: -2.5em;
font-size: 14px;
@media (min-width: 1024px) {
font-size: 18px;
}
> li + li{
  margin-top: 0;
  margin-left: 1.5em;
}
> li > a {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Gilda Display', serif;
  font-style: italic;
  
  .light &{
    color: #2d2d2d;
    &:hover {
      color: #ff6565;
    }
  }
  &:hover {
    color: #ff6565;
  }
  &.active {
    border-bottom: 1px solid;
    color: #ff6565;
  }
}
`;

export const TransportIcon = styled.img`
border-radius: 4px;
width: 26px;
background:#ffcba0;
margin-right: 6px;
`

export const FlexC = styled.div`
display: flex;
align-items: center;
`;

export const MrtTag = styled.div`
padding: 2px 4px;
border-radius: 3px;
color: #fff;
margin: 0 2px;
`;

export const TransportList = styled.ul`
font-size: 14px;
padding: 0;
list-style:none;
text-align: left;
margin: 0 auto;
max-width: 80%;
>li {
  margin-bottom: 1em;
  padding-left: 30px;
  ${FlexC} {
    margin-left: -32px;
  }
}
@media (min-width: 1024px) {
  max-width: 60%;
}
`;

export const VideoBox = styled.div`
position: relative;
width: 90%;
margin: 30px auto;
&:before {
  content: "";
  padding-bottom: 56.25%;
  display: block;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
`;

export const Brief = styled.div`
display: flex;
color: #7f7f7f;
align-items: center;
flex-wrap: wrap;
@media (min-width: 768px) {
  flex-wrap: nowrap;
  padding: 40px 20px;
}
@media (min-width: 1024px) {
  padding: 40px;
  max-width: 1200px;
  margin: auto;
}
> div {
  flex-basis: 100%;
  max-width: 100%;
  &.togetherText {
    order: -1;
    margin: 2em 0;
  }
  @media (min-width: 768px) {
    flex-basis: 33.3%;
    max-width: 33.3%;
    &.togetherText {
      order: 0;
    }
    &${VideoBox} {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
`;

export const CharacterTitle = styled.h2`
color: #ffcba0a8;
font-size: 32px;
font-weight: bold;
font-family: 'Marck Script', serif;
margin: 0;
@media (min-width: 768px) {
  font-size: 48px;
}
small {
  color: #7f7f7f;
  font-size: 0.43em;
  display: block;
  font-family: 'Marck Script', 'Noto Serif TC', serif;
  @media (min-width: 768px) { 
    font-size: 0.4em;
  }
}
`;

export const AvatorWrapper = styled.div`
position: relative;
background-position: center;
background-size: 95%;
background-repeat: no-repeat;
max-width: 300px;
margin: 1em auto;
&:before {
  content:'';
  padding-bottom: 100%;
  display: block;
}
&:after {
  content: '';
  position: absolute;
  left: 0;
  top: -1%;
  width: 100%;
  height: 100%;
  border-radius: 3.5%;
  background: url(${avatorFrame}) center/100% no-repeat, radial-gradient(circle at center -50%, transparent 80%, rgba(0, 0, 0, 0.3));
}
`;

export const SSRSymbol = styled.img`
position: absolute;
left: -3%;
top: -3%;
max-width: 30%;
z-index: 2;
`;
export const StarList = styled.ul`
position: absolute;
right: 5%;
bottom: 5%;
list-style: none;
padding: 0;
margin: 0;
display: flex;
z-index: 2;
width: 50%;
> li {
  > img {
    max-width: 95%;
  }
}
`;

export const BeenTogether = styled.div`
font-size: 60px;
font-family: 'Marck Script', serif;
letter-spacing: 0.075em;
padding-left: 0.15em;
color: #ffa2a2;
@media (min-width: 1024px) {
  font-size: 120px;
}
`;

export const Quote = styled.span`
background: linear-gradient(to bottom, transparent 70%, rgb(255, 203, 160, 0.67) 70%, rgb(255, 203, 160, 0.67) 100%);
line-height: 2em;
position: relative;
&:before {
  content: '“';
  font-size: 2em;
  // opacity: 0.5;
  color: #ffcba0;
}
&:after {
  content: '”';
  font-size: 2em;
  // opacity: 0.5;
  color: #ffcba0;
}
`;

export const CharacterCard = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin-bottom: 2em;
@media (min-width: 768px) {
  display: block;
}
> ${AvatorWrapper} {
  flex-basis: 100px;
}
> ${CharacterTitle} {
  order: 1;
  flex-basis: calc(100% - 100px);
  text-align:left;
  padding-left: 20px;
  @media (min-width: 768px) {
    text-align:center;
    padding-left: 0px;
  }
}
> .quoteSection {
  text-align:left;
  flex-basis: 100%;
  order: 2;
  @media (min-width: 768px) {
    text-align:center;
  }
}
`;

export const TimeLine = styled.ul`
list-style: none;
padding: 0;
margin: 0;
position: relative;
&:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  border-left: 4px dotted #ffa2a2;
  z-index: -1;
  @media (min-width: 768px) {
    left: 50%;
  }
}
`;

export const TimeLineContent = styled.div`
border: 1px solid #e4e4e4;
padding: 0.5em;
color: #7f7f7f;
background: #fff;
width: calc(100% - 36px);
margin: 0 auto 0 32px;
text-align: left;
@media (min-width: 768px) {
  width: 45%;
  padding: 1em;
}
.centered &{
 @media (min-width: 768px) {
  text-align: center;
  margin: auto;
 }
}
.left &{
  @media (min-width: 768px) {
    margin: 0 auto 0 3%;
    text-align: right;
  }
}
.right &{
  @media (min-width: 768px) {
    margin: 0 3% 0 auto;
  }
}
`;

export const TimeLineItem = styled.li`
position: relative;
padding: 2em 0 3em;
@media (min-width: 768px) {
  padding: 3em 0 4em;
}
`;

export const TimeLineDate = styled.span`
position: absolute;
left: 0%;
top: 0;
padding: 0.5em;
line-height: 1.2;
color: #fff;
background: #ffa2a2;
width: 85px;
text-align: center;
font-size: 13px;
font-family: sans-serif;
font-weight: bold;
@media (min-width: 768px) {
  left: 50%;
  width: 120px;
  font-size: 18px;
  transform: translate(-50%, 0);
}
`;

export const StoryText = styled.div`
margin: 2em 20px;
background: #ffa2a2;
color: #fff;
max-width: 500px;
padding: 1em;
box-shadow: 3px -3px 0 0 #fff, 5px -5px 0 0 #ffa2a2, -3px 3px 0 0 #fff, -5px 5px 0 0 #ffa2a2;
@media (min-width: 768px) {
  margin-left: auto;
  margin-right: auto;
}
`;