import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/style.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
