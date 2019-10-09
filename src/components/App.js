import React from 'react'
import text from './../text.json'
const App = () => {
  return(
    <div className="container">
      <h1 className="title">{text.title}</h1>
      <p className="attention"></p>
      <div className="logo-wrapper">
        <img src={text.image_file} alt={text.image_alt} />
      </div>
    </div>
  )
}
export default App
