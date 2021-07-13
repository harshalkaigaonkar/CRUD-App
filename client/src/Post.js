import axios from 'axios';
import React from 'react';

const Post = ({ post }) => {
    const onDelete = async () => {
        await axios.delete(`http://localhost:3001/${post._id}`)
    }
    const onUpdate = async () => {
    }
    return (
        <div style={{ border: "1px solid black" }}>
            <h2>{post.Name}</h2>
            <h3>{post.Post}</h3>
            <button onClick={onDelete} style={{ margin: "10px" }}>Delete</button>
            <button onClick={onUpdate} style={{ margin: "10px" }}>Update</button>
        </div>
    )
}

export default Post
