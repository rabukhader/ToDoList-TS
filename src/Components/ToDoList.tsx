import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Todo from './ToDo';
import TodoForm from './ToDoForm';  


const TodoList = () => {
  const [todos, setTodos] = useState<{
    id:number; text: string; isComplete: boolean;
}[]>([]);
  const [searchText, setSearchText] = useState('');
  const visibleToDos = todos?.filter((todo) => todo.text?.includes(searchText))


  const addTodo = (todo: { text: string }) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId: number, newValue: { text: string }) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id: number) => {
    const removedArr = todos.filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <div>
        <input type="text" className='mb-3 searchinput' value={searchText} onChange={onSearch} placeholder='Search'/>
      </div>
      <Todo
        todos={visibleToDos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}/>
      <Footer todos = {todos} />
    </>
  );
}

export default TodoList;
