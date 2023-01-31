import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Table = styled.table`
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding: 10px;
  width: 500px;
  background-color: #b6cb8e; ;
`;

const Input = styled.input`
  height: 200px;
  width: 95%;
`;

export default function BoardItem({ list }) {
  const titleStyle = { width: '85%' };
  const [inputTitle, setInputTitle] = useState(list.title);
  const [inputContent, setInputContent] = useState(list.content);
  console.log(list);

  const editContent = () => {
    setInputTitle(inputTitle.current.value);
    setInputContent(inputContent.current.value);
  };
  return (
    <>
      <Div>
        {' '}
        <Table>
          <tr>
            <td>날짜: {list.date}</td>
          </tr>
          <tr>
            <td>
              제목:{' '}
              <input
                type="text"
                value={inputTitle}
                style={titleStyle}
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
                type="text"
                value={inputContent}
                onChange={(event) => setInputContent(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={editContent}>수정</button>
            </td>
          </tr>
        </Table>
      </Div>
    </>
  );
}
