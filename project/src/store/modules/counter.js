const initState = { date: '2023-01-28' };

const CHECK = 'mbti/CHECK';
const NEXT = 'mbti/NEXT';
const RESET = 'mbti/RESET';

export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}

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
