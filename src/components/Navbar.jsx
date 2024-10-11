import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { setUser } from '../redux/authSlice';
import styles from '../styles/style.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(setUser(null));
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/products">All Products</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      {user ? (
        <>
          <span>Hello, {user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
