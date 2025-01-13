import { ReactNode } from 'react';

interface ModalProps {
  closeClick: () => void;
  title: string;
  children?: ReactNode;
  src?: string;
}

const Modal = ({ closeClick, title, children, src }: ModalProps) => {
  return (
    <div className='window modal md'>
      <div className='title-bar'>
        <div className='title-bar-text'>
          <img className='icon' src={src} alt='' />
          <h2 className='title'>{title}</h2>
        </div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize' />
          <button aria-label='Maximize' />
          <button aria-label='Close' onClick={closeClick} />
        </div>
      </div>
      <div className='window-body'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
