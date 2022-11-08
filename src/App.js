import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import { selectedAuth } from './redux/reducers/AuthSlice';

function App() {
  const { isAuth } = useSelector(selectedAuth);
  return (
    <>
      <Header />
      {isAuth ? <Counter /> : <Auth />}
    </>
  );
}

export default App;
