// root of api files?
// takes care of login/signup
// responsible for headers
// imports api-config

import apiUrl from "./api-config"
import axios from 'axios'

let storageString = "Productivity App"

export const api = axios.create({
  baseURL: apiUrl
})

export const isBrowser = () => typeof window !== "undefined"

export const getLoggedInUser = () =>
  isBrowser() && window.localStorage.getItem(storageString)
    ? JSON.parse(window.localStorage.getItem(storageString))
    : {}

const setUser = (user) => {
  window.localStorage.setItem(storageString, JSON.stringify(user))
}

export const handleLogin = async ({ email, password }, callback) => {
  try {
    let response = await axios.post(`${apiUrl}login`, {
      email: email,
      password: password,
    })
    if (response.status === 200) {
      console.log(api)
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
      setUser({
        token: response.data.token,
        name: response.data.name,
        id: response.data.id,
      })
      callback()
    }
  } catch (error) {
    console.log(error)
  }
}

export const handleSignup = async ({ email, password }, callback) => {
  try {
    let response = await axios.post(`${apiUrl}signup`, {
      email: email,
      password: password,
    })
    if (response.status === 200) {
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
      setUser({
        token: response.data.token,
        name: response.data.name,
        id: response.data.name,
      })
      callback()
    }
  } catch (error) {
    console.log(error)
  }
}

export const isLoggedIn = () => {
  const user = getLoggedInUser()
  api.defaults.headers.common.authorization = `Bearer ${user.token}`
  return !!user.token
}

export const logout = async (callback) => {
  await setUser({})
  api.defaults.headers.common.authorization = ""
  callback()
}
