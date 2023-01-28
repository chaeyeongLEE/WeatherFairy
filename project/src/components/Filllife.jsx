// const _SAVE = 'DATA_SAVE';

// export const dataSave = (inputData) => ({
//   type: _SAVE,
//   inputData: {
//     title: inputData.title,
//     content: inputData.content,
//   },
// });

// // const TodayTime = () => {
// //   let now = new Date(); // 현재 날짜 및 시간
// //   let todayMonth = now.getMonth() + 1; // 월
// //   let todayDate = now.getDate(); // 일
// //   const week = ['일', '월', '화', '수', '목', '금', '토'];
// //   let dayOfWeek = week[now.getDay()]; // 요일
// //   let hours = now.getHours(); // 시간
// //   let minutes = now.getMinutes(); // 분

// //   return (
// //     todayMonth +
// //     '월' +
// //     todayDate +
// //     '일 ' +
// //     dayOfWeek +
// //     '요일 ' +
// //     hours +
// //     '시' +
// //     minutes +
// //     '분'
// //   );
// // };

// const initialState = {
//   inputData: [
//     {
//       title: '',
//       content: '',
//     },
//   ],
// };

// export default function filllife(state = initialState, action) {
//   switch (action.type) {
//     case _SAVE:
//       console.log(state.inputData);
//       return {
//         data: { TodayTime },
//         inputData: state.inputData.concat({
//           ...action.inputData,
//         }),
//       };
//     default:
//       return state;
//   }
// }

// import React from 'react';

// export default function filllife(state = initialState, action) {
//   return {
//     ...initialState,
//     [action.name]: action.value, // e.target의 name과 value
//   };
// }

// import './App.css';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createRef } from 'react';
const initState = { date: '2023-01-28' };
const newDate = new Date();

function reducer(state = initState, action) {
  if (action.type === 'yes') {
    return { date: action.date };
  }
  return state;
}

const store = createStore(reducer);

function Filllife() {
  return (
    // <Provider>
    <Provider store={store}>
      {/* <App /> */}
      <Balance />
      <Button />
    </Provider>
  );
}

const Balance = () => {
  const date = useSelector((state) => state.date);
  return (
    <div style={{ textAlign: 'center' }}>
      <h3> 날짜 : {date} </h3>
    </div>
  );
};

const Button = () => {
  const input = createRef();
  var a = 1;
  // 4) dispatch 함수
  // react-redux에서 dispatch 함수를 사용하기 위해서는 useDispatch 를 이용해 dispatch 함수를 만들어줘야 한다.
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" ref={input} />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'yes', date: input.current.value });
        }}
      >
        날짜
      </button>
    </div>
  );
};

export default Filllife;
