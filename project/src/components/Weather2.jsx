import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
  const API_KEY = 'fa86f0cce4afc4b3fc0e9980c358f696';
  const [position, setPosition] = useState(null);  // 위치 정보를 저장하는 상태
  const [weatherData, setWeatherData] = useState(null);
  const [microData, setMicroData] = useState(null);
  // 1. 사용자 위치 정보 받기 2.날씨받아오기 3. 미세먼지 농도 받아오기 (각각 다른 함수로)
  function userPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setPosition({ latitude: lat, longitude: lon });
    getWeatherMicro(lat, lon);
  }

  function userPositionError() {
    alert("날씨와 위치를 확인할 수 없습니다.");
  }
  function getWeatherMicro(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const microUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    //promise ALL을 사용하여 병렬적으로 데이터 요청
    Promise.all([
      fetch(weatherUrl).then(res=>res.json()),
      fetch(microUrl).then(res=>res.json()),
    ]). then(([weatherRes, microRes])=> {
      setWeatherData({city: weatherRes.name, weather: `${weatherRes.weather[0].main} / ${weatherRes.main.temp}°C`});
      setMicroData({aqi: microRes.list[0].main.aqi})
    })
    .catch((error) => {
      console.log('error:', error);
    });
  }

  // 컴포넌트가 마운트될 때 사용자 위치 정보를 불러옴
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(userPosition, userPositionError);
  }, []);
  return (
    <>
      {weatherData ? (
        <>
          <p>{weatherData.weather}</p> / <span>{weatherData.city}</span>
          <p>{microData.aqi}</p>
        </>
      ) : (
        <p>위치 정보를 가져오는 중입니다</p>
      )}
    </>
  );
}
