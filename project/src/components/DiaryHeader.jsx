import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../home.png';
import diaryImg from '../diary.png';
import fairyImg from '../fairy.png';
import styled from 'styled-components';

const Nav = styled.nav`
  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    text-align: center;
    justify-content: flex-start;
  }
`;

export default function DiaryHeader() {
  const imgStyle = { width: '40px' };
  return (
    <>
      <Nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <img src={fairyImg} alt="날씨 요정" style={imgStyle}></img>
            Weather Fairy
          </li>

          <li>
            <Link to="/">
              {' '}
              <img src={homeImg} alt="홈" style={imgStyle} />{' '}
            </Link>
          </li>
          <li>
            <Link to="/diary">
              {' '}
              <img src={diaryImg} alt="다이어리" style={imgStyle} />{' '}
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
}
