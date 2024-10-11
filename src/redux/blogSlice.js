import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../utils/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

// Async thunk to fetch blogs
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const blogsCollection = collection(db, 'blogs');
  const blogsSnapshot = await getDocs(blogsCollection);
  return blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

// Async thunk to add a blog
export const addBlog = createAsyncThunk('blogs/addBlog', async (blog) => {
  const blogsCollection = collection(db, 'blogs');
  const docRef = await addDoc(blogsCollection, blog);
  return { id: docRef.id, ...blog };
});

// Async thunk to delete a blog
export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  const blogDoc = doc(db, 'blogs', id);
  await deleteDoc(blogDoc);
  return id; // Return the id for removing from state
});

// Create the slice
const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchBlogs actions
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture error message
      });

    // Handle addBlog actions
    builder
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture error message
      });

    // Handle deleteBlog actions
    builder
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.items = state.items.filter(blog => blog.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture error message
      });
  },
});

export default blogSlice.reducer;
