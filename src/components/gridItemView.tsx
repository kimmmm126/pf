import { useState } from "react";
import Modal from "./modal";

import { IItemList } from "../types/IItemList";
import { itemList } from "data/itemList";

const GridItemView = () => {
  const [selectedItem, setselectedItem] = useState<IItemList | null>(null);
  const onClickImg = (menu: IItemList) => {
    setselectedItem(menu);
  };

  const onCloseClick = () => {
    setselectedItem(null);
  };

  return (
    <>
      <ul className="imgDiv">
        {itemList.map((item: IItemList) => (
          <li onClick={() => onClickImg(item)} key={item.idx} className="img">
            <img src={item.thumbImg} alt={item.title} />
          </li>
        ))}
      </ul>
      {selectedItem && (
        <Modal title={selectedItem.title} classNames="selectedItemModal lg" closeClick={onCloseClick}>
          {selectedItem.title && (
            <>
              <div className="contentTop">
                <span>Title: </span>
                <span>{selectedItem.title}</span>
              </div>
              <hr className="divider" />
              <div className="contentBody" dangerouslySetInnerHTML={{ __html: selectedItem.content }} />
            </>
          )}
        </Modal>
      )}
    </>
  );
};

export default GridItemView;
