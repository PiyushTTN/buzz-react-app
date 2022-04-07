import React from "react";
import NotificationPic from "../../assets/images/profile-2.jpg";
import NotificationPopUp from "./NotificationPopUp";

function Popup() {
  return (
    <div>
      <NotificationPopUp
        profilePic={NotificationPic}
        userName="John Doe"
        msg="accepted your friend request"
        timeMsg="2m ago"
      />
      <NotificationPopUp
        profilePic={NotificationPic}
        userName="John Doe"
        msg="accepted your friend request"
        timeMsg="2m ago"
      />
      <NotificationPopUp
        profilePic={NotificationPic}
        userName="John Doe"
        msg="accepted your friend request"
        timeMsg="2m ago"
      />
      <NotificationPopUp
        profilePic={NotificationPic}
        userName="John Doe"
        msg="accepted your friend request"
        timeMsg="2m ago"
      />
    </div>
  );
}

export default Popup;
