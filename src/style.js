import styled, { keyframes } from "styled-components";
import border from "./images/border.svg";
import border2 from "./images/border2.svg";

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
@media (min-width: 1024px) {
  height: 100%;
  width: 60%;
  margin: 0 0 0 -20px;
  background-position: center;
}
`;
export const CardWrapper = styled.div`
background-color: rgb(160 29 29 / 65%);
text-align: center;
position: relative;
z-index: 2;
&:after {
  content: '';
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
  bottom: 16px;
  z-index: -1;
  border: 60px solid transparent;
  border-image: url(${border}) 150 155 round;
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
}
@media (min-width: 1024px) {
  position: absolute;
  left: 50%;
  width: 45%;
  min-width: 450px;
  top: 10%;
  height: 80%;
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
`;

export const Title = styled.div`
font-weight: bold;
font-family: 'Marck Script', serif;
font-size: 36px;
img + img {
margin-left: 2.5em;
margin-top: 10px;
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
  &:hover {
    color: #ff6565;
  }
  &.active {
    border-bottom: 1px solid;
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