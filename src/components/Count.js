import React from 'react'
const Count = () => {
  const showCountdown = () => {
    let now = new Date()
    let target = new Date(2019, 9, 10, 17, 0, 0)
    let elapsed = target - now.getTime()
    let seconds = Math.floor(elapsed/1000)
    let minuts = Math.floor(seconds/60)
    let s
    let m
    switch (true) {
      case (minuts<0):
        s = (('0' + 0).slice(-2))
        m = 0
        break
      case ((seconds%60<10) && (seconds>=60)):
        s = (('0' + (seconds - Math.floor(seconds / 60)*60)).slice(-2))
        m = minuts
        break
      case (seconds>=60):
      case (seconds%60<10):
        s = (seconds - Math.floor(seconds / 60)*60)
        m = minuts
        break
      default:
        s = seconds
        m = minuts
        break;
    }
    return m + ':' + s
  }
  return(
    <div className="count">
      <p>{showCountdown()}</p>
    </div>
  )
}
export default Count
