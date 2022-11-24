import React from 'react'
import AddUserForm from '../../components/AddUserForm'
import UsersContainer from '../../components/UsersContainer'

export default function UsersPage() {
  return (
    <div>
      <AddUserForm />
      <h2>Users:</h2>
      <UsersContainer />
    </div>
  )
}
