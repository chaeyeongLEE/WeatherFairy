import React from 'react';
import BoardItem from './BoardItem';

export default function BoardDetail(props) {
  return (
    <>
      {props.List.map((data, index) => (
        <BoardItem item={data} key={index} />
      ))}
      <BoardItem />
    </>
  );
}
