import React from 'react';
import Calendar from './Calendar';
import CalendarSide from './CalendarSide';
import styled from 'styled-components';
import CalendarHeader from './CalendarHead';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Header = styled.section`
  display: flex;
  float: top;
  flex-direction: column;
  width: 30%;
  border: 2px solid #e4e3e6;
  border-radius: 2px;
`;
const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  float: left;
  border: 2px solid #e4e3e6;
  border-radius: 2px;
`;

const Form2 = styled.section`
  display: flex;
  float: right;
  flex-direction: column;
  width: 30%;
  border: 2px solid #e4e3e6;
  border-radius: 2px;
`;

const defaultState = {
  diaries: {
    '2023-01-28': [
      { title: '책 읽기', content: '내용1' },
      { title: '책 읽기', content: '내용2' },
    ],
    '2023-01-27': [{ title: '책', content: '내용1' }],
  },
};

function reducer(state = defaultState, action) {
  console.log(action);
  if (action.type == 'WRITE') {
    state = Object.assign(state);
    if (!Object.keys(state.diaries).includes(action.payload.date)) {
      state.diaries[action.payload.date] = {
        title: action.payload.title,
      };
    } else {
      state.diaries[action.payload.date].push({ title: action.payload.date });
    }
  }

  console.log(state);
  return state;
}
const store = createStore(reducer);

export default function CalendarPage() {
  return (
    <>
      <Provider store={store}>
        <Header>
          <CalendarHeader />
        </Header>
        <Form>
          <Calendar />
        </Form>
        <Form2>
          <CalendarSide />
        </Form2>
      </Provider>
    </>
  );
}
