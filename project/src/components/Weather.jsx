import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Clothes from './Clothes';

const Div2 = styled.div`
  background-color: #f5e9db;
  width: 420px;
  display: relative;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 630px;
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
    const API_KEY = '9ee15f4b701050d4006958620f3cedec';
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
        <>
          <Div2>
            <span
              style={{
                color: 'brown',
                fontSize: '22px',
                textShadow: '2px 2px 2px gray',
              }}
            >
              {/* <tr>
                <Location />
              </tr> */}
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
            </span>
          </Div2>
          <br />
          <>
            <Clothes temp={tC} />
          </>
        </>
      );
    }
  }
}
export default Weather;
