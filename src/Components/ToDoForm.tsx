import React, { useState, useRef, FormEvent } from 'react';

interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
  edit?: {
    value: string;
  };
}

const TodoForm = (props :TodoFormProps) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false
    });
    setInput('');
  };

  return (
    <form className='todo-form'>
      {props.edit ? (
        <>
          <input
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
