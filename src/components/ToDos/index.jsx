import React from 'react'
import s from './index.module.css'

export default function ToDos({ todo, completed }) {

  const todo_status = completed ? 'task done' : 'task not done';

  const status_style = {
    color: completed ? 'green' : 'red'
  }

  return (
    <div className={s.todos_card}>
      <p>To do { todo }</p>
      <p style={status_style}> Status: { todo_status }</p>
    </div>
  )
}