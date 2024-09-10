import styled from 'styled-components';

const Footers = styled.footer`
    background-color: #bfdad8;
    height: 4rem;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Footer() {
  return <Footers>
    <p>@CopyRight 2024</p>
  </Footers>
}