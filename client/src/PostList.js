import React from 'react';
import Post from './Post.js';

const PostList = ({ posts }) => {
    return (
        <div>
            {posts && posts.map(post => <Post key={post._id} post={post} />)}
        </div>
    )
}

export default PostList
