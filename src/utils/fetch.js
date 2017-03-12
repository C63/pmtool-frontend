const token = sessionStorage.getItem('userToken')

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
      'Authorization' : 'Token ' + token
    },
    body: JSON.stringify(data)
  }
}
