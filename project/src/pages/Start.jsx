import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Weather2 from '../components/Weather2';
import backImg1 from '../public/sunsetImg.jpeg'
import backImg2 from '../public/winter.jpeg'
import backImg3 from '../public/sunset2.jpeg'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size : 100% 100%;
    `;

const Main = styled.main`
    flex: 1;
    padding: 3.5rem;
`
export default function Start() {
  const [backImg, setBackImg] = useState(backImg1);

  useEffect(() => {
    const backImgArray = [backImg1, backImg2, backImg3];
    const randomImage = backImgArray[Math.floor(Math.random() * backImgArray.length)];
    setBackImg(randomImage);
  }, []);
  const [city, setCity] = useState('');

  // Weather 컴포넌트에서 전달받은 city 값을 업데이트하는 함수
  const getCity = (cityName) => {
    setCity(cityName);
  };
    return (
        <Div bgImage={backImg}>
          <Header city={city} />
          <Main>
            <Weather2 getCity={getCity} />
            {/*<Micro />*/}
          </Main>
          {/*<Clothes />*/}
          <Footer />
        </Div>
    );
}
