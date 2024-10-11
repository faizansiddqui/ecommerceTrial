import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice'; // Ensure correct import
import styles from '../styles/style.module.css';

const TopRatedProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filter top-rated products
  const topRated = products.filter(product => product.rating > 4);

  return (
    <div className={styles.topRatedContainer}>
      <h2>Top Rated Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : topRated.length > 0 ? (
        topRated.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No top rated products available.</p>
      )}
    </div>
  );
};

export default TopRatedProduct;
