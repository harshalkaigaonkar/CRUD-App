import React from 'react'

const PostList = (props) => {
    return (
        <div>
            PostList
            {/* {posts && posts.map(post => (
                <div>
                    <h2>{post.Name}</h2>
                    <h3>{post.Post}</h3>
                </div>
            ))} */}
            {console.log(props)}
        </div>
    )
}

export default PostList
