import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Clothes from './Clothes';
import Micro from './Micro';
import Location from './Location';
import ClothesImg from './ClothesImg';
import WeatherHeader from './WeatherHeader';
import Header from './Header';

const DivTie = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  background-color: #c9cad389;
  width: 420px;
  margin-top: 20px;
  margin-left: 640px;
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
`;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: 0, desc: '', loading: true };
  }
  componentDidMount() {
    const cityName = 'Seoul';
    const API_KEY = 'PERSONAL API KEY';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        this.setState({
          temp: data.main.temp - 273.15,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
    let temp = this.state.temp;
    let tC = Math.round(temp);

    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <DivTie>
          <Header />
          <Div>
            <Div1>
              <WeatherHeader />
            </Div1>
            <Div3>
              <Location />
              <ClothesImg temp={tC} />
              <Div2>
                <span
                  style={{
                    color: 'brown',
                    fontSize: '22px',
                    textShadow: '2px 2px 2px gray',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    style={{ height: '100px', width: '100px' }}
                  />
                  <p>
                    <span>{tC}°C</span>
                    <br />
                    {this.state.desc}
                  </p>
                  <Micro />
                </span>
              </Div2>
              <br />
              <Clothes temp={tC} />
            </Div3>
          </Div>
          {/* <style jsx>
            {`
            .Div1 {
              color: red;
            }
          `}</style> */}
        </DivTie>
      );
    }
  }
}
export default Weather;
