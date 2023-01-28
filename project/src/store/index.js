// import { combineReducers } from 'redux';
// import filllife from './modules/filllife';

// export default combineReducers({
//   filllife,
// });

//리덕스 통합 관리
//store는 모듈별로 관리하고, 모듈들은 Store 폴더의 index.js에 의해서 통합관리 된다.
// index.js에서 모듈들을 통합관리해보자.

// 리듀서 통합관리
import { combineReducers } from 'redux';
// 각각의 reducer들을 합쳐주는 combineReducer를 이용.
// import mbti from './modules/mbti';

export default combineReducers({});
// 합쳐진 리듀서를 export default로 내보내 준다.
