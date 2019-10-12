import React, {useState,useEffect} from 'react'
const Clock = () => {
  const [date, setDate] = useState(new Date())
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
    setDate(new Date())
  }
  return(
    <div className="count">
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}
export default Clock
