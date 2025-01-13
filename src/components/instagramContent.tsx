'use client';

import { useState, useEffect } from 'react';

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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProfileImage('https://i.pinimg.com/736x/cf/01/80/cf018054a17ca7d56a91345cca92d7d8.jpg');
    }, 5000);
  }, []);

  const formatNumber = (number: number) => {
    return number.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      notation: 'compact',
      compactDisplay: 'short',
    });
  };

  const onDropDown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <h2 className='contentTitle'>@kimmmm126</h2>
      <div className='divider' />
      <div className='contentDiv contentTop'>
        <div className='profileWrap'>
          {profileImage ? (
            <div className='profile'>
              <img src={profileImage} alt='' />
            </div>
          ) : (
            <div className='noImage'>
              <span className='hid'>No Image</span>
            </div>
          )}
        </div>
        <div className='infoWrap'>
          <div className='countWrap'>
            <div className='posts'>
              <p className='count'>{formatNumber(userData.posts)}</p>
              <p className='text'>Posts</p>
            </div>
            <div className='followers'>
              <p className='count'>{formatNumber(userData.followers)}</p>
              <p className='text'>Followers</p>
            </div>
            <div className='following'>
              <p className='count'>{formatNumber(userData.following)}</p>
              <p className='text'>Following</p>
            </div>
          </div>
          <div className='btnWrap'>
            <button className='btnFollowed'>+ Following</button>
            <button onClick={onDropDown} className={isActive ? 'btnArrow active' : 'btnArrow'}>
              <span>Arrow</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstagramContent;
