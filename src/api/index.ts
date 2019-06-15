import {api} from './init-api'

const personalized = () => {
  const req = {
    url: '/personalized',
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const newSong = () => {
  const req = {
    url: '/personalized/newsong',
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const hotRank = () => {
  const req = {
    url: '/top/list?idx=1',
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const hotSearch = () => {
  const req = {
    url: '/search/hot'
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
export default {
  personalized,
  newSong,
  hotRank,
  hotSearch
}
