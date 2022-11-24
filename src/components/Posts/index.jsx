import React from 'react'
import s from './index.module.css'

export default function Posts({ title, body }) {
  return (
    <div className={s.posts_card}>
      <p>Title: { title }</p>
      <p>Body: { body }</p>
    </div>
  )
}