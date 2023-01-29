import React from 'react';
import styled from 'styled-components';

const DateDiv = styled.div`
  background-color: bisque;
  width: 125px;
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

  return <DateDiv>{dateBuilder(new Date())}</DateDiv>;
}
