import React from 'react';
import styled from 'styled-components';

const Div1 = styled.div`
  width: 400px;
  border-radius: 1rem;
  margin-left: 640px;
  text-align: center;
  min-height: 140px;
  margin-top: 60px;
  background-color: #b1b9d5b8;
  padding: 25px;
`;

export default function Clothes(temp) {
  const tC = parseInt(temp.temp);
  console.log(tC);
  if (tC <= 5) {
    return (
      <>
        <Div1>
          {' '}
          날씨가 많이 춥습니다.
          <br />
          두툼한 겨울 의류, 보완이 철저한 외투를 입으세요.
          <br />
          <br />
          🧚🏻‍♀️ 추천 아우터 : 야상, 패딩
          <br />
          🧚🏻‍♀️ 추천 아이템: 목도리, 장갑
        </Div1>
      </>
    );
  } else if (tC < 10) {
    return (
      <>
        <Div1>
          쌀쌀한 날씨입니다. 공기가 차가우니 따뜻하게 입어주세요.
          <br />
          🧚🏻‍♀️ 추천 아우터 : 코트, 가죽자켓, 경량패딩
        </Div1>
      </>
    );
  } else if (tC < 12) {
    return (
      <>
        <Div1>
          낮에는 날씨가 따뜻할 수 있지만, 저녁엔 공기가 차갑습니다. <br />
          보온성이 있는 외투나 얇은 옷을 여러겹 입으시는 것을 추천드려요.
          <br />
          🧚🏻‍♀️ 추천 아우터 : 트렌치코트, 간절기 야상
        </Div1>
      </>
    );
  } else if (tC < 17) {
    return (
      <>
        <Div1>
          나들이하기에 적당한 날씨입니다. 얇은 옷을 여러겹 입으시는 것을
          추천드려요. <br />
          셔츠나 가디건이 날씨를 즐기기에 적당하겠어요 !
          <br />
          🧚🏻‍♀️ 추천 아우터 : 자켓, 가디건, 간절기 야상
        </Div1>
      </>
    );
  } else if (tC < 20) {
    return (
      <>
        <Div1>
          면바지나 슬랙스, 두껍지않은 가벼운 의류를 추천드립니다.
          <br />
          🧚🏻‍♀️ 추천 아우터 : 가디건, 후드티
        </Div1>
      </>
    );
  } else if (tC < 23) {
    return (
      <>
        <Div1>
          날씨가 다소 더울 수 있습니다. 기모가 있는 옷은 더울 수 있으니 셔츠나
          얇은 면티를 추천드립니다.
          <br />
          🧚🏻‍♀️ 추천 아우터 : 면바지, 면티, 슬랙스
        </Div1>
      </>
    );
  } else if (tC < 27) {
    return (
      <>
        <Div1>
          날씨가 덥습니다. 반팔 또는 나시티, 반바지, 민소매 원피스를
          추천드립니다.
          <br />
          🧚🏻‍♀️ 추천 의류 : 얇은 셔츠나 얇은 긴팔, 반바지
        </Div1>
      </>
    );
  } else if (tC < 100) {
    return (
      <>
        <Div1>
          날씨가 많이 덥습니다. 민소매나 얇은 반팔, 반바지를 적극 권장드립니다.
          <br />
          태양이 뜨거우니 얇은 흰티를 걸치시는 것을 추천드려요. 🧚🏻‍♀️ 추천 의류 :
          얇은 셔츠, 얇은 반팔과 민소매
        </Div1>
      </>
    );
  }
}
