import React from 'react'
import s from './index.module.css'

export default function Users({ firstName, lastName, age }) {
  return (
       
    <div className={s.users_card}>
      <p>First Name: { firstName }</p>
      <p>Last Name: { lastName }</p>
      <p>Age: { age }</p>
    </div>
    
  )
}