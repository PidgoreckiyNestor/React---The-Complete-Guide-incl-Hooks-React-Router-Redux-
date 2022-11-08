import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { selectedCart } from '../../redux/reducers/cartSlice';

const Cart = () => {
  const { items } = useSelector(selectedCart);

  const mappedItems = items.map(item => {
    return <CartItem
      item={item}
    />;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          mappedItems
        }
      </ul>
    </Card>
  );
};

export default Cart;
