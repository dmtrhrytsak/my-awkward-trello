import { useState } from 'react';

export function useAddMode() {
  const [isAddMode, setIsAddMode] = useState(false);

  const handleEnterAddMode = () => setIsAddMode(true);
  const handleExitAddMode = () => setIsAddMode(false);

  return { isAddMode, handleEnterAddMode, handleExitAddMode };
}
