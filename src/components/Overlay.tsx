import ReactDOM from 'react-dom';

import { useOverlayContext } from '../contexts/OverlayContext';
import { useDisableBodyScroll } from '../hooks/useDisableBodyScroll';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Overlay: React.FC = () => {
  const { isShown } = useOverlayContext();

  useDisableBodyScroll(isShown);

  if (!isShown) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed top-0 right-0 left-0 bottom-0 h-screen bg-black bg-opacity-60" />,
    modalRoot!
  );
};

export default Overlay;
