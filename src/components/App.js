import React from 'react'
import Count from './Count'
// import Clock from './Clock'
import text from './../text.json'
const App = () => {
  return(
    <div className="container">
      <Count />
      {/* <Clock /> */}
      <p className="attention">{text.attention}</p>
      <div className="logo-wrapper">
        <img src={text.topImage.file} alt={text.topImage.alt} height={text.topImage.height} />
      </div>
      <h1 className="title">{text.title}</h1>
    </div>
  )
}
export default App
