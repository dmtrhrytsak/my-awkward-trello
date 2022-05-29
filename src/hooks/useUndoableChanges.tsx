import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { undo, redo } from '../store/enhancers/undoableEnhancer';

export function useUndoableChanges() {
  const dispatch = useDispatch();

  const handleUndoChange = useCallback(
    (e: KeyboardEvent) => {
      const symbol = e.key;

      const isUndoPressed = (e.ctrlKey || e.metaKey) && symbol === 'z';
      const isRedoPressed =
        (e.ctrlKey || e.metaKey) && e.shiftKey && symbol === 'z';

      if (isRedoPressed) {
        dispatch(redo());
      } else if (isUndoPressed) {
        dispatch(undo());
      }
    },
    [dispatch]
  );

  return { handleUndoChange };
}
