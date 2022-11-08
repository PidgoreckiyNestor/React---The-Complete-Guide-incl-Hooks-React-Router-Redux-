import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { PRODUCTS } from '../../data/dummy-data';

const Products = () => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          PRODUCTS.map(product => {
            return (
              <ProductItem
                name={product.name}
                price={product.price}
                description={product.description}
                id={product.id}
                key={product.id}
              />
            );
          })
        }
      </ul>
    </section>
  );
};

export default Products;
