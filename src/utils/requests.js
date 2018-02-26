const url = 'https://vinery-be.herokuapp.com'

const handleRespone = (response) => {
  return response.json()
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

const getFood = (foodId) => {
  return fetch(`${url}/api/v1/foods/${foodId}`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getWineCategoriesForFood = (foodId) => {
  return fetch(`${url}/api/v1/foods/${foodId}/wine-categories`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getAllWines = () => {
  return fetch(`${url}/api/v1/wines`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getWine = (wineId) => {
  return fetch(`${url}/api/v1/wines/${wineId}`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getAllWineCategories = () => {
  return fetch(`${url}/api/v1/wine-categories`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getWineCategory = (wineCategoryId) => {
  return fetch(`${url}/api/v1/wine-categories/:id`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getWinesForWineCategory = (wineCategoryId) => {
  return fetch(`${url}/api/v1/wine-categories/${wineCategoryId}/wines`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

const getFoodsForWineCategory = (wineCategoryId) => {
  return fetch(`${url}/api/v1/wine-categories/${wineCategoryId}/foods`)
    .then((response) => handleRespone(response))
    .catch((error) => console.error({ error }))
}

export { getAllWines, getAllFoods, getAllWineCategories, getWinesForWineCategory,
         getFoodsForWineCategory, getWine, getWineCategoriesForFood, getFood,
         getWineCategory}
