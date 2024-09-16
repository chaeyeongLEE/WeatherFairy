import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #eaeaea;
    opacity: 30%;

    & ul {
        display: flex;
        list-style: none;
        gap: 20px;
    }
    
    & div {
        display: flex;
        margin-right: auto;
        padding: 0 3.5rem;
        & span {
            margin-left: 0.5rem;
        }
    }
`;

export default function Header({city}) {
  return (
      <Nav>
        <div>
          <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '0.1rem' }} />
          {city ? <span style={{width: '100%'}}>Weather in {city}</span> :
            <span>위치정보가 존재하지않습니다.</span>}
        </div>
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
