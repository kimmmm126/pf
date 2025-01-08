'use client';
import Link from 'next/link';
import { useState } from 'react';

interface InfoDataType {
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
    setOpenPopup(openPopup);
  };
  return (
    <>
      <div className='wrap'>
        <div className='iconWrap'>
          <ul>
            {iconData.map(({ idx, name, src, className }: InfoDataType) => {
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
      </div>
    </>
  );
};

export default Page;
