import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './ToDoForm';
import { TodoType } from '../type'

interface TodoProps {
  todos: TodoType[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, newValue: TodoType) => void;
}
const initToDo = {
  id: 0,
  text: '',
  isComplete: false
}
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }: TodoProps) => {
  const [edit, setEdit] = useState<TodoType>(initToDo);

  const submitUpdate = (todo: TodoType) => {
    updateTodo(edit.id!, { ...todo, text: todo.text });
    setEdit(initToDo);
  };

  if (edit.id) return <TodoForm edit={edit} onSubmit={submitUpdate} />;

  return (<div>
    {
      todos.map((todo, index) => (
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
              onClick={() => setEdit(todo)}
              className='edit-icon'
            />
          </div>
        </div>
      ))
    }

  </div>)
};

export default Todo;