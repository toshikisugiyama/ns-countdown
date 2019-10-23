import React from 'react'
import text from './../text.json'
const Notification = props => {
  if(props.notification===false){
    return <div></div>
  }
  return(
    <div className="notification">
      <div className="image-wrapper">
        <img
          src={text.notification.image.src}
          alt={text.notification.image.alt}
          height={text.notification.image.height}
        />
      </div>
      <h1 className="title">{text.notification.title}</h1>
      <div className="top">
        <div className="picture">
          <img
            className="notification-mark"
            src={text.notification.notificationImg.src}
            alt={text.notification.notificationImg.alt}
            height={text.notification.notificationImg.height}
          />
          <div>
            <p>{text.notification.picture.text1}</p>
            <p>{text.notification.picture.text2}</p>
          </div>
          <div className="image-wrapper">
            <img
              src={text.notification.picture.image.src}
              alt={text.notification.picture.image.alt}
              height={text.notification.picture.image.height}
            />
          </div>
        </div>
        <div className="question">
          <img
            className="notification-mark"
            src={text.notification.notificationImg.src}
            alt={text.notification.notificationImg.alt}
            height={text.notification.notificationImg.height}
          />
          <div>
            <p>{text.notification.question.text1}</p>
            <p>{text.notification.question.text2}</p>
          </div>
          <div className="image-wrapper">
            <img
              src={text.notification.question.image.src}
              alt={text.notification.question.image.alt}
              height={text.notification.question.image.height}
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="feedback">
          <img
            className="notification-mark"
            src={text.notification.notificationImg.src}
            alt={text.notification.notificationImg.alt}
            height={text.notification.notificationImg.height}
          />
          <div>
            <p>{text.notification.feedback.text1}</p>
            <p>{text.notification.feedback.text2}</p>
          </div>
          <div className="image-wrapper">
            <img
              src={text.notification.feedback.image.src}
              alt={text.notification.feedback.image.alt}
              height={text.notification.feedback.image.height}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Notification
