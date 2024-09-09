import React from 'react';
import styled from 'styled-components';
import Weather from '../components/Weather';
import '../styles/Start.css';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 700px) {
      width: 50%;
      flex-direction: column;
      display: flex;
      text-align: center;
      margin-left: -190px;
      justify-content: flex-start;
    }
  `;
export default function Start() {
    return (
        <Div>
          <Weather />
          {/*<Clothes />*/}
        </Div>
    );
}
