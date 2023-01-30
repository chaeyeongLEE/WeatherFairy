import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">메인 홈 이동</Link>
          </li>

          <li>
            <Link to="/board">날씨다이어리 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
