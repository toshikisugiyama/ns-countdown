const showCountdown = () => {
  let now = new Date()
  let target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 40, 0)
  let elapsed = target - now.getTime()
  let seconds = Math.floor(elapsed/1000)
  let minuts = Math.floor(seconds/60)
  let s
  let m
  switch (true) {
    case (seconds<=0):
      s = (('0' + 0).slice(-2))
      break
    case ((seconds<10) && (seconds>0)):
    case ((seconds%60<10) && (seconds>=60)):
      s = (('0' + (seconds - Math.floor(seconds / 60)*60)).slice(-2))
      break
    case (seconds>=60):
    case (seconds%60<10):
      s = (seconds - Math.floor(seconds / 60)*60)
      break
    default:
      s = seconds
      break;
  }
  switch (true) {
    case (minuts<0):
      m = 0
      break
    default:
      m = minuts
      break;
  }
  return m + ':' + s
}
export default showCountdown
