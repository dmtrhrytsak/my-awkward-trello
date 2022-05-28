import { createContext, useContext, useState } from 'react';

import type { Board } from '../types/Board';
import type { Card } from '../types/Card';

type DragAndDropContextType = {
  currentBoard: Board | null;
  currentCard: Card | null;
  handleChange: (board: Board, card: Card) => void;
};

const DragAndDropContext = createContext<DragAndDropContextType>({
  currentBoard: null,
  currentCard: null,
  handleChange: (board: Board, card: Card) => {},
});

type DragAndDropProviderProps = {
  children: React.ReactNode;
};

export const DragAndDropProvider: React.FC<DragAndDropProviderProps> = ({
  children,
}) => {
  const [currentBoard, setCurrentBoard] = useState<Board | null>(null);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const handleChange = (board: Board, card: Card) => {
    setCurrentBoard(board);
    setCurrentCard(card);
  };

  return (
    <DragAndDropContext.Provider
      value={{ currentBoard, currentCard, handleChange }}
    >
      {children}
    </DragAndDropContext.Provider>
  );
};

export const useDragAndDropContext = () => {
  return useContext(DragAndDropContext);
};
