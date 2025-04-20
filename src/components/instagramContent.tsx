"use client";

import { ReactNode, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import GridItemView from "@/components/gridItemView";
import Modal from "@/components/modal";
interface IUserData {
  posts: number;
  followers: number;
  following: number;
}

interface IContentData {
  idx: number;
  name?: string;
  className?: string;
  content?: ReactNode;
}

interface IFollowersData {
  idx: number;
  name: string;
  src?: string;
  comment?: string;
}

const USER_DATA: IUserData = {
  posts: 60,
  followers: 11100,
  following: 569,
};

const CONTENT_DATA: IContentData[] = [
  {
    idx: 1,
    name: "total grid",
    className: "btnTotalGrid",
    content: <GridItemView />,
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
    name: "photo",
    className: "btnPhoto",
  },

  {
    idx: 7,
    name: "speach",
    className: "btnSpeach",
  },
  {
    idx: 8,
    name: "to like",
    className: "btnLike",
  },
];

const FOLLOWERS_DATA: IFollowersData[] = [
  {
    idx: 1,
    name: "이주연",
    comment: "작업하기 편했다",
  },
  {
    idx: 2,
    name: "김영훈",
  },
  {
    idx: 3,
    name: "이상연",
  },
  {
    idx: 4,
    name: "지창민",
    comment: "기획의 의도대로 작업을 해주었다",
  },
  {
    idx: 5,
    name: "김선우",
  },
  {
    idx: 6,
    name: "최찬희",
  },
];

const InstagramContent = () => {
  // const [profileImage, setProfileImage] = useState<string>(
  //   "https://i.pinimg.com/736x/28/47/c7/2847c7f42e7f0d992242183bf0fa3ee5.jpg"
  // );
  const profileImage =
    "https://i.pinimg.com/736x/28/47/c7/2847c7f42e7f0d992242183bf0fa3ee5.jpg";
  const [isActive, setIsActive] = useState(false);
  const [contentData, setContentData] = useState<IContentData>(CONTENT_DATA[0]);
  const [followersData, setFollowersData] =
    useState<IFollowersData[]>(FOLLOWERS_DATA);
  const contentHeightRef = useRef<HTMLDivElement | null>(null);

  const formatNumber = (n: number) => {
    return n.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      notation: "compact",
      compactDisplay: "short",
    });
  };

  const onDropDown = () => {
    setIsActive(!isActive);
  };

  // 사용자 메뉴 클릭 이벤트 핸들러
  const onClickMenu = (menu: IContentData) => {
    setContentData(menu); // 선택된 메뉴가 담김
  };

  // 팔로워 슬라이드 모달 팝업 닫기
  const onCloseClick = (idx: number) => {
    setFollowersData(followersData.filter((item) => item.idx !== idx));
  };

  // 팔로워 슬라이드 파라미터
  const params = {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    modules: [FreeMode],
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
              <p className="count">{formatNumber(USER_DATA.posts)}</p>
              <p className="text">Posts</p>
            </div>
            <div className="followers">
              <p className="count">{formatNumber(USER_DATA.followers)}</p>
              <p className="text">Followers</p>
            </div>
            <div className="following">
              <p className="count">{formatNumber(USER_DATA.following)}</p>
              <p className="text">Following</p>
            </div>
          </div>
          <div className="btnDiv">
            <button className="btnFollowed">+ Following</button>
            <button
              onClick={onDropDown}
              className={isActive ? "btnArrow isActive" : "btnArrow"}
              disabled={followersData.length == 0 ? true : false}
            >
              <span>Arrow</span>
            </button>
          </div>
        </div>
        {isActive && followersData.length > 0 && (
          <div className="infoSlideWrap">
            <Swiper {...params}>
              {followersData.map(
                ({ idx, src, name, comment }: IFollowersData) => (
                  <SwiperSlide key={idx}>
                    <Modal
                      classNames="followersModal"
                      closeClick={() => onCloseClick(idx)}
                    >
                      {src ? (
                        <div className="profile">
                          <img src={src} alt={name} />
                        </div>
                      ) : (
                        <div className="noImage">
                          <span className="hid">No Image</span>
                        </div>
                      )}
                      <div className="txt">
                        <strong className="tit">{name}</strong>
                        <p className="comment">{comment}</p>
                      </div>
                    </Modal>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        )}
        <div className="messageWrap">
          <p className="title">@kimmmm126</p>
          <p className="github">
            <a href="https://github.com/kimmmm126/pf" target="_blank">
              https://github.com/kimmmm126/pf
            </a>
          </p>
          <p className="e-mail">qwert850919@gmail.com</p>
        </div>
      </div>
      <div className="divider" />
      <div className="contentBottom">
        <div className="menuWrap menuTop">
          {CONTENT_DATA.slice(0, 4).map((item) => (
            <button
              key={item.idx}
              className={`btn ` + item.className}
              onClick={() => onClickMenu(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="itemWrap" ref={contentHeightRef}>
          {contentData.content ? (
            contentData.content
          ) : (
            <div
              className="noContent"
              style={{ height: contentHeightRef.current?.clientHeight }}
            >
              <p className="text">내용이 없습니다.</p>
            </div>
          )}
        </div>
        <div className="menuWrap menuBottom">
          {CONTENT_DATA.slice(4, 8).map((item) => (
            <button
              key={item.idx}
              className={`btn ${item.className}`}
              onClick={() => onClickMenu(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default InstagramContent;
