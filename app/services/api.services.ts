import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'

export const instance = (() =>
  axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }))()

export const request = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data
  }

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  }

  return instance(options).then(onSuccess).catch(onError)
}
