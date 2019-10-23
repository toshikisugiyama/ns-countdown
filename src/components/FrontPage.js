import React from 'react'
import Count from './Count'
import text from './../text.json'
const FrontPage = props => {
  if(props.notification===true){
    return <div></div>
  }
  return(
    <div className="frontpage">
      <Count
        countDown={props.countDown}
      />
      <p className="attention">{text.attention}</p>
      <div className="logo-wrapper">
        <img
          src={text.topImage.src}
          alt={text.topImage.alt}
          height={text.topImage.height}
        />
      </div>
      <h1 className="title">{text.title}</h1>
    </div>
  )

}
export default FrontPage
