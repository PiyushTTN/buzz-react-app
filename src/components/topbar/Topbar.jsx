import React from "react";
import ProfilePhoto from "../ProfilePhoto";
import "./topbar.css";
import TopbarProfilePic from "../../assets/images/profile-1.jpg";

function Topbar() {
  return (
    <>
      <div className="topbarNav">
        <div className="container topbarContainer">
          <h2 className="topbarLogo">BUZZ APP</h2>
          <div className="topbarSearchBar">
            {/* <SearchIcon /> */}
            <i class="uil uil-search"></i>
            <input
              type="search"
              placeholder="Search for creators, inspiration, and projects"
            />
          </div>
          <div className="topbarCreateBtn">
            <label className="btn btn-primary" htmlFor="topbarCreatePost">
              <i class="uil uil-plus"></i>
              Create
            </label>
            {/* <div className="profile-photo">
              <img src={TopbarProfilePic} alt="" />
            </div> */}
            <ProfilePhoto profilePic={TopbarProfilePic} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
