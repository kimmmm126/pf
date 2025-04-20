import { useState } from "react";
import Modal from "./modal";

interface IItemList {
  idx: number;
  name: string;
  title: string;
  src: string;
}

const imgList: IItemList[] = [
  {
    idx: 1,
    name: "img1",
    title: "img1",
    src: "https://i.pinimg.com/736x/99/50/bd/9950bd831ee78748469c05bfade8fe89.jpg",
  },
  {
    idx: 2,
    name: "img2",
    title: "img2",
    src: "https://i.pinimg.com/736x/1d/5c/f6/1d5cf6334e0e51e553ef4d669d82631f.jpg",
  },
  {
    idx: 3,
    name: "img3",
    title: "img3",
    src: "https://i.pinimg.com/736x/9f/88/d3/9f88d33b2374579bc1126625de790668.jpg",
  },
  {
    idx: 4,
    name: "img4",
    title: "img4",
    src: "https://i.pinimg.com/736x/d3/69/d5/d369d583a4b290d64878d7ce4d61d1dc.jpg",
  },
  {
    idx: 5,
    name: "img5",
    title: "img5",
    src: "https://i.pinimg.com/736x/98/5e/51/985e517dd50e06ed0ee8d25db2eb6c60.jpg",
  },
  {
    idx: 6,
    name: "img6",
    title: "img6",
    src: "https://i.pinimg.com/736x/30/86/19/3086193ed795bc93eac21664b92994d2.jpg",
  },
  {
    idx: 7,
    name: "img7",
    title: "img7",
    src: "https://i.pinimg.com/736x/30/86/19/3086193ed795bc93eac21664b92994d2.jpg",
  },
  {
    idx: 8,
    name: "img8",
    title: "img8",
    src: "https://i.pinimg.com/736x/43/82/36/4382362352276502db049c5358ca404f.jpg",
  },
  {
    idx: 9,
    name: "img9",
    title: "img9",
    src: "https://i.pinimg.com/736x/7c/1c/08/7c1c08348d684a2826c1f8c0828b756a.jpg",
  },
];

const GridItemView = () => {
  const [selectedImg, setSelectedImg] = useState<IItemList | null>(null);
  const onClickImg = (menu: IItemList) => {
    setSelectedImg(menu);
  };

  const onCloseClick = () => {
    setSelectedImg(null);
  };

  return (
    <>
      <ul className="imgDiv">
        {imgList.map((item: IItemList) => (
          <li onClick={() => onClickImg(item)} key={item.idx} className="img">
            <img src={item.src} alt={item.name} />
          </li>
        ))}
      </ul>
      {selectedImg && (
        <Modal
          title={selectedImg.title}
          classNames="selectedImgModal md"
          closeClick={onCloseClick}
        >
          {selectedImg.title && (
            <>
              <div className="contentTop">
                <span>제목: </span>
                <span className="title">{selectedImg.title}</span>
              </div>
              <hr className="divider" />
            </>
          )}

          <div className="contWrap">
            <img src={selectedImg.src} alt={selectedImg.name} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default GridItemView;
