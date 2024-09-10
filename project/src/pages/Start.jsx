import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Weather2 from '../components/Weather2';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    `;

const Main = styled.main`
    flex: 1;
    padding: 3.5rem;
`
export default function Start() {
    return (
        <Div>
          <Header />
          <Main>
            <Weather2 />
            {/*<Micro />*/}
          </Main>
          {/*<Clothes />*/}
          <Footer />
        </Div>
    );
}
