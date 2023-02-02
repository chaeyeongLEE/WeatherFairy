import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MicroIndex from './MicroIndex';

export default function Micro() {
  const [microData, setMicroData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lat = '37.5683';
    const lon = '126.9778';
    const API_KEY = '9ee15f4b701050d4006958620f3cedec';
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((responseData) => {
        const data = responseData.data;
        setMicroData(data.list[0].main.aqi);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <MicroIndex data={microData} />
      </>
    );
  }
}
