import React,{useState} from 'react'
import text from '../text.json'
const Modal = () => {
  const [showModal, setModal] = useState('modal')
  return(
    <div className={showModal}>
      <div className="modal-layer"></div>
      <div className="modal-contents">
        <label htmlFor="time">{text.modal.title}</label>
        <input id="time" type="time" min="9:00" max="18:00"/>
        <button onClick={() => {setModal('modal-none')}}>{text.modal.button}</button>
      </div>
    </div>
  )
}
export default Modal
