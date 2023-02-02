import React from 'react';

export default function MicroIndex(data) {
  if ((data = 1)) {
    return <p>미세먼지: 매우 좋음</p>;
  } else if ((data = 2)) {
    return <p>미세먼지: 좋음</p>;
  } else if ((data = 3)) {
    return <p>미세먼지: 보통</p>;
  } else if ((data = 4)) {
    return <p>미세먼지: 나쁨</p>;
  } else {
    return <p>미세먼지: 매우 나쁨</p>;
  }
}
