import { useState } from 'react';

export function useOverlay() {
  const [isShown, setIsShown] = useState(false);

  const showOverlay = () => {
    setIsShown(true);
  };

  const hideOverlay = () => {
    setIsShown(false);
  };

  return { isShown, showOverlay, hideOverlay };
}
