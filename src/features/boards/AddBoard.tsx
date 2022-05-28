import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

import { useAppDispatch } from '../../store/hooks';
import { addBoard } from '../boards/boardsSlice';
import Button from '../../components/Button';
import { useAutoFocus } from '../../hooks/useAutoFocus';

type AddBoardProps = {
  onCancel: () => void;
};

const AddBoard: React.FC<AddBoardProps> = ({ onCancel }) => {
  const [boardTitle, setBoardTitle] = useState('');

  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value);
  };

  const handleCancel = () => {
    setBoardTitle('');
    onCancel();
  };

  const handleAddBoard = () => {
    if (!boardTitle) {
      handleCancel();

      return;
    }

    dispatch(addBoard({ title: boardTitle }));
    setBoardTitle('');
    handleCancel();
  };

  const handleEnterSave = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }

    handleAddBoard();
  };

  return (
    <article className="self-start w-72 p-3 rounded-sm bg-gray-200">
      <input
        type="text"
        value={boardTitle}
        placeholder="Enter list title..."
        className="w-full p-2 mb-2 border-b border-gray-300 rounded-sm text-sm resize-none focus:outline-none"
        onChange={handleChangeTitle}
        onKeyDown={handleEnterSave}
        {...useAutoFocus<HTMLInputElement>(false)}
      />

      <div className="flex">
        <Button className="mr-2" onClick={handleAddBoard}>
          Add list
        </Button>

        <button onClick={handleCancel}>
          <CgClose className="text-2xl text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </article>
  );
};

export default AddBoard;
