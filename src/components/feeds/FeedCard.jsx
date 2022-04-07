import React from "react";
import "./feedCard.css";

function FeedCard(props) {
  return (
    <>
      <div className="feeds">
        <div className="feed">
          {/* Feed Head Start */}
          <div className="feedHead">
            <div className="feedUser">
              <div className="profile-photo">
                <img src={props.feedUserPhoto} alt="" />
              </div>
              <div className="feedIngo">
                <h3>{props.feedUserName}</h3>
                <small>
                  {props.feedUserCity}, {props.feedTime}{" "}
                </small>
              </div>
            </div>
            <span className="feedEdit">
              <i className="uil uil-ellipsis-h"></i>
            </span>
          </div>
          {/* Feed Header End */}
          {/* Feed Body Start */}
          <div className="feedPhoto">
            <img src={props.feedPhoto} alt="" />
          </div>
          {/* Feed Body End */}
          {/* Feed Footer Start */}
          <div className="feedActionBtns">
            <div className="feedInteractionBtns">
              <span>
                <i class="uil uil-heart"></i>
              </span>
              <span>
                <i class="uil uil-comment-dots"></i>
              </span>
              <span>
                <i class="uil uil-share-alt"></i>
              </span>
            </div>
            <div className="feedBookmarkBtn">
              <span>
                <i class="uil uil-bookmark"></i>
              </span>
            </div>
          </div>
          {/* Feed Footer End */}
          {/* Feed Liked bt start */}
          <div className="feedLikedBy">
            <p>
              Liked by <b>User Name</b> and <b>2,1234 others</b>
            </p>
          </div>
          <div className="feedCaption">
            <p>
              <b>{props.feedUserName}</b> {props.feedCaption}{" "}
              <span className="feedHashTag">{props.feedHashTags}</span>
            </p>
          </div>
          <div className="feedComments text-muted">View all 277 comments</div>
        </div>
      </div>
    </>
  );
}

export default FeedCard;
