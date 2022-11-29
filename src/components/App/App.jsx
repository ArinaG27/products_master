import { getProducts } from '../../requests/products'
import { getUsers } from '../../requests/users';
import { getPosts } from '../../requests/posts';
import { getTodos } from '../../requests/todos';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import PostsPage from '../../pages/PostsPage';
import ToDosPage from '../../pages/ToDosPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [ products, setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ todos, setTodos ] = useState([]);
 

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  useEffect(() => {
    getUsers(setUsers)
  }, []);
 
  useEffect(() => {
    getPosts(setPosts)
  }, []);

  useEffect(() => {
    getTodos(setTodos)
  }, []);




  const createNewUser = user => setUsers(prev => [...prev, user]);
  const createNewProduct = product => setProducts(prev => [...prev, product]);
  const createNewToDo = todos => setTodos(prev => [...prev, todos]);


  return (
    <div>
      <Context.Provider value={{ products, users, posts, todos, createNewUser, createNewProduct, createNewToDo }}>
        <Nav />
        <Routes>
          <Route path='/products_page' element={<ProductsPage />} />
          <Route path='/users_page' element={<UsersPage />} />
          <Route path='/users_posts' element={<PostsPage />} />
          <Route path='/users_todos' element={<ToDosPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

