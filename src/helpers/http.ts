/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

const makeHttpRequest = (apiCall: () => any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const req = await apiCall()
      resolve(req.data)
    } catch (e) {
      reject(e)
    }
  })
}

export const getRequest = (path: string, options: any = {}) => {
  return makeHttpRequest(() => axiosInstance.get(path, options))
}
