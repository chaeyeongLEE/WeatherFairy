import React, { useState, useEffect } from 'react';
import MicroIndex from './MicroIndex';
import Loading from '../layout/Lodaing';
import Clothes from './Clothes';

export default function Weather({getCity}) {
  const API_KEY = 'fa86f0cce4afc4b3fc0e9980c358f696';
  const MY_AUTH_KEY = 'ij2xlxFnS3m9sZcRZ4t50Q';

  const [position, setPosition] = useState(null);  // 위치 정보를 저장하는 상태
  const [weatherData, setWeatherData] = useState(null);
  const [microData, setMicroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preWeatherDatas, setPreWeatherDatas] = useState(null);

  function preWeatherData() {
    const apiUrl = 'https://apihub.kma.go.kr/api/typ01/url/fct_medm_reg.php?tmfc=0&authKey=ij2xlxFnS3m9sZcRZ4t50Q';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setPreWeatherDatas(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  function userPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setPosition({ latitude: lat, longitude: lon });
    getWeatherMicro(lat, lon);
  }

  function userPositionError() {
    alert("날씨와 위치를 확인할 수 없습니다.");
    setLoading(true);
  }

  function getWeatherMicro(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const microUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    //promise ALL을 사용하여 병렬적으로 데이터 요청
    Promise.all([
      fetch(weatherUrl).then(res=>res.json()),
      fetch(microUrl).then(res=>res.json()),
    ]). then(([weatherRes, microRes])=> {
      setWeatherData({city: weatherRes.name,
        weather: weatherRes.weather[0].main,
        temp: `${weatherRes.main.temp}°C`,
        suntime: weatherRes.sys,
        timeZone: weatherRes.timezone,
      }
        );
      setMicroData({aqi: microRes.list[0].main.aqi});
      setLoading(false);
      getCity(weatherRes.name);
    })
    .catch((error) => {
      console.log('error:', error);
      setLoading(true);
    });
  }

  // 밀리초 단위로 변환한 뒤 타임존을 추가
  const localSunrise = new Date((weatherData.suntime.sunrise + weatherData.timeZone) * 1000);
  // 시간을 보기 좋게 출력
  const hours = localSunrise.getUTCHours();
  const minutes = localSunrise.getUTCMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  console.log('formattedTime:', formattedTime);  // 예: 07:30
 // 컴포넌트가 마운트될 때 사용자 위치 정보를 불러옴
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(userPosition, userPositionError);
  }, []);

  return (
    <>
      {weatherData ? (
        <>
          <p>{weatherData.weather} / {weatherData.city} / 온도는 {weatherData.temp} / 햇빛은 {weatherData.suntime.sunrise} </p>
          <Clothes temp={weatherData.temp} />
          <span>{preWeatherDatas ? preWeatherDatas : 'None'}</span>
        </>
      ) : <Loading />}
      {/*(!loading ? <Loading /> : <p>날씨 정보를 받아오는 데에 오류가 발생했습니다.</p>)*/}
      {/*위 코드는 api 응답값에 분기처리를 해야할 듯함. 지금은 useState를 통해 error가 있느냐없느냐를 통해서 해야할듯*/}
      {microData ? <MicroIndex data={microData} /> : null}
    </>
  );
}
