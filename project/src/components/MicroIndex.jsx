import React from 'react';

  export default function MicroIndex({ data }){
    const microData = data.aqi;

    function getMicroInfo() {
      if (microData >= 6) {
        return '매우나쁨';
      } else if (5 <= microData && microData < 6) {
        return '나쁨';
      } else if (4 <= microData && microData < 5) {
        return '보통';
      } else if (3 <= microData && microData < 4) {
        return '좋음';
      } else if (2 <= microData && microData < 3) {
        return '매우 좋음';
      } else {
        return '미세먼지 정보를 받아옵니다.';
      }
    }

    const message = getMicroInfo();
  return (<>
      <p>오늘의 미세먼지는 {message} 입니다.</p>
    </>
  )
  };