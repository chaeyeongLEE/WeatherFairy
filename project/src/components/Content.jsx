import React from 'react';
import { useState } from 'react';

export default function Content() {
  const [values, setValues] = useState({
    date: '',
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <form>
      <label htmlFor="date">날짜</label>
      <input
        id="date"
        type="date"
        name="date"
        value={values.date}
        onChange={handleChange}
      />

      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <label htmlFor="content">내용</label>
      <input
        id="content"
        type="text"
        name="content"
        value={values.content}
        onChange={handleChange}
      />
      <button type="submit">검색</button>
    </form>
  );
}
