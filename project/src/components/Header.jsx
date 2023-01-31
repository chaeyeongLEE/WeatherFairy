import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import homeImg from '../home.png';
import diaryImg from '../diary.png';
import fairyImg from '../fairy.png';

export default function Header() {
  const imgStyle = { width: '40px' };
  return (
    <>
      <nav>
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
            <Link to="/board">
              {' '}
              <img src={diaryImg} alt="다이어리" style={imgStyle} />{' '}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
