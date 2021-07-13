import React from 'react';
import PostList from './PostList.js';
import AddPost from './AddPost.js';
import axios from 'axios';
import './App.css';

const App = async () => {
  let posts = await axios.get('http://localhost:3001/');
  return (
    <div>
      <h1>Hello</h1>
      <AddPost />
      {posts && posts.map(post => (
        <div>
          <h1>{post.Name}</h1>
        </div>
      ))
      }
    </div>
  )
};

export default App;

