import React from 'react';

export default function Clothes2(temp) {
  const tC = parseInt(temp.temp);
  console.log(tC);
  if ( tc <= 5 )
  else if ( tc < 10 )
  else if ( tc < 15 )
  if (27 < tC) {
    return (
      <>
        <div>나시티, 반바지, 민소매 원피스</div>
      </>
    );
  } else if (23 <= tC && tC <= 27) {
    return (
      <>
        <div>반팔, 얇은 셔츠, 얇은 긴팔, 반바지, 면바지</div>
      </>
    );
  } else if (20 < tC < 23) {
    return (
      <>
        <div>긴팔티, 가디건, 후드티, 면바지, 슬랙스, 스키니</div>
      </>
    );
  } else if (17 <= tC <= 20) {
    return (
      <>
        <div>니트, 가디건, 후드티, 면바지, 슬랙스, 스키니</div>
      </>
    );
  } else if (12 < tC < 17) {
    return (
      <>
        <div>자켓, 셔츠, 가디건, 간절기 야상, 살색 스타킹</div>
      </>
    );
  } else if (10 <= tC <= 12) {
    return (
      <>
        <div>트렌치코트, 간절기 야상, 여러겹 껴입기</div>
      </>
    );
  } else if (5 < tC < 10) {
    return (
      <>
        <div>코트, 가죽자켓</div>
      </>
    );
  } else if (tC <= 5) {
    return (
      <>
        <div>겨울 옷(야상, 패딩, 목도리 등등 다)</div>
      </>
    );
  }
  //   return <div>{tempClothes}</div>;
}
