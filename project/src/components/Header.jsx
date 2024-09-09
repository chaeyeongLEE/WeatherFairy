import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: pink;
    height: 70px;
    position: fixed;
    left: 0;
    top: 0;
    
    & ul {
        display: flex;
        list-style: none;
    }

    & li {
        margin-left: 30px;
    }

    @media screen and (max-width: 700px) {
    display: flex;
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
