declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module "utils/lyric-parse" {
  export class Lyric {
    public _init(): void
    constructor(lrc: string, hanlder: object)
  }
}