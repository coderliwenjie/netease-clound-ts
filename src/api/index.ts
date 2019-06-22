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
    url: '/search/hot',
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const searchSuggest = (keyWord: any) => {
  const req = {
    url: `/search/suggest?keywords=${keyWord}&type=mobile`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const search = (keyWord: any) => {
  const req = {
    url: `/search?keywords=${keyWord}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const playList = (id: string) => {
  const req = {
    url: `/playlist/detail?id=${id}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const playListCmt = (id: string) => {
  const req = {
    url: `/comment/playlist?id=${id}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const userDetail = (uid: string) => {
  const req = {
    url: `/user/detail?uid=${uid}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const userDj = (uid: string) => {
  const req = {
    url: `/user/dj?uid=${uid}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const userPlaylist = (uid: string) => {
  const req = {
    url: `/user/playlist?uid=${uid}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const songDetail = (ids: string) => {
  const req = {
    url: `/song/detail?ids=${ids}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
const lyric = (id: string) => {
  const req = {
    url: `/lyric?id=${id}`,
  }
  return api._get(req).then((res) => {
    return res.data
  })
}
export default {
  personalized,
  newSong,
  hotRank,
  hotSearch,
  searchSuggest,
  search,
  playList,
  playListCmt,
  userDetail,
  userDj,
  userPlaylist,
  songDetail,
  lyric,
}
