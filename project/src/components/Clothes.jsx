import React from 'react';
import styled from 'styled-components';

const Div1 = styled.div`
  width: 400px;
  white-space: pre-wrap;  
  border-radius: 1rem;
  text-align: center;
  background-color: #b1b9d5b8;
  padding: 25px;
`;
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
export default function Clothes({ temp }) {
  // 문자열을 정수로 변환하기
  const tC = parseInt(temp);
  console.log('tc:', tC);
  function getWeatherInfo(tc) {
    if (tc < 5) {
      return '날씨가 많이 춥습니다. 두툼한 겨울 의류, 보완이 철저한 외투를 입으세요.<br />' +
        '추천 아우터 : 야상, 패딩, 추천 아이템: 목도리, 장갑';
    }
    else if (5 <= tc && tc < 10) {
      return '쌀쌀한 날씨입니다. 공기가 차가우니 따뜻하게 입어주세요.<br />' +
        '추천 아우터 : 코트, 가죽자켓, 경량패딩';
    }
    else if (10 <= tc && tc < 12) {
      return '낮에는 날씨가 따뜻할 수 있지만, 저녁엔 공기가 차갑습니다.<br />' +
        '보온성이 있는 외투나 얇은 옷을 여러 겹 입으시는 것을 추천드려요.';
    }
    else if (12 <= tc && tc < 17) {
      return '나들이하기에 적당한 날씨입니다. 얇은 옷을 여러 겹 입으시는 것을 추천드려요.<br />' +
        '추천 아우터 : 자켓, 가디건, 간절기 야상';
    }
    else if (17 <= tc && tc < 20) {
      return '면바지나 슬랙스, 두껍지 않은 가벼운 의류를 추천드립니다.<br />추천 아우터 : 가디건, 후드티';
    }
    else if (20 <= tc && tc < 23) {
      return '날씨가 다소 더울 수 있습니다. 기모가 있는 옷은 더울 수 있으니 셔츠나' +
        '얇은 면티를 추천드립니다. 추천 아우터 : 면바지, 면티, 슬랙스';
    }
    else {
      return `날씨가 많이 덥습니다. \n 민소매나 얇은 반팔, 반바지를 적극 권장드립니다.태양이 뜨거우니 얇은 흰티를 걸치시는 것을 추천드려요.
        추천 의류 : 얇은 셔츠, 얇은 반팔과 민소매`;
    }
  }
  const weatherCloth = getWeatherInfo();
  return (
    <Div1>
      <p>옷차림은요 {weatherCloth}</p>
    </Div1>
  )
};
