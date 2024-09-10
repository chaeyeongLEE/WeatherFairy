import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
  const API_KEY = 'fa86f0cce4afc4b3fc0e9980c358f696';
  const [position, setPosition] = useState(null);  // 위치 정보를 저장하는 상태
  const [weatherData, setWeatherData] = useState(null);
  const [microData, setMicroData] = useState(null);
  // 1. 사용자 위치 정보 받기 2.날씨받아오기 3. 미세먼지 농도 받아오기 (각각 다른 함수로)
  function userPositions(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setPosition({ latitude: lat, longitude: lon });
    console.log('position:', position);

    //위치정보가 업데이트된 뒤에 날씨 정보 받기
    getWeather(lat, lon);
    // getMicroInfo(lat, lon);
  }

  function getWeather(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    axios.get(weatherUrl).then((responseData) => {
      const data = responseData.data;
      setWeatherData({
        city: data.name,
        weather: `${data.weather[0].main} / ${data.main.temp}°C`
      });
    })
    .catch((error) => console.log(error));
  }

  function getMicroInfo(lat, lon) {
    const microUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    axios.get(microUrl).then((responseData) => {
        const data = responseData.data;
        setMicroData(data.list[0].main.aqi);
      })
      .catch((error) => console.log(error));
  }

  function userPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setWeatherData({
          city: data.name,
          weather: `${data.weather[0].main} / ${data.main.temp}°C`
        });
        setPosition({ latitude: lat, longitude: lon });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function userPositionError() {
    alert("날씨와 위치를 확인할 수 없습니다.");
  }

  // 컴포넌트가 마운트될 때 사용자 위치 정보를 불러옴
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(userPositions, userPositionError);
  }, []);

  return (
    <>
      {weatherData ? (
        <>
          <p>{weatherData.weather}</p> / <span>{weatherData.city}</span>
          {/*<p>{weatherData}</p>*/}
        </>
      ) : (
        <p>위치 정보를 가져오는 중입니다</p>
      )}
    </>
  );
}
