import { AiOutlineEdit } from 'react-icons/ai';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useEditModeWithOverlay } from '../../hooks/useEditModeWithOverlay';
import type { Board } from '../../types/Board';
import type { Card } from '../../types/Card';

import EditCard from './EditCard';

type CardItemProps = {
  board: Board;
  card: Card;
};

const CardItem: React.FC<CardItemProps> = ({ board, card }) => {
  const {
    handleDragOver,
    handleDragLeave,
    handleDragStart,
    handleDragEnd,
    handleDragDrop,
  } = useDragAndDrop();

  const { isEditMode, handleEnterEditMode, handleExitEditMode } =
    useEditModeWithOverlay();

  return (
    <li
      draggable={true}
      className="card relative group flex items-start justify-between p-2 border-b border-gray-300 rounded-sm bg-white hover:cursor-pointer hover:bg-gray-100"
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDragStart={(e) => handleDragStart(e, board, card)}
      onDragEnd={(e) => handleDragEnd(e)}
      onDrop={(e) => handleDragDrop(e, board, card)}
    >
      <h3 className="text-sm">{card.title}</h3>

      <button
        className="invisible p-1 rounded-sm hover:bg-gray-200 group-hover:visible"
        onClick={handleEnterEditMode}
      >
        <AiOutlineEdit />
      </button>

      {isEditMode && (
        <EditCard boardId={board.id} card={card} onExit={handleExitEditMode} />
      )}
    </li>
  );
};

export default CardItem;
