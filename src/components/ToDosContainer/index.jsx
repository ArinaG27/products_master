import React, { useContext } from 'react'
import ToDos from '../ToDos'
import { Context } from '../../context'
import s from './index.module.css'

export default function ToDosContainer() {
    const { todos } = useContext(Context);
  return (
    <div className={s.todos_container}>
      {
        todos.map(el => <ToDos {...el} key={el.id} />)
      }
    </div>
  )
}