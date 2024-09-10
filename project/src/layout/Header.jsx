import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: pink;
    & ul {
        display: flex;
        list-style: none;
        gap: 20px;
    }
`;

export default function Header() {
  return (
      <Nav>
        <ul>
          <li>
            <Link to="/">
              home
            </Link>
          </li>
          <li>
            <Link to="/diary">
              다이어리
            </Link>
          </li>
        </ul>
      </Nav>
  );
}
