import Wrapper from './components/Wrapper';
import Header from './components/Header';
import BoardPage from './pages/BoardPage';

const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <BoardPage />
      </Wrapper>
    </>
  );
};

export default App;
