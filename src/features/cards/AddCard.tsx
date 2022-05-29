import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

import { useAppDispatch } from '../../store/hooks';
import { addCard } from '../boards/boardsSlice';
import Button from '../../components/Button';
import AutoTextArea from '../../components/AutoTextArea';

type AddCardProps = {
  boardId: string;
  onCancel: () => void;
};

const AddCard: React.FC<AddCardProps> = ({ boardId, onCancel }) => {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleCancel = () => {
    setTitle('');
    onCancel();
  };

  const handleAddCard = () => {
    if (!title.trim()) {
      handleCancel();

      return;
    }

    dispatch(addCard(boardId, { title }));
    setTitle('');
    handleCancel();
  };

  const handleEnterSave = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter') {
      return;
    }

    handleAddCard();
  };

  const handleOnBlurSave = (
    e: React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    handleAddCard();
  };

  return (
    <div>
      <AutoTextArea
        placeholder="Enter a title for this card..."
        value={title}
        className="w-full p-2 mb-2 border-b border-gray-300 rounded-sm text-sm resize-none focus:outline-none"
        onChange={handleChangeTitle}
        onKeyDown={handleEnterSave}
        onBlur={handleOnBlurSave}
      />

      <div className="flex">
        <Button className="mr-2" onClick={handleAddCard}>
          Add card
        </Button>

        <button onClick={handleCancel}>
          <CgClose className="text-2xl text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default AddCard;
