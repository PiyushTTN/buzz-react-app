import React from "react";
import "./messages.css";
import UsersMessages from "./UsersMessages";

function Messages() {
  return (
    <>
      <div className="messages">
        <div className="msgHeading">
          <h4>Messages</h4>
          <i class="uil uil-edit"></i>
        </div>
        {/* Messages Search Bar */}
        <div className="msgSearchBar search-bar">
          <i class="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search Meassages"
            id="msgSearch"
          ></input>
        </div>
        {/* Messages Categories */}
        <div className="msgCategories">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="msgRequests">Requests(2)</h6>
        </div>
        {/* Message */}
        {/* <div className="msg">
          <ProfilePhoto profilePic={ProfilePic} />
          <div className="msgBody">
            <h5>SenderName</h5>
            <p className="text-muted">Get ur shit together</p>
          </div>
        </div> */}
        <UsersMessages />
        <UsersMessages />
        <UsersMessages />
        {/* Message End */}
      </div>
    </>
  );
}

export default Messages;
