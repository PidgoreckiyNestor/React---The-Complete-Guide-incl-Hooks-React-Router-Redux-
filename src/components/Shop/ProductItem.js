import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/reducers/cartSlice';

const ProductItem = (props) => {
  const {price, description, name} = props
  const dispatch = useDispatch();

  const addToCardHandler = () => {
    dispatch(addItemToCart(props));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCardHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
