const token = localStorage.getItem('userToken')

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

export const authGet = () => {
  return {
    headers: {
      'Authorization' : 'Token ' + token
    }
  }
}

export const authPost = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : 'Token ' + token
    },
    body: JSON.stringify(data)
  }
}
