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
      <div>
        <div className="modal-layer"></div>
        <div className="modal-contents">
          <p>
            {text.modal.title}
          </p>
          <div className="input">
            <div className="time-container">
              <button onClick={changePlussHour}>+</button>
              <input id="hour" type="text" />
              <button onClick={changeMinusHour}>-</button>
            </div>
            <span>:</span>
            <div className="time-container">
              <button onClick={changePlussMinut}>+</button>
              <input id="minut" type="text" />
              <button onClick={changeMinusMinut}>-</button>
            </div>
          </div>
          <div className="button">
            <button onClick={submit}>{text.modal.button}</button>
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
}
export default Modal
