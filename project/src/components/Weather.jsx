import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Location from './Location';
import Clothes from './Clothes';

const Div2 = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  width: 200px;
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
            <table>
              <tr>
                <Location />
              </tr>
              <tr>
                <img src={imgSrc} alt="" />
              </tr>
              <tr>
                <span>{tC}°C</span>
              </tr>
              <tr>
                <p>{this.state.desc}</p>
              </tr>
            </table>
            <Clothes temp={tC} />
          </Div2>
        </>
      );
    }
  }
}
export default Weather;
