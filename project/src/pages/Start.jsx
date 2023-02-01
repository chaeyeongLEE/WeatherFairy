import React from 'react';
import styled from 'styled-components';
import Clothes from '../components/Clothes';
import Header from '../components/Header';
import Location from '../components/Location';
import Weather from '../components/Weather';
import '../styles/Start.css';

export default function Start() {
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </>;

  const Div5 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 22vh;
    margin-left: '20px';
    font-family: 'Nanum Gothic Coding', monospace;
  `;

  return (
    <div className="total">
      <Header />
      <Div5>
        <hr />
        <h1> Today's best fashion </h1>
        <br />

        <Location />

        <Weather />
        <Clothes />
        <br />
      </Div5>
    </div>
  );
}
