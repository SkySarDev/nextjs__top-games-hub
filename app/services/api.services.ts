import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'

export const instance = (() =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }))()

export const request = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data
  }

  const onError = (error: AxiosError) => {
    const status = error.response?.status || 500
    const message = error.response?.statusText || 'Unknown error'

    return Promise.reject({
      status,
      message,
    })
  }

  return instance(options).then(onSuccess).catch(onError)
}
