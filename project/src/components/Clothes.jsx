import React from 'react';
import styled from 'styled-components';

import clothes1Img from '../clothes1.jpeg';
import clothes2Img from '../clothes2.jpeg';
import clothes3Img from '../clothes3.jpeg';

export default function Clothes(temp) {
  const imgStyle = {
    width: '563px',
    height: '528px',
    marginTop: '-527px',
    marginLeft: '-420px',
    borderRadius: '1rem',
  };

  const Div1 = styled.div`
    display: flex;
    width: 450px;
    border-radius: 1rem;
    margin-left: 630px;
    align-items: center;
    min-height: 20vh;
    margin-top: '60px';
    background-color: #e5cace;
    display: relative;
    justify-content: center;
  `;

  const tC = parseInt(temp.temp);
  console.log(tC);
  if (tC <= 5) {
    return (
      <>
        <Div1>
          {' '}
          날씨가 많이 춥습니다.
          <br />
          두툼한 겨울 의류와 목도리, 장갑 등의 아이템을 착용하세요.
          <br />
          🧚🏻‍♀️ 추천 아우터 : 야상, 패딩 등 보완이 철저한 외투를 입으세요.
        </Div1>
        <img src={clothes3Img} alt="겨울옷3" style={imgStyle}></img>
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
        <img src={clothes2Img} alt="겨울옷2" style={imgStyle}></img>
      </>
    );
  } else if (tC < 12) {
    return (
      <>
        <div>트렌치코트, 간절기 야상, 여러겹 껴입기</div>
        <img src={clothes1Img} alt="겨울옷1" style={imgStyle}></img>
      </>
    );
  } else if (tC < 17) {
    return (
      <>
        <div>자켓, 셔츠, 가디건, 간절기 야상, 살색 스타킹</div>
      </>
    );
  } else if (tC < 20) {
    return (
      <>
        <div>니트, 가디건, 후드티, 면바지, 슬랙스, 스키니</div>
      </>
    );
  } else if (tC < 23) {
    return (
      <>
        <div>긴팔티, 가디건, 후드티, 면바지, 슬랙스, 스키니</div>
      </>
    );
  } else if (tC < 27) {
    return (
      <>
        <div>반팔, 얇은 셔츠, 얇은 긴팔, 반바지, 면바지</div>
      </>
    );
  } else if (tC < 100) {
    return (
      <>
        <div>나시티, 반바지, 민소매 원피스</div>
      </>
    );
  }
}
