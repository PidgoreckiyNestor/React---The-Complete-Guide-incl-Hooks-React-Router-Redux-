import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/reducers/uiSlice';
import { selectedCart } from '../../redux/reducers/cartSlice';

const CartButton = () => {
  const dispatch = useDispatch();


  const { quantity } = useSelector(selectedCart);

  const onClickHandler = () => dispatch(toggleCart());

  return (
    <button onClick={onClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
