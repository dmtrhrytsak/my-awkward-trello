import { createContext, useContext } from 'react';

import { useOverlay } from '../hooks/useOverlay';
import Overlay from '../components/Overlay';

type OvelrayContextType = {
  isShown: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
};

const OvelrayContext = createContext<OvelrayContextType>({
  isShown: false,
  showOverlay: () => {},
  hideOverlay: () => {},
});

type OvelrayContextProviderProps = {
  children: React.ReactNode;
};

export const OvelrayContextProvider: React.FC<OvelrayContextProviderProps> = ({
  children,
}) => {
  const { isShown, showOverlay, hideOverlay } = useOverlay();

  return (
    <OvelrayContext.Provider value={{ isShown, showOverlay, hideOverlay }}>
      {children}
      <Overlay />
    </OvelrayContext.Provider>
  );
};

export const useOverlayContext = () => {
  return useContext(OvelrayContext);
};
