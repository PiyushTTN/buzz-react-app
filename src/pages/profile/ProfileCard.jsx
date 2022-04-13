import React from "react";

import "./profileCard.css";
import ProfilePic from "../../assets/images/profile-1.jpg";
import ProfileHeaderPic from "../../assets/images/feed-1.jpg";

function ProfileCard() {
  return (
    <>
      <div className="profileContainer container">
        <div className="profileHeader">
          <div className="profileHeaderPhoto">
            <img src={ProfileHeaderPic} alt="" />
          </div>
          <div className="profilePhoto">
            <img src={ProfilePic} alt="" />
          </div>
        </div>
        <div className="profileBody">
          <h2>John Doe</h2>
          <p className="text-bold">
            lorem ipsunm asd dq qwd qwqwdqwd qwdqwd qwdqd
          </p>
          <p className="text-muted">
            London - England - United Kingdom - 234 Friends
          </p>
        </div>
        <div className="profileFooter">
          <button className="btn btn-primary">
            <i class="uil uil-user-plus"></i> Add Friends
          </button>
          <button className="btn">
            <i class="uil uil-file-export"></i> Visit Website
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
