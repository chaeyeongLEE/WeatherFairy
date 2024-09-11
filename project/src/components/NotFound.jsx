import React from 'react';
import warning from '../public/warning.svg'
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    
    & h1 {
        color: #67882d;
        font-weight: 800;
        letter-spacing: 10px;
    }

    & img {
        width: 250px;
    }
`

export default function NotFound() {
  return (
    <Div>
      <img src={warning} alt="페이지를 불러올 수 없습니다." />
      <h1>404</h1>
      <h2> 페이지를 찾을 수 없습니다. </h2>
    </Div>
  );
}
