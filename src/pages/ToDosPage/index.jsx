import React from 'react'
import ToDosContainer from '../../components/ToDosContainer'
import AddToDoForm from '../../components/AddToDoForm'


export default function TodosPage() {
  return (
    <div> 
      <AddToDoForm />
      <h2>To do list:</h2>
      <ToDosContainer />
    </div>
  )
}