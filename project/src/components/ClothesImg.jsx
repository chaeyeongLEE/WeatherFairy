import React from 'react';
import styled from 'styled-components';
import clothes1Img from '../public/clothes1.jpeg';
import clothes2Img from '../public/clothes2.jpeg';
import clothes3Img from '../public/clothes3.jpeg';
import summer1Img from '../public//summer1.jpg';
import summer2Img from '../public//summer2.jpg';
import summer3Img from '../public/summer3.jpg';
import summer4Img from '../public/summer4.jpg';
import summer5Img from '../public/summer5.jpg';

const Img = styled.img`
  width: 563px;
  height: 560px;
  margin-left: 40px;
  border-radius: 1rem;
  position: absolute;

  @media screen and (max-width: 700px) {
    margin-top: 580px;
    margin-left: 640px;
    width: 450px;
  }
`;
export default function ClothesImg(temp) {
  const tC = parseInt(temp.temp);
  console.log(tC);
  if (tC <= 5) {
    return (
      <>
        <Img src={clothes3Img} alt="겨울옷3"></Img>
      </>
    );
  } else if (tC < 10) {
    return (
      <>
        <Img src={clothes2Img} alt="겨울옷2"></Img>
      </>
    );
  } else if (tC < 12) {
    return (
      <>
        <Img src={clothes1Img} alt="겨울옷1"></Img>
      </>
    );
  } else if (tC < 17) {
    return (
      <>
        <Img src={summer4Img} alt="간절기옷1"></Img>
      </>
    );
  } else if (tC < 20) {
    return (
      <>
        <Img src={summer5Img} alt="여름옷"></Img>
      </>
    );
  } else if (tC < 23) {
    return (
      <>
        <Img src={summer3Img} alt="여름옷"></Img>
      </>
    );
  } else if (tC < 27) {
    return (
      <>
        <Img src={summer1Img} alt="여름옷"></Img>
      </>
    );
  } else if (tC < 100) {
    return (
      <>
        <Img src={summer2Img} alt="한여름"></Img>
      </>
    );
  }
}
