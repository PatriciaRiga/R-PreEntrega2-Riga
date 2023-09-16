import React, { useState, createContext, useContext } from "react"
import './NotificationService.css'

const Notification = ({ data }) => {
  const notificationClasses = `notification ${data.type === 'success' ? 'success' : 'error'}`

  return (
    <div className={notificationClasses}>
      {data.text}
    </div>
  )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notificationData, setNotificationData] = useState({
    type: 'success',
    text: ''
  })
  
  const setNotification = (type, text) => {
    setNotificationData({ type, text })
    setTimeout(() => {
      setNotificationData(prev => { return { ...prev, text: '' } })
    }, 2000)
  }

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {notificationData.text && <Notification data={notificationData}/> }
      { children }
    </NotificationContext.Provider>
  );
}

export const useNotification = () => {
  return useContext(NotificationContext)
}
