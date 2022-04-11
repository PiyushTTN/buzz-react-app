import React from "react";
// import Popup from "../popup/Popup";
// import NotificationPopUp from "../popup/NotificationPopUp";
// import NotificationPic from "../../assets/images/profile-2.jpg";

import EndSidebarBtn from "./EndSidebarBtn";
import "./sidebar.css";
import SidebarProfile from "./SidebarProfile";

function Sidebar() {
  return (
    <>
      <div className="sidebarLeft">
        <SidebarProfile
          SidebarProfileName="Pooja Phogat"
          SidebarProfileTag="@pooja_phogat"
        />
        <div className="sidebar">
          <a className="sidebarMenuItem active" href="/">
            <span>
              <i class="uil uil-home"></i>
            </span>
            <h3>Home</h3>
          </a>
          <a className="sidebarMenuItem" href="/">
            <span>
              <i class="uil uil-compass"></i>
            </span>
            <h3>Explore</h3>
          </a>
          {/* <a className="sidebarMenuItem" id="notifications" href="/">
            <span>
              <i class="uil uil-bell">
                <small className="notification-count">9+</small>
              </i>
            </span>
            <h3>Notifications</h3> */}
          {/* Notification Popup */}
          {/* <div className="notificationPopup">
              <Popup />
            </div> */}
          {/* <NotificationPopUp
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
            /> */}
          {/* </a> */}
          {/* <a className="sidebarMenuItem" id="messages-notification" href="/">
            <span>
              <i class="uil uil-envelope-alt">
                <small className="notification-count">6</small>
              </i>
            </span>
            <h3>Messages</h3>
          </a> */}
          <a className="sidebarMenuItem" href="/">
            <span>
              <i class="uil uil-bookmark"></i>
            </span>
            <h3>Bookmarks</h3>
          </a>
          <a className="sidebarMenuItem" href="/">
            <span>
              <i class="uil uil-chart-line"></i>
            </span>
            <h3>Analytics</h3>
          </a>
          <a className="sidebarMenuItem" href="/">
            <span>
              <i class="uil uil-palette"></i>
            </span>
            <h3>Theme</h3>
          </a>

          <a className="sidebarMenuItem" href="/">
            <span>
              <i class="uil uil-setting"></i>
            </span>
            <h3>Settings</h3>
          </a>
        </div>
        <EndSidebarBtn />
      </div>
    </>
  );
}

export default Sidebar;
