import React from "react";
import ProfilePhoto from "../ProfilePhoto";
import ProfilePic from "../../assets/images/profile-1.jpg";
import "./postHeader.css";

function PostHeader() {
  return (
    <>
      <form className="postHeaderCreatePost">
        <ProfilePhoto profilePic={ProfilePic} />
        <input
          type="text"
          placeholder="What's on your mind"
          id="postHeaderCreatePost"
        ></input>
        <input
          type="submit"
          value="Post"
          id="postHeaderPostButton"
          className="btn btn-primary"
        ></input>
      </form>
    </>
  );
}

export default PostHeader;
