import axios from 'axios'
import {Toast} from 'vant'
import Vue from 'vue'

Vue.use(Toast)

const options = {
  baseURL: 'http://locahost:3000',
  timeOut: 1000,
}
const instance =  axios.create(options)

instance.interceptors.request.use((config: any): any => {
  return config
}, (error: any): any => {
  return Promise.reject(error)
})
instance.interceptors.response.use((response: any): any => {
  const res = response.data
  if (res.code && res.code !== 0) {
    Toast(`${res.code}:${res.message}`)
    return Promise.reject(res.message)
  }
  return response
}, (error: any): any => {
  const response = error.response
  if (response && response.data && response.data.code) {
    const message = response.data.message
    Toast(response.data.code + ':' + message)
  } else if (response && response.status) {
    if (response.status === 403) {
      // login()
    }
    Toast('error:' + '[HTTP' + response.status + ']')
  } else {
    Toast('Network error. Please check your connection.')
  }
  return Promise.reject(error)
})

export const api = {
  _get: (req: any) => {
    return instance.get(req.url, {params: req.data})
  },
  _post: (req: any) => {
    return instance.post(req.url, {data: req.data})
  },
  _put: (req: any) => {
    return instance.put(req.url, {data: req.data})
  },
  _delete: (req: any) => {
    return instance.delete(req.url, {data: req.data})
  },
}
