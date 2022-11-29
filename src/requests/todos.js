export const getTodos = (callback) => {
    fetch('https://dummyjson.com/todos')
      .then(resp => resp.json())
      .then(json => callback(json.todos))
  }

  export const addTodos = (body_obj, callback) => {
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body_obj)
    })
      .then(resp => resp.json())
      .then(json => callback(json))
  }