import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/blogSlice';
import BlogForm from '../components/BlogForm';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      <BlogForm />
      <h2>Blog Posts</h2>
      {blogs.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
