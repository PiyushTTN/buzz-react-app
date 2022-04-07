import React from "react";
import SidebarProfilePic from "../../assets/images/profile-1.jpg";
import ProfilePhoto from "../ProfilePhoto";
import "./SidebarProfile.css";

function SidebarProfile(props) {
  return (
    <>
      <a className="sidebarProfile" href="/">
        <ProfilePhoto profilePic={SidebarProfilePic} />
        <div className="sidebarHandle">
          <h4>{props.SidebarProfileName}</h4>
          <p className="text-muted">{props.SidebarProfileTag}</p>
        </div>
      </a>
    </>
  );
}

export default SidebarProfile;
