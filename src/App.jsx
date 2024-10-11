import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProtectedRoute from './components/ProtectedRoute';
import { observeAuth } from './redux/authSlice';
import BlogForm from './components/BlogForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(observeAuth());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/create-blog" 
              element={
                <ProtectedRoute>
                  <BlogForm />
                </ProtectedRoute>
              } 
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
