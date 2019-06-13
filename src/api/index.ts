import {api} from './init-api'

const personalized = () => {
  const req = {
    url: '/personalized',
  }
  return api._get(req)
}
const newSong = () => {
  const req = {
    url: '/personalized/newsong',
  }
  return api._get(req)
}
export default {
  personalized,
  newSong,
}
