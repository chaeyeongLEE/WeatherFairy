import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/HomeCss.css';

export default function Home() {
  const initstate = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <hr />

      <p>
        모든 것이 바쁘게 흘러가는 요즘, 문화생활까지 바쁘게 지나쳐버리기
        십상입니다.
        <br /> 자신이 경험한 문화생활과 리뷰, 그리고 생각을 기록하며 삶의 빈
        곳을 채워보는 건 어떨까요?
      </p>
      <br />

      <button
        onClick={() => {
          dispatch({ type: '책등록' });
        }}
        value="book"
      >
        {' '}
        채우기{' '}
      </button>
      <button
        onClick={() => {
          dispatch({ type: '영화등록' });
        }}
        value="movie"
      >
        {' '}
        채우기{' '}
      </button>
      <button
        onClick={() => {
          dispatch({ type: '공연등록' });
        }}
        value="theatre"
      >
        {' '}
        채우기{' '}
      </button>
      <button
        onClick={() => {
          dispatch({ type: '전시등록' });
        }}
        value="exhibition"
      >
        {' '}
        채우기{' '}
      </button>
    </div>
  );
}
