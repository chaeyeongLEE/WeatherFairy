import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Board from './Board';

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
    setList([...List, inputDate, inputTitle, inputContent]);
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
            {' '}
            <Link to="/board" state={{ data: List }}>
              <button onClick={addItem}>등록</button>
            </Link>
          </td>
        </tr>
      </Table>
      <div>
        <Board List={List} />
      </div>
    </>
  );
}
