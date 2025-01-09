'use client';
import Link from 'next/link';
import { useState } from 'react';

interface infoDataProps {
  idx: number;
  name: string;
  src: string;
  className?: string;
}

const iconData = [
  {
    idx: 1,
    name: 'My Coumputer',
    className: 'btnMy',
    src: 'http://via.placeholder.com/50x50',
  },
  {
    idx: 2,
    name: 'Recycle Bin',
    className: 'btnRecycle',
    src: 'http://via.placeholder.com/50x50',
  },
  {
    idx: 3,
    name: 'Internet Explorer',
    className: 'btnInternet',
    src: 'http://via.placeholder.com/50x50',
  },
  {
    idx: 4,
    name: 'My Briefcase',
    className: 'btnBriefcase',
    src: 'http://via.placeholder.com/50x50',
  },
  {
    idx: 5,
    name: 'Instagram.exe',
    className: 'btnInstagram',
    src: 'http://via.placeholder.com/50x50',
  },
];

const Page = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const onOpenPopup = () => {
    setOpenPopup(true);
  };

  const closeClick = () => {
    setOpenPopup(false);
  };
  return (
    <>
      <div className='wrap'>
        <div className='iconWrap'>
          <ul>
            {iconData.map(({ idx, name, src, className }: infoDataProps) => {
              return (
                <li key={idx} className='icon'>
                  <Link
                    href='/'
                    role='button'
                    className={className ? className + ' btnIcon' : 'btnIcon'}
                    onClick={onOpenPopup}
                  >
                    {src && <img src={src} alt={name} />}
                    {name && <p className='btnText'>{name}</p>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {openPopup && (
          <div className='window modal md'>
            <div className='title-bar'>
              <div className='title-bar-text'>
                <img className='icon' src='http://via.placeholder.com/15x15' alt='' />
                <h2>Instagram.exe</h2>
              </div>
              <div className='title-bar-controls'>
                <button aria-label='Minimize' />
                <button aria-label='Maximize' />
                <button aria-label='Close' onClick={closeClick} />
              </div>
            </div>
            <div className='window-body'>
              <div className='content'>
                <h2 className='contentTitle'>@kimmmm126</h2>
                <div className='divider' />
                <div className='contentDiv'>
                  <div className='profile'></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
