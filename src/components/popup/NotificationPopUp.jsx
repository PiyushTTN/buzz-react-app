import React from "react";
import "./NotificationPopup.css";
function NotificationPopUp(props) {
  return (
    <>
      <div className="notificationPopup">
        <div className="profile-photo">
          <img src={props.profilePic} alt="" />
        </div>
        <div className="notification-body">
          <b>{props.userName}</b> {props.msg}
          <small className="text-muted"> {props.timeMsg} </small>
        </div>
      </div>
    </>
  );
}

export default NotificationPopUp;
