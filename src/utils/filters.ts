const playFormat = (val: number) => {
  return (val / 10000).toFixed(1) + '万'
}
export {
  playFormat,
}
