import React, { useContext } from 'react'
import Users from '../Users'
import { Context } from '../../context'
import s from './index.module.css'

export default function UsersContainer() {
    const { users } = useContext(Context);
  return (
    <div className={s.users_container}>
      {
        users.map(el => <Users {...el} key={el.id} />)
      }
    </div>
  )
}