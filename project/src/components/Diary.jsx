import React from 'react';
import styled from 'styled-components';
import Board from './Board';
// import { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Div = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export default function Diary() {
  function reducer(state = [], action) {
    if (action.type === 'diary') {
      return [...state, action.payload];
    }
    return state;
  }
  const store = createStore(reducer);
  // const [list, setList] = useState([]);
  return (
    <>
      <Provider store={store}>
        <Div>
          <Board />
        </Div>
      </Provider>
    </>
  );
}
