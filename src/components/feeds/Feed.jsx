import React from "react";
import ProfileUser1 from "../../assets/images/profile-1.jpg";
import ProfileUser2 from "../../assets/images/profile-2.jpg";
import ProfileUser3 from "../../assets/images/profile-3.jpg";
import ProfileUser4 from "../../assets/images/profile-4.jpg";
import ProfileUser5 from "../../assets/images/profile-5.jpg";

import FeedPhoto1 from "../../assets/images/feed-1.jpg";
import FeedPhoto2 from "../../assets/images/feed-2.jpg";
import FeedPhoto3 from "../../assets/images/feed-3.jpg";
import FeedPhoto4 from "../../assets/images/feed-4.jpg";
import FeedPhoto5 from "../../assets/images/feed-5.jpg";

import FeedCard from "./FeedCard";

function Feed() {
  return (
    <>
      <FeedCard
        feedUserPhoto={ProfileUser1}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto1}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser2}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto2}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser3}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto3}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser4}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto4}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser5}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto5}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser1}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto1}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser2}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto2}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser3}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto3}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser4}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto4}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
      <FeedCard
        feedUserPhoto={ProfileUser5}
        feedUserName="Pooja Phogat"
        feedPhoto={FeedPhoto5}
        feedUserCity="Dubai"
        feedTime="2 hours ago"
        feedCaption="Lorem ipsum dolor sit amet, consectetur."
        feedHashTags="#Travel #Photography #Travel"
      />
    </>
  );
}

export default Feed;
