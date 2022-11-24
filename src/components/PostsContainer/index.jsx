import React, { useContext } from 'react'
import Posts from '../Posts'
import { Context } from '../../context'
import s from './index.module.css'

export default function PostsContainer() {
    const { posts } = useContext(Context);
  return (
    <div className={s.posts_container}>
      {
        posts.map(el => <Posts {...el} key={el.id} />)
      }
    </div>
  )
}