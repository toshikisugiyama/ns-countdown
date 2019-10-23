import React,{useState, useEffect} from 'react'
import Modal from './Modal'
import FrontPage from './FrontPage'
import Notification from './Notification'
import text from './../text.json'
const App = () => {
  const [modal, setModal] = useState(false)
  const [hour, setHour] = useState(text.modal.defaultHour)
  const [minut, setMinut] = useState(text.modal.defaultMinut)
  let h, m
  // 時間設定時の表示を整える
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
  let hours = Math.floor(minuts/60)
  let sec, min, hrs
  // カウントダウンの表示を整える
  if(seconds<=0) {
    sec = (('0' + 0))
  } else if(((seconds>0) && (seconds<10)) || ((seconds%60<10) && (seconds>=60))) {
    sec = (('0' + (seconds - Math.floor(seconds / 60)*60)))
  } else if((seconds>=60) || (seconds%60<10)) {
    sec = (seconds - Math.floor(seconds / 60)*60)
  } else {
    sec = seconds
  }
  if(minuts<=0) {
    min = (('0' + 0))
  } else if(((minuts>0) && (minuts<10)) || ((minuts%60<10) && (minuts>=60))) {
    min = (('0' + (minuts - Math.floor(minuts / 60)*60)))
  } else if((minuts>=60) || (minuts%60<10)) {
    min = (minuts - Math.floor(minuts / 60)*60)
  } else {
    min = minuts
  }
  if(hours<=0) {
    hrs = ''
  } else {
    hrs = hours + ':'
  }
  const [countDown, setCountDown] = useState(hrs + min + ':' + sec)
  useEffect(() => {
    if(modal===true){
      document.getElementById('hour').value = h
      document.getElementById('minut').value = m
    }
    if(modal===false){
      const timerID = setInterval(
        () => (setCountDown(hrs + min + ':' + sec)),
        1000
      )
      return () => {
        clearInterval(timerID)
      }
    }
  })
  // OKボタンを押すとモーダルを閉じる
  const handleSubmitButton = () => {
    setModal(false)
  }
  // 時間プラス（24時はより後には設定できないようにする）
  const handlePlussHour = () => {
    if(hour >= 24) {return}
    setHour(hour + 1)
  }
  // 時間マイナス（0時より前には設定できないようにする）
  const handleMinusHour = () => {
    if(hour <= 0) {return}
    setHour(hour - 1)
  }
  // 分プラス（59分より後には設定できないようにする）
  const handlePlussMinut = () => {
    if(minut >= 59) {return}
    setMinut(minut + 1)
  }
  // 分マイナス（0分より前には設定できないようにする）
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
      {/* <FrontPage
        countDown={countDown}
      /> */}
      <Notification
        hour={hour}
        minut={minut}
      />
    </div>
  )
}
export default App
