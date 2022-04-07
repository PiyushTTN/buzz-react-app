import React from "react";
import ProfilePic from "../../assets/images/profile-13.jpg";

function UserFriendRequests() {
  return (
    <>
      <div className="request">
        <div className="friendRequestsInfo">
          <div className="profile-photo">
            <img src={ProfilePic} alt="" />
          </div>
          <div>
            <h5>Sender</h5>
            <p className="text-muted">8 mutual friends</p>
          </div>
        </div>
        <div className="friendRequestsAction">
          <button className="btn btn-primary">Accept</button>
          <button className="btn">Decline</button>
        </div>
      </div>
    </>
  );
}

export default UserFriendRequests;
