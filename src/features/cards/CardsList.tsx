import type { Board } from '../../types/Board';
import type { Card } from '../../types/Card';
import CardItem from './CardItem';

type CardsListProps = {
  board: Board;
  cards: Card[];
};

const CardsList: React.FC<CardsListProps> = ({ board, cards }) => {
  return (
    <ul className="space-y-2">
      {cards.map((card) => (
        <CardItem key={card.id} board={board} card={card} />
      ))}
    </ul>
  );
};

export default CardsList;
