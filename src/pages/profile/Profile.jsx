import React from "react";

import Topbar from "../../components/topbar/Topbar";

import ProfileCard from "./ProfileCard";
import FriendRequests from "./../../components/right-section/FriendRequests";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profileFlex">
        <ProfileCard />
        <div className="profileMessagesSection">
          <FriendRequests />
        </div>
      </div>
    </>
  );
}

export default Profile;
