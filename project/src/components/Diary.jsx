import React from 'react';
import styled from 'styled-components';
import Board from './Board';
import Header from './Header';

const Div = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export default function Diary() {
  return (
    <body>
      <Header />
      <Div>
        <Board />
      </Div>
    </body>
  );
}
