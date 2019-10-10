import React from 'react'
const Count = () => {
  let start = new Date(2019, 9, 10, 17, 0, 0)
  showCountdown = () => {
    let now = Date.now()
    let elapsed = start.getTime() - now
    msToTime(elapsed)
  }
  msToTime = duration => {
    let seconds = parseInt((duration/1000)%60)
    let minutes = parseInt((duration/(1000*60)%60)
    minutes = (minutes<10)?"0"+minutes:minutes
    seconds = (seconds<10)?"0"+seconds:seconds
    return minutes+':'+seconds
  }
  return(
    <div className="count">
      <p>{showCountdown()}</p>
    </div>
  )
}
export default Count
