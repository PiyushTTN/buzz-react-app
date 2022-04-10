import React from "react";
import ProfilePhoto from "./../ProfilePhoto";
import ProfilePic from "../../assets/images/profile-1.jpg";
import "./userMessages.css";

function UsersMessages() {
  return (
    <>
      <div className="msg">
        <ProfilePhoto profilePic={ProfilePic} />
        <div className="msgBody">
          <h5>SenderName</h5>
          <p className="text-muted">Get ur shit together</p>
        </div>
      </div>
    </>
  );
}

export default UsersMessages;
