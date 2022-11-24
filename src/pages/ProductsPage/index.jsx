import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import AddProductForm from '../../components/AddProductForm'

export default function ProductsPage() {
  return (
    <div>
      <AddProductForm />
      <h2>Products:</h2>
      <ProductsContainer />
    </div>
  )
}