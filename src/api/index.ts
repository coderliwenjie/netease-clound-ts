import {api} from './init-api'

const personalized = () => {
  const req = {
    url: '/personalized',
  }
  return api._get(req)
}
export {
  personalized,
}
