
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
  const token = localStorage.getItem('userToken')

  return {
    headers: {
      'Authorization' : 'Token ' + token
    }
  }
}

export const authPost = (data) => {
  const token = localStorage.getItem('userToken')

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
