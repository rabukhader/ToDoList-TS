import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './ToDoForm';
interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}
interface TodoProps {
  todos: {
  id: number;
  text: string;
  isComplete: boolean;
  }[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, newValue: { text: string }) => void;
}

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }:TodoProps) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    isComplete: ''
  });

  const submitUpdate = (todo: Todo) => {
  updateTodo(edit.id!, todo.text);
    setEdit({
      id: null,
      value: '',
      isComplete: ''
    });
  };

  if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />;

    return todos.map((todo, index) => (
        <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index} >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
        </div>
        <div className='icons'>
        <RiCloseCircleLine
        onClick={() => removeTodo(todo.id)}
        className='delete-icon'
        />
        <TiEdit
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className='edit-icon'
        />
        </div>
        </div>
  ));
};

export default Todo;