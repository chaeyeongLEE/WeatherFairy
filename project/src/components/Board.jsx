import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BoardItem from './BoardItem';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div2 = styled.div`
  display: flex;
  width: 500px;
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding: 10px;
  background-color: #b6cb8e;
`;
const Div3 = styled.div`
  display: flex;
  width: 500px;
  height: 0.1px;
  border-radius: 0.5em;
  padding: 5px 10px 0px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #2e3c14;
`;
//위 오른쪽 아래 왼쪽
const Ul = styled.ul`
  width: 98%;
`;

const InputDate = styled.input`
  border: none;
  background-color: #b6cb8e;
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

export default function Board() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [imgData, setImgData] = useState('');
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cityName = 'Seoul';
    const API_KEY = '9ee15f4b701050d4006958620f3cedec';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        setImgData(data.weather[0].icon);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const imgSrc = `http://openweathermap.com/img/w/${imgData}.png`;

  const dateBuilder = (d) => {
    let months = [
      '1',
      '2',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat'];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    return `${year}.${month}.${date}.${day}`;
  };

  //배열형태의 useState

  const addItem = () => {
    var data = {
      date: dateBuilder(new Date()),
      weather: imgData,
      title: inputTitle,
      content: inputContent,
    };
    setList([...List, data]);
  };
  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <Div>
          <Div2>
            <Ul>
              <li>
                Today's Date:{' '}
                <InputDate
                  value={dateBuilder(new Date())}
                  style={{ fontSize: '1em' }}
                  type="text"
                />
                <Img src={imgSrc} alt="weather" />
              </li>
              <br />
              <li>
                Title{' '}
                <InputTitle
                  value={inputTitle}
                  type="text"
                  onChange={(event) => setInputTitle(event.target.value)}
                />
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
                <Button onClick={addItem}>Keep</Button>
              </li>
            </Ul>
          </Div2>
        </Div>
        <Div>
          <Div3></Div3>
        </Div>
        {List.map((list) => {
          return <BoardItem list={list} />;
        })}
      </>
    );
  }
}
