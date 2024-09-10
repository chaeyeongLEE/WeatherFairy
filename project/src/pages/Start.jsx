import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Weather from '../components/Weather';
import Micro from '../components/Micro';

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
            <Weather />
            {/*<Micro />*/}
          </Main>
          {/*<Clothes />*/}
          <Footer />
        </Div>
    );
}
