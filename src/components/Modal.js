import React from 'react'
import text from '../text.json'
const Modal = props => {
  const modal = props.modal
  const changePlussHour = props.changePlussHour
  const changeMinusHour = props.changeMinusHour
  const changePlussMinut = props.changePlussMinut
  const changeMinusMinut = props.changeMinusMinut
  const submit = props.submit
  if(modal===true){
    return(
      <div className="modal">
        <div className="modal-layer"></div>
        <div className="modal-contents">
          <p>
            {text.modal.title}
          </p>
          <div className="input">
            <div className="time-container">
              <button id="pluss_hour" onClick={changePlussHour}>+</button>
              <input id="hour" type="text" readOnly />
              <button id="minus_hour" onClick={changeMinusHour}>-</button>
            </div>
            <span>:</span>
            <div className="time-container">
              <button id="pluss_minut" onClick={changePlussMinut}>+</button>
              <input id="minut" type="text" readOnly />
              <button id="minus_minut" onClick={changeMinusMinut}>-</button>
            </div>
          </div>
          <div className="button">
            <button onClick={submit} autoFocus={true} >{text.modal.button}</button>
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
}
export default Modal
