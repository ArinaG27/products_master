import { getProducts } from '../../requests/products'
import { getUsers } from '../../requests/users';
import { getPosts } from '../../requests/posts';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import PostsPage from '../../pages/PostsPage';
import Nav from '../Nav';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [ products, setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
 

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  useEffect(() => {
    getUsers(setUsers)
  }, []);
 
  useEffect(() => {
    getPosts(setPosts)
  }, []);



  const createNewUser = user => setUsers(prev => [...prev, user]);
  const createNewProduct = product => setProducts(prev => [...prev, product]);

  return (
    <div>
      <Context.Provider value={{ products, users, posts, createNewUser, createNewProduct }}>
        <Nav />
        <Routes>
          <Route path='/products_page' element={<ProductsPage />} />
          <Route path='/users_page' element={<UsersPage />} />
          <Route path='/users_posts' element={<PostsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;

