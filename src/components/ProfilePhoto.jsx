import React from "react";
// import TopbarProfilePic from "../assets/images/profile-1.jpg";

function ProfilePhoto(props) {
  return (
    <>
      <div className="profile-photo">
        <img src={props.profilePic} alt="" />
      </div>
    </>
  );
}

export default ProfilePhoto;
