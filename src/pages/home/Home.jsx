import React from "react";
<<<<<<< HEAD
import Feed from "../../components/feeds/Feed";
=======
import Feed from "../../components/feeds/Feed"
>>>>>>> 4859147efb0b9ac16dbc2b1af8ddb3d99f34296d
import PostHeader from "../../components/post header/PostHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import Messages from "./../../components/right-section/Messages";
import FriendRequests from "../../components/right-section/FriendRequests";
function Home() {
  return (
    <>
      <Topbar />
      <div id="main-section">
        <div className="container">
          <Sidebar />
          <div className="middleSection">
            <PostHeader />
            <Feed />
          </div>
          <div className="rightSection">
            <Messages />
            <FriendRequests />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
