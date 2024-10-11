import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import TopRatedProduct from '../components/TopRatedProduct';
import AllProducts from '../components/AllProducts';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <TopRatedProduct />
      <AllProducts />
    </div>
  );
};

export default Home;
