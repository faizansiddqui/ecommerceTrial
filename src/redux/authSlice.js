import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, loading: false },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const signup = (email, password) => async (dispatch) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => async (dispatch) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const observeAuth = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    dispatch(setUser(user));
  });
};

export default authSlice.reducer;
