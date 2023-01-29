import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/weather">날씨창 이동</Link>
          </li>
          <li>
            <Link to="/board">날씨다이어리 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
