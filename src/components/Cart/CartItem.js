import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../redux/reducers/cartSlice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { name, quantity, totalPrice, price, id } = props.item;

  const addHandler = () => {
    dispatch(addItemToCart(props.item));
  };

  const removeHandler = () => {
    dispatch(removeItemFromCart(id));
  };


  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
