import BoardsList from '../features/boards/BoardsList';

const BoardPage = () => {
  return (
    <section className="py-4">
      <h2 className="mb-2 text-xl font-bold text-white">My Board</h2>
      <BoardsList />
    </section>
  );
};

export default BoardPage;
