import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  width: 200px;
`;
const Table = styled.table`
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding: 10px;
`;

const Input = styled.input`
  height: 200px;
  width: 95%;
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
    let tempCeil = Math.ceil(temp * 100) / 100;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          <Div2>
            <table>
              <tr>
                <img src={imgSrc} alt="" />
              </tr>
              <tr>
                <span>{tempCeil}°C</span>
              </tr>
              <tr>
                <p>{this.state.desc}</p>
              </tr>
            </table>
          </Div2>
          <Div>
            <Div></Div>
            <Table>
              <tr>
                <td>
                  날짜:{' '}
                  <input type="text" placeholder="제목을 입력하십시오."></input>
                </td>
              </tr>
              <tr>
                <td>
                  제목:{' '}
                  <input type="text" placeholder="제목을 입력하십시오."></input>
                </td>
              </tr>
              <tr>
                <td>내용</td>
              </tr>
              <tr>
                <td>
                  <Input type="text" placeholder="리뷰를 입력하십시오."></Input>
                </td>
              </tr>
              <tr>
                <td>
                  <button>등록</button>
                </td>
              </tr>
            </Table>
          </Div>
        </>
      );
    }
  }
}

export default Weather;
