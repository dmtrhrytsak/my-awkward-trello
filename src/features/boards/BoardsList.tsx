import { useAppSelector } from '../../store/hooks';
import { selectAllBoards } from './boardsSlice';
import { useAddMode } from '../../hooks/useAddMode';
import BoardItem from './BoardItem';
import AddBoard from './AddBoard';

const BoardsList: React.FC = () => {
  const boards = useAppSelector(selectAllBoards);

  const { isAddMode, handleEnterAddMode, handleExitAddMode } = useAddMode();

  return (
    <div className="flex flex-wrap gap-2">
      {boards.map((board) => (
        <BoardItem key={board.title} board={board} />
      ))}

      {!isAddMode && (
        <button
          className="self-start w-72 p-3 rounded-sm bg-sky-500 hover:bg-sky-400 text-white text-sm transition ease-in-out duration-300"
          onClick={handleEnterAddMode}
        >
          + Add another list
        </button>
      )}

      {isAddMode && <AddBoard onCancel={handleExitAddMode} />}
    </div>
  );
};

export default BoardsList;
