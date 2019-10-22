import React,{useState} from 'react'
import text from '../text.json'
const Modal = props => {
  const modal = props.modal
  let hour
  let minut
  if(props.hour<10 && props.minut<10){
    hour = "0" + props.hour
    minut = "0" + props.minut
  } else if(props.hour>=10 && props.minut<10) {
    hour = props.hour
    minut = "0" + props.minut
  } else if(props.hour<10 && props.minut>=10) {
    hour = "0" + props.hour
    minut = props.minut
  } else {
    hour = props.hour
    minut = props.minut
  }
  console.log(hour + ":" + minut)
  console.log(document.getElementById('hour'))
  console.log(document.getElementById('minut'))
  // const h = document.getElementById('hour').value
  // const m = document.getElementById('minut').value
  if(modal===true){
    return(
      <div>
        <div className="modal-layer"></div>
        <div className="modal-contents">
          <label>
            <p>
              {text.modal.title}
            </p>
            <div className="input">
              <input id="hour" type="number" onChange={props.onChange({hour: 1})} />
              <span>:</span>
              <input id="minut" type="number" onChange={props.onChange({minut: 2})} />
            </div>
          </label>
          <div className="button">
            <button onClick={props.submit}>{text.modal.button}</button>
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
}
export default Modal
