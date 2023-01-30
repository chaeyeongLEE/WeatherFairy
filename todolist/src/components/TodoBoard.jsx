//To do List란 제목을 보여주고
//TodoItem 컴포넌트들을 보여주는 것

import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = (props) => {
    return (
        <>
        <h1>Todo List</h1>
        {props.todoList.map((item, index)=> <TodoItem item= {item} key={index} />)}
        <TodoItem />
        </>
    );
};

export default TodoBoard;