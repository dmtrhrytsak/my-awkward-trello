import { useDispatch } from 'react-redux';
import { useDragAndDropContext } from '../contexts/DragAndDropContext';

import { swapCards } from '../features/boards/boardsSlice';
import type { Board } from '../types/Board';
import type { Card } from '../types/Card';

export function useDragAndDrop() {
  const { currentBoard, currentCard, handleChange } = useDragAndDropContext();

  const dispatch = useDispatch();

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.classList.contains('card')) {
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const handleDragLeave = (e: any) => {
    e.stopPropagation();

    e.target.style.boxShadow = 'none';
  };

  const handleDragStart = (e: any, board: Board, card: Card) => {
    e.stopPropagation();

    handleChange(board, card);
  };

  const handleDragEnd = (e: any) => {
    e.stopPropagation();

    e.target.style.boxShadow = 'none';
  };

  const handleDragDrop = (e: any, board: Board, card: Card) => {
    e.preventDefault();
    e.stopPropagation();

    e.target.style.boxShadow = 'none';

    if (!currentBoard || !currentCard) {
      return;
    }

    const currentIndex = currentBoard.items.indexOf(currentCard);
    const dropIndex = board.items.indexOf(card);

    dispatch(
      swapCards({
        currentBoardId: currentBoard.id,
        targetBoardId: board.id,
        currentCardId: currentCard.id,
        currentCardIndex: currentIndex,
        neighbourCardIndex: dropIndex,
      })
    );
  };

  return {
    handleDragOver,
    handleDragLeave,
    handleDragStart,
    handleDragEnd,
    handleDragDrop,
  };
}
