import React from 'react';
import Clothes2 from '../components/Clothes';
import Header from '../components/Header';
import Weather from '../components/Weather';
import '../styles/Start.css';

export default function Start() {
  

  return (
    <>
      <Header />
         <hr />
          <h1>기온별 옷차림</h1>
    
          <span> <Clothes2 /> </span> 
           <br />
          <span> <Weather /> </span>
        
    </>
  );
}
