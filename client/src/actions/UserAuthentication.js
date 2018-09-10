// let apiUrl = "http://localhost:3001/"
let apiUrl = "https://pure-reaches-84133.herokuapp.com/"

const setUserDetails = userDetails => {
  return {
    type: 'SET_USER_DETAILS',
    userDetails
  }
}

export const clearUserDetails = () => {
  return {
    type: 'CLEAR_USER_DETAILS'
  }
}

export const userLogin = (userDetails) => {
  return dispatch => {
    return fetch(`${apiUrl}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userDetails})
    })
    .then(response => response.json())
    .then(userDetails => dispatch(setUserDetails(userDetails)))
  }
}

export const userSignup = (userDetails) => {
  return dispatch => {
    return fetch(`${apiUrl}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userDetails})
    })
    .then(response => response.json())
    .then(userDetails => dispatch(setUserDetails(userDetails)))
  }
}