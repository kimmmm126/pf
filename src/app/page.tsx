"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";

import InstagramContent from "@/components/instagramContent";
import Modal from "@/components/modal";

interface IInfoData {
  idx: number;
  name: string;
  src?: string;
  className?: string;
  visible: boolean;
  content?: ReactNode;
}

const INFO_DATA: IInfoData[] = [
  {
    idx: 1,
    name: "My Coumputer",
    className: "btnMy",
    visible: false,
    src: "https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png",
  },
  {
    idx: 2,
    name: "Recycle Bin",
    className: "btnRecycle",
    visible: true,
    src: "https://win98icons.alexmeub.com/icons/png/recycle_bin_full_cool-0.png",
  },
  {
    idx: 3,
    name: "Internet Explorer",
    className: "btnInternet",
    visible: true,
    src: "https://win98icons.alexmeub.com/icons/png/msie1-2.png",
  },
  {
    idx: 4,
    name: "My Briefcase",
    className: "btnBriefcase",
    visible: true,
    src: "https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png",
  },
  {
    idx: 5,
    name: "Instagram.exe",
    className: "btnInstagram",
    visible: true,
    content: <InstagramContent />,
    src: "https://i.ibb.co/dbFj6Hz/ico-instagram.png",
  },
];

const Page = () => {
  const [infoData, setInfoData] = useState<IInfoData>();

  const onOpenPopup = (data: IInfoData) => {
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
            {INFO_DATA.map((data) => {
              return (
                <li key={data.idx} className="icon">
                  <Link
                    href="#"
                    role="button"
                    className={`btn ${data.className ? data.className : ""}`}
                    onClick={() => onOpenPopup(data)}
                  >
                    {data.src && (
                      <div className="btnImg">
                        <img src={data.src} alt={data.name} />
                      </div>
                    )}
                    {data.name && <p className="btnText">{data.name}</p>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {infoData?.visible && (
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
