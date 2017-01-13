function generateNextId(todos) {
  return todos.length + 1
}

let todoReducer = function(todos = [], action) {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload
    case 'ADD_TODO':
      return [{
        Nickname: action.Nickname,
        completed: false,
        id: generateNextId(todos),
        UserID: action.UserID
      }, ...todos]
    case 'TOGGLE_TODO':
      return todos.map((todo) => {
        return todo.id ===   action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.UserID !== action.UserID
      })
    default:
      return todos;
  }
}

export default todoReducer
