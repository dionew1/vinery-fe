const url = 'https://vinery-be.herokuapp.com/'

const handleRespone = (response) => {
  return resonse.json()
    .then(json => {
      if(!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          ...json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getAllFoods = () => {
  return fetch(`${url}/api/v1/foods`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}
