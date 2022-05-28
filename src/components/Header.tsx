import { ImTrello } from 'react-icons/im';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between py-2 px-4 bg-sky-700">
      <a href="/" className="font-semibold text-white">
        <div className="flex items-center p-2 rounded-sm hover:bg-sky-800">
          <ImTrello className="mr-2 text-white" />
          My Awkward Trello
        </div>
      </a>
    </header>
  );
};

export default Header;
