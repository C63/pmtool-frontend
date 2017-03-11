export const fetchPost = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

export const authGet = (token) => {
  return {
    method: 'GET',
    headers: {
      'Authorization' : 'Token ' + token
    }
  }
}
