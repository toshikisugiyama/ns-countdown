import React, {useState,useEffect} from 'react'
import showCountdown from './showCountdown'
const Count = () => {
  const [countDown, setCountDown] = useState(showCountdown)
  useEffect(() => {
    let timerID = setInterval(
      () => tick(),
      1000
    )
    return () => {
      clearInterval(timerID)
    }
  })
  const tick = () => {
    setCountDown(showCountdown)
  }
  return(
    <div className="count">
      <p>{countDown}</p>
    </div>
  )
}
export default Count
