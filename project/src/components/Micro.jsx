import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MicroIndex from './MicroIndex';
import Loading from '../layout/Lodaing';

export default function Micro() {
  const [microData, setMicroData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lat = '37.5683';
    const lon = '126.9778';
    const API_KEY = 'fa86f0cce4afc4b3fc0e9980c358f696';
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((responseData) => {
        const data = responseData.data;
        setMicroData(data.list[0].main.aqi);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <MicroIndex data={microData} />
      </>
    );
  }
}
