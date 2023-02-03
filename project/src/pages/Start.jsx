import React from 'react';
import styled from 'styled-components';
import Clothes from '../components/Clothes';
// import Location from '../components/Location';
import Weather from '../components/Weather';
import '../styles/Start.css';
import back from '../back.png';

export default function Start() {
  <>
    <link
      href="https://webfontworld.github.io/BMYeonSung/BMYeonSung.css"
      rel="stylesheet"
    />
  </>;

  const Div5 = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    font-family: 'BMYeonSung';
    z-index: 1;
    /* margin-left: '20px'; */

    @media screen and (max-width: 700px) {
      width: 50%;
      flex-direction: column;
      display: flex;
      text-align: center;
      margin-left: -190px;
      justify-content: flex-start;
      background-image: url(../back.png);
    }
  `;

  {
    return (
      <div>
        <span className="background"></span>
        <Div5>
          {' '}
          <Weather />
          <Clothes />
          <br />
        </Div5>
      </div>
    );
  }
}
