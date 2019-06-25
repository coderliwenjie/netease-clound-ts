const timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g

const STATE_PAUSE = 0
const STATE_PLAYING = 1

interface TagRegMap {
  title: string
  artist: string
  album: string
  offset: string
  by: string
  [key: string]: string
}

const tagRegMap: TagRegMap = {
  title: 'ti',
  artist: 'ar',
  album: 'al',
  offset: 'offset',
  by: 'by',
}

interface Tags {
  [key: string]: string
}

// tslint:disable-next-line
function noop(res: object) {
}

interface Line {
  txt: string,
  time: number
}

export default class Lyric {
  public lines: Line[]
  private lrc: string
  private tags: Tags
  private handler: any
  private state: number
  private curLine: number
  private startStamp: number
  private timer: any
  private pauseStamp: number
  private curNum: number
  constructor(lrc: string, hanlder = noop) {
    this.lrc = lrc
    this.tags = {}
    this.lines = []
    this.handler = hanlder
    this.state = STATE_PAUSE
    this.curLine = 0
    this.startStamp = 0
    this.timer = {}
    this.pauseStamp = 0
    this.curNum = 0
    this._init()
  }

  public play(startTime = 0, skipLast?: boolean) {
    if (!this.lines.length) {
      return
    }
    this.state = STATE_PLAYING

    this.curNum = this._findCurNum(startTime)
    this.startStamp = +new Date() - startTime

    if (!skipLast) {
      this._callHandler(this.curNum - 1)
    }

    if (this.curNum < this.lines.length) {
      clearTimeout(this.timer)
      this._playRest()
    }
  }

  public togglePlay() {
    const now = +new Date()
    if (this.state === STATE_PLAYING) {
      this.stop()
      this.pauseStamp = now
    } else {
      this.state = STATE_PLAYING
      this.play((this.pauseStamp || now) - (this.startStamp || now), true)
      this.pauseStamp = 0
    }
  }

  public stop() {
    this.state = STATE_PAUSE
    clearTimeout(this.timer)
  }

  public seek(offset: number) {
    this.play(offset)
  }

  private _init() {
    this._initTag()

    this._initLines()
  }

  private _initTag() {
    Object.keys(tagRegMap).forEach((tag) => {
      const matches = this.lrc.match(new RegExp(`\\[${tagRegMap[tag]}:([^\\]]*)]`, 'i'))
      this.tags[tag] = matches && matches[1] || ''
    })
  }

  private _initLines() {
    const lines = this.lrc.split('\n')
    const offset = parseInt(this.tags.offset, 10) || 0
    // tslint:disable-next-line
    for (let i = 0; i < lines.length; i++) {
      const cline = lines[i]
      const result: any = timeExp.exec(cline)
      if (result) {
        const txt = cline.replace(timeExp, '').trim()
        if (txt) {
          this.lines.push({
            time: result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10 + offset,
            txt,
          })
        }
      }
    }

    this.lines.sort((a, b) => {
      return a.time - b.time
    })
  }

  private _findCurNum(time: number) {
    for (let i = 0; i < this.lines.length; i++) {
      if (time <= this.lines[i].time) {
        return i
      }
    }
    return this.lines.length - 1
  }

  private _callHandler(i: number) {
    if (i < 0) {
      return
    }
    this.handler({
      txt: this.lines[i].txt,
      lineNum: i,
    })
  }

  private _playRest() {
    const cline = this.lines[this.curNum]
    const delay = cline.time - (+new Date() - this.startStamp)

    this.timer = setTimeout(() => {
      this._callHandler(this.curNum++)
      if (this.curNum < this.lines.length && this.state === STATE_PLAYING) {
        this._playRest()
      }
    }, delay)
  }
}
