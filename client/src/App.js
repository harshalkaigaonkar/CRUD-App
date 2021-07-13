import React, { useState, useEffect } from 'react';
import PostList from './PostList.js';
import AddPost from './AddPost.js';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, Setposts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get('http://localhost:3001/');
      Setposts(res.data);
    }
    getPosts();
  });
  return (
    <div>
      <AddPost />
      <PostList posts={posts} />
    </div>
  )
};

export default App;

