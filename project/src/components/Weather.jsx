import { useState, useEffect } from 'react';

export default function Weather() {
  const API_KEY = 'fa86f0cce4afc4b3fc0e9980c358f696';
  const [position, setPosition] = useState(null);  // 위치 정보를 저장하는 상태
  const [weatherData, setWeatherData] = useState(null);

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
    navigator.geolocation.getCurrentPosition(userPosition, userPositionError);
  }, []);

  return (
    <>
      {weatherData ? (
        <>
          <span>{weatherData.weather}</span> / <span>{weatherData.city}</span>
        </>
      ) : (
        <p>위치 정보를 가져오는 중입니다</p>
      )}
    </>
  );
}
