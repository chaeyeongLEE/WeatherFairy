import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Div2 = styled.div`
  display: flex;
  width: 500px;
  border: 2px solid #1c260b;
  border-radius: 0.5em;
  padding: 10px;
  background-color: #b6cb8e5d;
`;

const Div3 = styled.div`
  display: flex;
  width: 500px;
  height: 0.1px;
  border-radius: 0.5em;
  padding: 5px 10px 0px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #1c260b;
`;
//위 오른쪽 아래 왼쪽
const Ul = styled.ul`
  width: 98%;
`;
const InputDate = styled.input`
  border: none;
  border-radius: 15px;
  background-color: #e7f3d3;
  width: 120px;
  text-align: center;
  margin-right: 10px;
`;
const Img = styled.img`
  width: 80px;
  float: right;
  margin-top: -20px;
`;
const InputTitle = styled.input`
  border: none;
  border-radius: 15px;
  background-color: #e7f3d3;
  width: 100%;
  font-size: 1.2em;
`;

const InputContent = styled.textarea`
  border: none;
  border-radius: 10px;
  background-color: #e7f3d3;
  width: 100%;
  font-size: 1.5em;
  resize: none;
`;

const Button = styled.button`
  border: none;
  background-color: #2e3c14;
  color: #e7f3d3;
  font-size: 1em;
  border-radius: 0.5em;
`;

export default function BoardItem({ list }) {
  const [inputContent, setInputContent] = useState(list.content);
  console.log(list);

  const editContent = () => {
    setInputContent(inputContent.current.value);
  };

  const weatherImg = `http://openweathermap.com/img/w/${list.weather}.png`;
  return (
    <>
      <Div>
        <Div2>
          <Ul>
            <li>
              Today's Date:{' '}
              <InputDate
                value={list.date}
                style={{ fontSize: '1em' }}
                type="text"
              />
              <Img src={weatherImg} alt="weather" />
            </li>
            <br />
            <li>
              Title <InputTitle value={list.title} type="text" />
            </li>
            <br />
            <li>
              Diary{' '}
              <InputContent
                value={inputContent}
                rows="10"
                type="text"
                onChange={(event) => setInputContent(event.target.value)}
              ></InputContent>
            </li>
            <li>
              <Button onClick={editContent}>Edit</Button>
            </li>
          </Ul>
        </Div2>
      </Div>
      <Div>
        <Div3></Div3>
      </Div>
    </>
  );
}
