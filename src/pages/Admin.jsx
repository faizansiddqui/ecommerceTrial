import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, deleteBlog } from '../redux/blogSlice';

import BlogPost from '../components/BlogPost';
import styles from '../styles/style.module.css';

const Admin = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id)); // Implement this function in your blogSlice
  };

  return (
    <div className={styles.adminContainer}>
      <h2>Admin Panel</h2>
      <h3>Manage Blog Posts</h3>
      <div className={styles.blogList}>
        {blogs.length > 0 ? (
          blogs.map((post) => (
            <div key={post.id} className={styles.blogPost}>
              <BlogPost post={post} />
              <button onClick={() => handleDelete(post.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
