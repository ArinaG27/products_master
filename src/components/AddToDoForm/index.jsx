import React, { useContext } from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'
import { addTodos } from '../../requests/todos';
import { Context } from '../../context'

export default function AddToDoForm() {

  const { createNewToDo } = useContext(Context);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const submit = data => {
    console.log(data);
    addTodos(data, createNewToDo)
  };

  const toDoRegister = register('todo', {
    required: 'Field "to do" required'
  });



  return (
    <div>
      <form className={s.add_todo_form} onSubmit={handleSubmit(submit)}>
        <input 
          type='text' 
          name='todo' 
          placeholder='To do' 
          {...toDoRegister} 
        />

        <button>Add to do list</button>
      </form>

      <div>
        <div>
          { errors?.todo && <p>{ errors?.todo?.message }</p> }
        </div>
        
      </div>
    </div>
  )
}