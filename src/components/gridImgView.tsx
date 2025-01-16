interface IItemList {
  idx: number;
  name: string;
  src: string;
}

const imgList: IItemList[] = [
  {
    idx: 1,
    name: "img1",
    src: "https://i.pinimg.com/736x/99/50/bd/9950bd831ee78748469c05bfade8fe89.jpg",
  },
  {
    idx: 2,
    name: "img2",
    src: "https://i.pinimg.com/736x/1d/5c/f6/1d5cf6334e0e51e553ef4d669d82631f.jpg",
  },
  {
    idx: 3,
    name: "img3",
    src: "https://i.pinimg.com/736x/9f/88/d3/9f88d33b2374579bc1126625de790668.jpg",
  },
  {
    idx: 4,
    name: "img4",
    src: "https://i.pinimg.com/736x/d3/69/d5/d369d583a4b290d64878d7ce4d61d1dc.jpg",
  },
  {
    idx: 5,
    name: "img5",
    src: "https://i.pinimg.com/736x/98/5e/51/985e517dd50e06ed0ee8d25db2eb6c60.jpg",
  },
  {
    idx: 6,
    name: "img6",
    src: "https://i.pinimg.com/736x/30/86/19/3086193ed795bc93eac21664b92994d2.jpg",
  },
  {
    idx: 7,
    name: "img7",
    src: "https://i.pinimg.com/736x/30/86/19/3086193ed795bc93eac21664b92994d2.jpg",
  },
  {
    idx: 8,
    name: "img8",
    src: "https://i.pinimg.com/736x/43/82/36/4382362352276502db049c5358ca404f.jpg",
  },
  {
    idx: 9,
    name: "img9",
    src: "https://i.pinimg.com/736x/7c/1c/08/7c1c08348d684a2826c1f8c0828b756a.jpg",
  },
];

const GridImgView = () => {
  return (
    <ul className="imgDiv">
      {imgList.map((item) => (
        <li key={item.idx} className="img">
          <img src={item.src} alt={item.name} />
        </li>
      ))}
    </ul>
  );
};

export default GridImgView;
