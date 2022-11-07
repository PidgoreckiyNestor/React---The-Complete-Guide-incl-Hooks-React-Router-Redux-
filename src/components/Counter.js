import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/CounterReducer';

const Counter = () => {
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};
  const counterState = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const incrementBy5Handler = () => {
    dispatch(increment(5));
  };

  const decrementHandler = () => {
    dispatch(decrement());

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterState.counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>

      <button onClick={incrementHandler}>+</button>
      <button onClick={incrementBy5Handler}>Increase by 5</button>
      <button onClick={decrementHandler}>-</button>
      </div>

    </main>
  );
};

export default Counter;
