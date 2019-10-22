import React,{useState, useEffect} from 'react'
import Count from './Count'
import Modal from './Modal'
import text from './../text.json'
const App = () => {
  const [modal, setModal] = useState(true)
  const [hour, setHour] = useState(17)
  const [minut, setMinut] = useState(0)
  let h, m
  if(hour<10 && minut<10){
    h = "0" + hour
    m = "0" + minut
  } else if(hour>=10 && minut<10) {
    h = hour
    m = "0" + minut
  } else if(hour<10 && minut>=10) {
    h = "0" + hour
    m = minut
  } else {
    h = hour
    m = minut
  }
  let now = new Date()
  let target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minut, 0)
  let elapsed = target - now.getTime()
  let seconds = Math.floor(elapsed/1000)
  let minuts = Math.floor(seconds/60)
  let sec, min
  if(seconds<=0) {
    sec = (('0' + 0).slice(-2))
  } else if(((seconds<10) && (seconds>0)) || ((seconds%60<10) && (seconds>=60))) {
    sec = (('0' + (seconds - Math.floor(seconds / 60)*60)).slice(-2))
  } else if((seconds>=60) || (seconds%60<10)) {
    sec = (seconds - Math.floor(seconds / 60)*60)
  } else {
    sec = seconds
  }
  if(minuts<0){
    min=0
  } else {
    min = minuts
  }

  const [countDown, setCountDown] = useState(min + ':' + sec)
  useEffect(() => {
    if(modal===true){
      document.getElementById('hour').value = h
      document.getElementById('minut').value = m
    }
    if(modal===false){
      const timerID = setInterval(
        () => tick(),
        1000
      )
      return () => {
        clearInterval(timerID)
      }
    }
  })
  const tick = () => {
    setCountDown(CountDown(h,m))
  }
  const CountDown = () => {
    return min + ':' + sec
  }
  const handleSubmitButton = () => {
    setModal(false)
  }
  const handlePlussHour = () => {
    if(hour >= 24) {return}
    setHour(hour + 1)
  }
  const handleMinusHour = () => {
    if(hour <= 0) {return}
    setHour(hour - 1)
  }
  const handlePlussMinut = () => {
    if(minut >= 59) {return}
    setMinut(minut + 1)
  }
  const handleMinusMinut = () => {
    if(minut <= 0) {return}
    setMinut(minut - 1)
  }
  return(
    <div className="container">
      <Modal
        modal={modal}
        changePlussHour={handlePlussHour}
        changeMinusHour={handleMinusHour}
        changePlussMinut={handlePlussMinut}
        changeMinusMinut={handleMinusMinut}
        submit={handleSubmitButton}
      />
      <Count
        countDown={countDown}
      />
      <p className="attention">{text.attention}</p>
      <div className="logo-wrapper">
        <img
          src={text.topImage.file}
          alt={text.topImage.alt}
          height={text.topImage.height}
        />
      </div>
      <h1 className="title">{text.title}</h1>
    </div>
  )
}
export default App
