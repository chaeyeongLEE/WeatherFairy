import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Diary from './Diary';
import DiaryHeader from './DiaryHeader';

export default function DiaryStyle() {
  const [tempData, setTempData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cityName = 'Seoul';
    const API_KEY = 'personal key';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        setTempData(data.main.temp - 273.15);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const temp = tempData;

  if (loading) {
    return <p>Loading</p>;
  } else if (temp <= 5) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #b1d5f770, #0b221c',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 10) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #96b9da6f, #7850c9',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 12) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #92c96a6d, #297863',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 17) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg,  #b7ac5e6c, #637829',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 20) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #da883b6c, #e5ac00',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 23) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #e860336c, #e5ac00',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 27) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #e1582ad5, #e500c6',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  } else if (temp < 100) {
    return (
      <>
        <DiaryHeader />
        <div
          style={{
            background: 'linear-gradient(135deg, #f34d58d2, #eb4c4c',
            height: '100%',
          }}
        >
          <Diary />
        </div>
      </>
    );
  }
}
