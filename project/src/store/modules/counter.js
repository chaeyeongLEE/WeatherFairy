// 초기 상태 설정
const initState = { date: '2023-01-28' };

// const initState = {
//   mbtiResult: '',
//   page: 0, // 0: 인트로 페이지, 1 ~ n: 선택 페이지, n+1: 결과 페이지
// };

//액션 타입 설정
const CHECK = 'mbti/CHECK';
const NEXT = 'mbti/NEXT';
const RESET = 'mbti/RESET'; //인자를 받을 필요는 없고 0으로 다시 돌아가면 됨.

//액션 생성함수 설정
// payload -> 선택에 다른 결과 값 result 전달 필요
export function check(result) {
  //외부에서 사용해야하므로 export 설정
  return {
    type: CHECK, //타입부터 무조건 반환(반드시 타입 전달 필요)
    payload: { result }, //데이터가 필요한 경우 payload 에 담아서 전달
  };
}

// 리듀서(rootdefault에 나가야하니 export로.)
export default function reducer(state = initState, action) {
  const newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let date = newDate.getDate();

  const newState = { ...state };
  if (action.type === 'yes') {
    newState.date = { date: `${year}-${month}-${date}` };
  }
  return newState;
}

// export default function mbti(state = initState, action) {
//   switch (
//     action.type //액션생성함수에서 type만 볼 것이다.
//   ) {
//     case CHECK: //컴포넌트에서 결과를 받아다가 써야하는 CHECK
//       return {
//         ...state, //...state=내가 건들지않을 애들
//         mbtiResult: state.mbtiResult + action.payload.result,
//       };
//     case NEXT:
//       return {
//         ...state,
//         page: state.page + 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         page: 0,
//         mbtiResult: '', //mbti 초기화
//       };
//     default:
//       return state;
//   }
// }
