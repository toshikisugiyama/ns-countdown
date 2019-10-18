import React,{useState} from 'react'
import text from '../text.json'
const Modal = props => {
  const [showModal, setModal] = useState('modal')
  const [hour, setHour] = useState(props.setHour)
  const [minut, setMinut] = useState(props.setMinut)
  const submitButton = () => {
    setModal('modal-none')
    const setTime = document.getElementById('time').value
    const [setHour, setMinut] = setTime.split(':')
    return {setHour, setMinut}
  }
  const setValue = (hour, minut) => {
    if(hour<10 && minut<10){
      return "0" + hour + ":0" + minut
    }
    if(hour>=10 && minut<10){
      return hour + ":0" + minut
    }
    if(hour<10 && minut>=10){
      return "0" + hour + minut
    }
    return hour + ":" + minut
  }
  return(
    <div className={showModal}>
      <div className="modal-layer"></div>
      <div className="modal-contents">
        <label htmlFor="time">{text.modal.title}</label>
        <input id="time" type="time" value={setValue(hour,minut)} />
        <button onClick={() => submitButton()}>{text.modal.button}</button>
      </div>
    </div>
  )
}
export default Modal
