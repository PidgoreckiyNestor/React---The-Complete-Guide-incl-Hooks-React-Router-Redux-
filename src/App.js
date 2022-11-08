import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { selectedUi } from './redux/reducers/uiSlice';

function App() {
  const {isCartShown} = useSelector(selectedUi)
  return (
    <Layout>
      {
        isCartShown ? <Cart /> : null
      }
      <Products />
    </Layout>
  );
}

export default App;
