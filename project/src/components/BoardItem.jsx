import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding: 10px;
`;

const Input = styled.input`
  height: 200px;
  width: 95%;
`;

export default function BoardItem({ list }) {
  console.log(list);
  return (
    <>
      <Table>
        <tr>
          <td>날짜:{list.date}</td>
        </tr>
        <tr>
          <td>제목: {list.title}</td>
        </tr>
        <tr>
          <td>내용</td>
        </tr>
        <tr>
          <td>{list.content}</td>
        </tr>
        <tr>
          <td>
            <button>수정</button>
          </td>
        </tr>
      </Table>
    </>
  );
}
