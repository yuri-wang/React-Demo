import axios from 'axios'
const API_URL = 'http://localhost:8088/api/user'
var config = {
       headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
       }
};


let actions = {
  getTodos: function() {
    const request = axios.get(`${API_URL}/list`)
    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'GET_TODOS',
          payload: response.data,
        })
      })
    }
  },

  addTodo: function(Nickname) {
    var querystring = require('querystring');
    const request = axios.post(`${API_URL}/add`,querystring.stringify({ Nickname: Nickname }),config)

    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'ADD_TODO',
          Nickname: Nickname,
          UserID: response.data.UserID
        })
      })
    }
  },

  toggleTodo: function(todo) {
    const request = axios.patch(`${API_URL}/${todo.UserID}`, { completed: !todo.completed },config)
    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'TOGGLE_TODO',
          id: todo.UserID
        })
      })
    }
  },
  
  deleteTodo: function(UserID) {
    const request = axios.delete(`${API_URL}/${UserID}`,config)
    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'DELETE_TODO',
          UserID: UserID
        })
      })
    }
  }
}

export default actions
