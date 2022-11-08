import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectedAuth } from '../redux/reducers/AuthSlice';

const Header = () => {
  const { isAuth } = useSelector(selectedAuth);
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth ? (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
