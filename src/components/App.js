import React,{useState} from 'react'
import Count from './Count'
import Modal from './Modal'
import text from './../text.json'
const App = () => {
  const [time, setTime] = useState({
    hour: 17,
    minut: 0
  })
  const [modal, setModal] = useState(true)
  const submitButton = () => {
    setModal(false)
  }
  return(
    <div className="container">
      <Modal
        modal={modal}
        onChange={setTime}
        submit={submitButton}
        hour={time.hour}
        minut={time.minut}
      />
      <Count
        hour={time.hour}
        minut={time.minut}
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
