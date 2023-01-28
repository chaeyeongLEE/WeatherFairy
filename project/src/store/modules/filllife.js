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

import React from 'react';

export default function filllife(state = initialState, action) {
  return {
    ...initialState,
    [action.name]: action.value, // e.target의 name과 value
  };
}
