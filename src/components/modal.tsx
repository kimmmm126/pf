import { ReactNode } from "react";

interface IModalProps {
  closeClick: () => void;
  title?: string;
  children?: ReactNode;
  src?: string;
  classNames?: string;
}

const Modal = ({ closeClick, title, children, src, classNames }: IModalProps) => {
  return (
    <div className={`window modal ${classNames}`}>
      <div className="title-bar">
        <div className="title-bar-text">
          {src && <img className="icon" src={src} alt={`${title} 아이콘`} width={16} height={16} />}
          <span className="text">{title}.exe</span>
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={closeClick} />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

export default Modal;
