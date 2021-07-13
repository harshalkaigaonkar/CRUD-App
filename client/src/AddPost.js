import React, { useState } from 'react';
import axios from 'axios';

const AddPost = (props) => {
    const [name, SetName] = useState(null);
    const [post, Setpost] = useState(null);

    const OnSubmit = async (e) => {
        e.preventDefault();
        const data = {
            Name: name,
            Post: post,
        }
        const res = await axios.post('http://localhost:3001/', data);
        if (res.data) {
            return;
        }
        return alert("Something's Wrong!!");
    }
    return (
        <div>
            <form onSubmit={OnSubmit}>
                <input type="Name" required placeholder="Enter Name.." onChange={(e) => SetName(e.target.value)} />
                <input type="Post" required placeholder="Enter Post About.." onChange={(e) => Setpost(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddPost
