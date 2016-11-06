export function makeLogin (username, password) {
  return fetch('http://localhost:3000/api/v1/test')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}
