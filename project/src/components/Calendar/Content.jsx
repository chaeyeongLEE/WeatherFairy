// import React from 'react';
// import { useState } from 'react';
// import '../styles/Content.css';

// //state로 모두 저장은 해야됨.

// export default function Content() {
//   const [values, setValues] = useState({
//     date: '',
//     title: '',
//     content: '',
//   });
//   const dateValue = document.getElementById('date');
//   const titleValue = document.getElementById('date');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//     console.log(dateValue);
//   };

//   return (
//     <form>
//       <label>날짜</label>
//       <input
//         id="date"
//         type="date"
//         name="date"
//         value={values.date}
//         onChange={handleChange}
//       />
//       <br />

//       <label>제목</label>
//       <input
//         id="title"
//         type="text"
//         name="title"
//         value={setValues(values.title)}
//         onChange={handleChange}
//       />
//       <br />

//       <label>내용</label>
//       <input
//         id="content"
//         type="text"
//         name="content"
//         value={values.content}
//         onChange={handleChange}
//       />
//       <br />
//       <button type="submit">등록하기</button>
//     </form>
//   );
// }
