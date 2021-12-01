import styled from "styled-components";

export const CoverWrapper = styled.div`
height: 100vh;
min-height: 600px;
padding: 0 20px;
position: relative;
&:after {
  content: '';
  display: block;
  height: 100%;
  top: 0;
  width: 60%;
  background: linear-gradient(to right, transparent 10%, #202020 30%);
  position: absolute;
  right: 0;
  z-index: 1;
}
`;

export const Figure = styled.figure`
height: 100%;
width: 60%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin: 0 0 0 -20px;
position: relative;
`;
export const CardWrapper = styled.div`
position: absolute;
z-index: 2;
right: calc(50vw - 600px);
width: 600px;
top: 10%;
height: 80%;
background-color: rgb(160 29 29 / 65%);
text-align: center;
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
`;

export const CardContent = styled.div`
height: 100%;
padding: 30px 20px;
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
font-size: 72px;
`;

export const TextDefault = styled.div`

`;
export const TextDateTime = styled.div`
font-size: 40px;
margin: 0.75em 0;
/* font-style: italic; */
font-weight: bold;
letter-spacing: 0.05em;
line-height: 1;
font-style: italic;
small{
  font-size: 24px;
  font-weight: 400;
}
`;
export const TextLocation = styled.div`
font-size: 16px;
`;

export const ChName = styled.figcaption`
font-family: 'Zhi Mang Xing';
font-size: 40px;
position: absolute;
bottom: 2%;
left:2%;
background: #000000a6;
color: #fff;
padding: 10px;
`;

export const FormItem = styled.div`
display: flex;
align-items: flex-start;
width: 80%;
margin: 0 auto 10px;
> label {
  margin-right: 20px;
  width: 100px;
  text-align: right;
  line-height: 30px;
}
> input {
  border: 0;
  border-bottom: 1px solid #ffcba0;
  background-color: transparent;
  outline: none;
  color: inherit;
  font-family: inherit;
  height: 30px;
  line-height: 29px;
  font-size: 18px;
  padding: 0 10px;
  width: calc(80% - 100px);
}
`;
