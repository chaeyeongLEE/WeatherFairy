import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dates from './CalendarDates';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

function CalendarBody(props) {
  const diaries = useSelector((state) => state.diaries);
  const dispatch = useDispatch();
  console.log(diaries);
  const { totalDate, today, month, year } = props;
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  const [holiday, setHoliday] = useState([0]);

  //today
  const findToday = totalDate.indexOf(today);
  const getMonth = new Date().getMonth() + 1;

  const writeDiary = () => {
    const action = {
      type: 'WRITE',
      payload: {
        date: '2023-01-28',
        title: '1230',
        content: '123123',
      },
    };

    dispatch(action);
  };

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
      <button
        type="button"
        onClick={() => {
          writeDiary();
        }}
      >
        버튼
      </button>
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export default CalendarBody;
