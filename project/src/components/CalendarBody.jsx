import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dates from './CalendarDates';
// import axios from 'axios';

function CalendarBody(props) {
  const { totalDate, today, month, year } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  const [holiday, setHoliday] = useState([0]);

  //today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;

  useEffect(() => {}, [month]);
  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={elm}
            findToday={findToday === idx && month === getMonth && findToday}
            month={month}
            year={year}
            holiday={holiday.item}
          ></Dates>
        );
      })}
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export default CalendarBody;
