import React,{useState} from 'react'
import Count from './Count'
import Modal from './Modal'
import text from './../text.json'
const App = () => {
  const [time, setTime] = useState({
    setHour: 17,
    setMinut: 0
  })
  return(
    <div className="container">
      <Modal setHour={time.setHour} setMinut={time.setMinut} />
      <Count setHour={time.setHour} setMinut={time.setMinut} />
      <p className="attention">{text.attention}</p>
      <div className="logo-wrapper">
        <img src={text.topImage.file} alt={text.topImage.alt} height={text.topImage.height} />
      </div>
      <h1 className="title">{text.title}</h1>
    </div>
  )
}
export default App
