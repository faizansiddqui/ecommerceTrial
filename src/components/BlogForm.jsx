import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../redux/blogSlice';
import styles from '../styles/style.module.css';

const BlogForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addBlog({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <form className={styles.blogForm} onSubmit={handleSubmit}>
      <h2>Create a Blog Post</h2>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
