import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

const H1 = styled.h1`
  background-color: rgb(214, 188, 149);
  height: 35px;
  width: 960px;
  padding: 3rem;
  margin-left: 40px;
  border-radius: 1rem;
  text-align: center;
  line-height: 45px;
  font-weight: 600;
`;
export default function WeatherHeader() {
  return (
    <Div>
      <H1> Today's best fashion </H1>
    </Div>
  );
}
