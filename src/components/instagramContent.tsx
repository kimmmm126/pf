"use client";

import { useState, useEffect } from "react";

interface UserCountData {
  posts: number;
  followers: number;
  following: number;
}

const userData: UserCountData = {
  posts: 60,
  followers: 11100,
  following: 569,
};

const InstagramContent = () => {
  const [profileImage, setProfileImage] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setProfileImage(
        "https://i.pinimg.com/736x/cf/01/80/cf018054a17ca7d56a91345cca92d7d8.jpg"
      );
    }, 1000);
  }, []);

  const formatNumber = (number: number) => {
    return number.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      notation: "compact",
      compactDisplay: "short",
    });
  };

  return (
    <>
      <h2 className="contentTitle">@kimmmm126</h2>
      <div className="contentDiv">
        {profileImage ? (
          <div className="profile">
            <img src={profileImage} alt="" />
          </div>
        ) : (
          <div className="noProfile">No Image</div>
        )}
      </div>
      <div className="divider" />
      <div className="contentDiv">
        <div className="posts">
          <p className="count">{formatNumber(userData.posts)}</p>
          <p className="text">Posts</p>
        </div>
        <div className="followers">
          <p className="count">{formatNumber(userData.followers)}</p>
          <p className="text">Followers</p>
        </div>
        <div className="following">
          <p className="count">{formatNumber(userData.following)}</p>
          <p className="text">Following</p>
        </div>
      </div>
    </>
  );
};
export default InstagramContent;
