import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';

import { useAppDispatch } from '../../store/hooks';
import { deleteCard, updateCard } from '../boards/boardsSlice';
import { useAutoFocus } from '../../hooks/useAutoFocus';
import type { Card } from '../../types/Card';
import Button from '../../components/Button';
import Edit from '../../components/Edit';

type EditCardProps = {
  boardId: string;
  card: Card;
  onExit: () => void;
};

const EditCard: React.FC<EditCardProps> = ({ boardId, card, onExit }) => {
  const [newTitle, setNewTitle] = useState(card.title);

  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTitle(e.target.value);
  };

  const handleEditCard = () => {
    if (!newTitle.trim()) {
      onExit();

      return;
    }

    dispatch(
      updateCard({ boardId, cardId: card.id, attrs: { title: newTitle } })
    );

    onExit();
  };

  const handleDeleteCard = () => {
    dispatch(deleteCard({ boardId, cardId: card.id }));

    onExit();
  };

  return (
    <Edit onExit={onExit}>
      <textarea
        value={newTitle}
        className="w-full min-h-[100px] p-2 mb-2 border-b border-gray-300 rounded-sm text-sm resize-none focus:outline-none"
        onChange={handleChangeTitle}
        {...useAutoFocus<HTMLTextAreaElement>(true)}
      />

      <div className="flex gap-3">
        <Button onClick={handleEditCard}>Save</Button>
        <button
          className="px-3 rounded-sm bg-white bg-opacity-80 hover:bg-opacity-100 transition ease-in-out duration-300"
          onClick={handleDeleteCard}
        >
          <AiFillDelete />
        </button>
      </div>

      <button
        className="fixed right-4 top-4 text-3xl hover:text-gray-200"
        onClick={onExit}
      >
        <IoMdClose />
      </button>
    </Edit>
  );
};

export default EditCard;
