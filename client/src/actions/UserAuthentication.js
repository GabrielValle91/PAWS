const setUserDetails = userDetails => {
  return {
    type: 'SET_USER_DETAILS',
    userDetails
  }
}

export const userLogin = (userDetails) => {
  return dispatch => {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userDetails})
    })
    .then(response => response.json())
    .then(userDetails => {
      console.log(userDetails)
      dispatch(setUserDetails(userDetails))
    })
  }
}
