import React,{useState, useEffect} from 'react'
import Count from './Count'
import Modal from './Modal'
import text from './../text.json'
const App = () => {
  const [hour, setHour] = useState(17)
  const [minut, setMinut] = useState(0)
  const [modal, setModal] = useState(true)
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
  useEffect(() => {
    if(modal===true){
      document.getElementById('hour').value = h
      document.getElementById('minut').value = m
    }
  })
  const handleSubmitButton = () => {
    setModal(false)
  }
  const handlePlussHour = () => {
    setHour(hour + 1)
  }
  const handleMinusHour = () => {
    setHour(hour - 1)
  }
  const handlePlussMinut = () => {
    setMinut(minut + 1)
  }
  const handleMinusMinut = () => {
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
        hour={hour}
        minut={minut}
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
