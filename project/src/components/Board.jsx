import React, { useState } from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.table`
  width: 500px;
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding: 10px;
  background-color: #b6cb8e;
`;

const Input = styled.input`
  height: 200px;
  width: 95%;
`;

const Div2 = styled.div``;

export default function Board() {
  const [inputDate, setInputDate] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [List, setList] = useState([]);

  const titleStyle = { width: '85%' };
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
      <Div>
        <Table>
          <tbody>
            <tr>
              <td>
                날짜:{' '}
                <input
                  value={inputDate}
                  type="date"
                  //placeholder="YYYY-MM-DD"
                  onChange={(event) => setInputDate(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                제목:{' '}
                <input
                  value={inputTitle}
                  style={titleStyle}
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
          </tbody>
        </Table>
      </Div>
      <Div2>
        {List.map((list) => {
          return <BoardItem list={list} />;
        })}
      </Div2>
    </>
  );
}
