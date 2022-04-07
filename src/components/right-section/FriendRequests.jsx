import React from "react";
import "./friendRequests.css";
import UserFriendRequests from "./UserFriendRequests";

function FriendRequests() {
  return (
    <>
      <div className="friendRequests">
        <h4>Requests</h4>
        <UserFriendRequests />
        <UserFriendRequests />

        <UserFriendRequests />
        <UserFriendRequests />
      </div>
    </>
  );
}

export default FriendRequests;
