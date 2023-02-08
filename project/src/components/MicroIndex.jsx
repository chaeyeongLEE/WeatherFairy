import React from 'react';

export default function MicroIndex(data) {
  const mD = data.data;
  console.log('data.microData : ' + data.data);
  if (mD < 6) {
    return (
      <>
        <p>미세먼지: 매우 나쁨</p>
      </>
    );
  } else if (mD < 5) {
    return (
      <>
        <p>미세먼지: 나쁨</p>
      </>
    );
  } else if (mD < 4) {
    return (
      <>
        <p>미세먼지: 보통 </p>
      </>
    );
  } else if (mD < 3) {
    return (
      <>
        <p>미세먼지: 좋음</p>
      </>
    );
  } else if (mD < 2) {
    return (
      <>
        <p>미세먼지: 매우 좋음</p>
      </>
    );
  }
}
