"use client";

import { useState } from "react";

interface UserCountData {
  posts: number;
  followers: number;
  following: number;
}

interface MenuData {
  idx: number;
  name?: string;
  className?: string;
}

const userData: UserCountData = {
  posts: 60,
  followers: 11100,
  following: 569,
};

const menus: MenuData[] = [
  {
    idx: 1,
    name: "total grid",
    className: "btnTotalGrid",
  },
  {
    idx: 2,
    name: "total list",
    className: "btnTotalList",
  },
  {
    idx: 3,
    name: "contact us",
    className: "btnContactUs",
  },
  {
    idx: 4,
    name: "visitor",
    className: "btnVisitor",
  },
  {
    idx: 5,
    name: "home",
    className: "btnHome",
  },
  {
    idx: 6,
    name: "search",
    className: "btnSearch",
  },
  {
    idx: 7,
    name: "photo",
    className: "btnPhoto",
  },
  {
    idx: 8,
    name: "to like",
    className: "btnLike",
  },
];

const InstagramContent = () => {
  // const [profileImage, setProfileImage] = useState<string>(
  //   "https://i.pinimg.com/736x/cf/01/80/cf018054a17ca7d56a91345cca92d7d8.jpg"
  // );

  const profileImage = "https://i.pinimg.com/736x/cf/01/80/cf018054a17ca7d56a91345cca92d7d8.jpg";
  const [isActive, setIsActive] = useState(false);

  const formatNumber = (number: number) => {
    return number.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      notation: "compact",
      compactDisplay: "short",
    });
  };

  const onDropDown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <h2 className="contentTitle">@kimmmm126</h2>
      <div className="divider" />
      <div className="contentTop">
        <div className="profileWrap">
          {profileImage ? (
            <div className="profile">
              <img src={profileImage} alt="" />
            </div>
          ) : (
            <div className="noImage">
              <span className="hid">No Image</span>
            </div>
          )}
        </div>
        <div className="infoWrap">
          <div className="countDiv">
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
          <div className="btnDiv">
            <button className="btnFollowed">+ Following</button>
            <button onClick={onDropDown} className={isActive ? "btnArrow isActive" : "btnArrow"}>
              <span>Arrow</span>
            </button>
          </div>
        </div>
        <div className="messageWrap">
          <p className="title">@kimmmm126</p>
          <a className="github">
            <p>https://kimmmm126.github.com/pf</p>
          </a>
          <p className="e-mail">kimmmm126@gmail.com</p>
        </div>
      </div>
      <div className="divider" />
      <div className="contentBottom">
        <div className="menuWrap menuTop">
          {menus
            .filter((item) => item.idx <= 4)
            .map((item) => (
              <button key={item.idx} className={`btn ` + item.className}>
                {item.name}
              </button>
            ))}
        </div>
        <div className="itemWrap"></div>
        <div className="menuWrap menuBottom">
          {menus
            .filter((item) => item.idx > 4)
            .map((item) => (
              <button key={item.idx} className={`btn ` + item.className}>
                {item.name}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};
export default InstagramContent;
