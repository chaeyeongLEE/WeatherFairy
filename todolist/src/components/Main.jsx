import React, { useState } from 'react'
import TodoBoard from './TodoBoard';

export default function Main() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList]= useState([]);

  //배열형태의 useState

  const addItem = ()=>{
    setTodoList([...todoList, inputValue])
    //...의 뜻은 기존 것을 유지하고 새로 추가한다는 뜻
  }
  

  return (
    <div>
      
      <input value = {inputValue} type="text" 
      onChange={(event)=> setInputValue(event.target.value)} />

      <button onClick={addItem}>추가</button>

    <TodoBoard todoList = {todoList} />

    </div>
  )
}

