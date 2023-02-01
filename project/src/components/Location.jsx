import React from 'react';
import styled from 'styled-components';

const DateDiv = styled.div`
  background-color: #c2d0b9;
  width: 420px;
  display: relative;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 2px #4a762f;
  font-size: 20px;
  margin-top: -17px;
  margin-right: -625px;
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
`;

export default function Location() {
  const dateBuilder = (d) => {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat'];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    return `${day} ${date} ${month} ${year}`;
  };

  return <DateDiv> ♥ --- {dateBuilder(new Date())} --- ♥ </DateDiv>;
}
