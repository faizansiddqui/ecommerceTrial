import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import styles from '../styles/style.module.css';

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.allProductsContainer}>
      <h2>All Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className={styles.productGrid}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <p className={styles.productPrice}>Price: ${product.price}</p>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDescription}>{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default AllProducts;
