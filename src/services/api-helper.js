import Settings from '../components/Settings'
import { api } from './api-auth'

const tryCatchApiCall = async (methodString, urlString, data = null) => {
  try {
    let response = await api({ method: methodString, url: urlString, data: data })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getProfile = async () => {
  let response = await tryCatchApiCall("GET", "user/profle")
  return response
}

// export const getProfile = async () => {
//   try {
//     const response = await api.get('/user/profile')
//     return response
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getCards = async () => {
  let response = await tryCatchApiCall("GET", "user/cards")
  return response
}

export const getCard = async (cardId) => {
  let response = await tryCatchApiCall("GET", `user/cards/${cardId}`)
  return response
}

export const newCard = async (card) => {
  let response = await tryCatchApiCall("POST", "user/cards", card)
  return response
}

export const editCard = async (cardId, card) => {
  let response = await tryCatchApiCall("PUT", `user/cards/${cardId}`, card)
  return response
}

// export const getSettings = async () => {
//   let response = await tryCatchApiCall("GET", "user/settings")
//   return response
// }

export const editProfile = async (settings) => {
  let response = await tryCatchApiCall("PUT", `user/profile/edit`, settings)
  return response
}
