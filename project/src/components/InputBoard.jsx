import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BoardItem from './BoardItem';

const Table = styled.table`
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding: 10px;
`;

const Input = styled.input`
  height: 200px;
  width: 95%;
`;

export default function InputBoard() {
  const [inputDate, setInputDate] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [List, setList] = useState([]);

  //배열형태의 useState

  const addItem = () => {
    var data = {
      date: inputDate,
      title: inputTitle,
      content: inputContent,
    };
    setList([...List, data]);
  };
  return (
    <>
      <Table>
        <tr>
          <td>
            날짜:{' '}
            <input
              value={inputDate}
              type="text"
              placeholder="YYYY-MM-DD"
              onChange={(event) => setInputDate(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            제목:{' '}
            <input
              value={inputTitle}
              type="text"
              onChange={(event) => setInputTitle(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>내용</td>
        </tr>
        <tr>
          <td>
            <Input
              value={inputContent}
              type="text"
              onChange={(event) => setInputContent(event.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={addItem}>등록</button>
          </td>
        </tr>
      </Table>
      <div>
        {List.map((list) => {
          return <BoardItem list={list} />;
        })}
      </div>
    </>
  );
}
