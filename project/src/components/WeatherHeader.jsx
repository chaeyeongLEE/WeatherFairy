import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  line-height: 20px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px pink; ;
`;

const Div = styled.div`
  background-color: rgba(171, 171, 216, 0.323);
  height: 50px;
  width: 985px;
  padding: 2rem;
  margin-left: 40px;
  margin-bottom: 20px;
  border-radius: 1rem;
  @media screen and (max-width: 700px) {
    width: 390px;
    margin-left: 640px;
  }
`;

export default function WeatherHeader() {
  return (
    <Div>
      <H1> Today's best fashion </H1>
    </Div>
  );
}
