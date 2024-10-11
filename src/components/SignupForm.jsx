import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/authSlice';
import styles from '../styles/style.module.css';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password }));
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
