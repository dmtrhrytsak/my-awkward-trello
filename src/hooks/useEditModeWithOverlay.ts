import { useState } from 'react';

import { useOverlayContext } from '../contexts/OverlayContext';

export function useEditModeWithOverlay() {
  const [isEditMode, setIsEditMode] = useState(false);
  const { showOverlay, hideOverlay } = useOverlayContext();

  const handleEnterEditMode = () => {
    setIsEditMode(true);
    showOverlay();
  };

  const handleExitEditMode = () => {
    setIsEditMode(false);
    hideOverlay();
  };

  return { isEditMode, handleEnterEditMode, handleExitEditMode };
}
