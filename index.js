const Notification = props => {
  const {message,url,className} = props;
  const containerClassName = `notifications-container ${className}`
  return(
    <div className = {containerClassName}>
      <img className = "icon" src = {url}/>
      <p className = "para-color ">{message}</p>
    </div>
  )
}

const element = (
  <div className = "container">
    <h1 className = "heading">Notifications</h1>
    <div className = "notification-list">
      <Notification 
      className = "primay-bg-container"
      url = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message = "Information Message"/>
      <Notification 
      className = "success-bg-container"
      url = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message = "Success Message"/>
      <Notification 
      className = "warning-bg-container"
      url = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message = "Warning Message"/>
      <Notification 
      className = "error-bg-container"
      url = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message = "Error Message"/>
    </div>
  </div> 
)

ReactDOM.render(element, document.getElementById('root'))
