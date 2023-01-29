import React, { Component } from 'react';
import axios from 'axios';

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
    let tempCeil = Math.ceil(temp * 100) / 100;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <div>
          <img src={imgSrc} alt="" />
          <p>{tempCeil}°C</p>
          <p>{this.state.desc}</p>
        </div>
      );
    }
  }
}

export default Weather;
