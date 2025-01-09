"use client";

import InstagramContent from "@/components/instagramContent";
import Modal from "@/components/modal";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface infoDataProps {
  idx: number;
  name: string;
  src: string;
  className?: string;
  content?: ReactNode;
}

const iconData: infoDataProps[] = [
  {
    idx: 1,
    name: "My Coumputer",
    className: "btnMy",
    src: "http://via.placeholder.com/50x50",
  },
  {
    idx: 2,
    name: "Recycle Bin",
    className: "btnRecycle",
    src: "http://via.placeholder.com/50x50",
  },
  {
    idx: 3,
    name: "Internet Explorer",
    className: "btnInternet",
    src: "http://via.placeholder.com/50x50",
  },
  {
    idx: 4,
    name: "My Briefcase",
    className: "btnBriefcase",
    src: "http://via.placeholder.com/50x50",
  },
  {
    idx: 5,
    name: "Instagram.exe",
    className: "btnInstagram",
    content: <InstagramContent />,
    src: "http://via.placeholder.com/50x50",
  },
];

const Page = () => {
  const [infoData, setInfoData] = useState<infoDataProps>();

  const onOpenPopup = (data: infoDataProps) => {
    setInfoData(data);
  };

  const closeClick = () => {
    setInfoData(undefined);
  };
  return (
    <>
      <div className="wrap">
        <div className="iconWrap">
          <ul>
            {iconData.map((data) => {
              return (
                <li key={data.idx} className="icon">
                  <Link
                    href="/"
                    role="button"
                    className={`btnIcon ${
                      data.className ? data.className : ""
                    }`}
                    onClick={() => onOpenPopup(data)}
                  >
                    {data.src && <img src={data.src} alt={data.name} />}
                    {data.name && <p className="btnText">{data.name}</p>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {infoData && (
          <Modal
            closeClick={closeClick}
            title={infoData.name}
            src={infoData.src}
          >
            {infoData.content}
          </Modal>
        )}
      </div>
    </>
  );
};

export default Page;
