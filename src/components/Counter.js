import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, toggle } from '../redux/reducers/CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();

  const { counter, isShown } = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch(increment());
  };
  const incrementBy5Handler = () => {
    dispatch(increment(5));
  };
  const toggleHandler = () => {
    dispatch(toggle());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown ? <div className={classes.value}>{counter}</div> : null}

      <button onClick={toggleHandler}>Toggle Counter</button>
      {isShown ? (
        <div>
          <button onClick={incrementHandler}>+</button>
          <button onClick={incrementBy5Handler}>Increase by 5</button>
          <button onClick={decrementHandler}>-</button>
        </div>
      ) : null}
    </main>
  );
};

export default Counter;
