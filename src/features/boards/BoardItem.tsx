import { HiPlus } from 'react-icons/hi';

import { useAddMode } from '../../hooks/useAddMode';
import type { Board } from '../../types/Board';
import AddCard from '../cards/AddCard';
import Button from '../../components/Button';
import CardsList from '../cards/CardsList';

type ListItemProps = {
  board: Board;
};

const BoardItem: React.FC<ListItemProps> = ({ board }) => {
  const { isAddMode, handleEnterAddMode, handleExitAddMode } = useAddMode();

  return (
    <article className="self-start w-72 p-3 rounded-sm bg-gray-200">
      <h2 className="mb-2 text-sm font-semibold">{board.title}</h2>

      <div className="mb-2">
        <CardsList board={board} cards={board.items} />
      </div>

      {isAddMode ? (
        <AddCard boardId={board.id} onCancel={handleExitAddMode} />
      ) : (
        <Button
          variant="secondary"
          size="small"
          className="flex items-center "
          onClick={handleEnterAddMode}
        >
          <HiPlus className="mr-1" />
          Add a card
        </Button>
      )}
    </article>
  );
};

export default BoardItem;
