import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_POSTS} from '../../queries';




const Post = props => {
    const {loading, error, data} = useQuery(GET_POSTS);
    if (loading) return <p>Loading..</p>;
    if (error) return <p>{error.message}</p>;

    return (
	    <div>
	    <ul>
	    {
	    data.posts.map(post => (
		    <li key={post.id}>
		    {post.title}
		    </li>
	    ))
	    }
	    </ul>
	    </div>
    );
};



export default Post;

//const Post = ({getPosts,postData})=>{
//    },[])
//
//    return postData.loading ? (
//	<h2>Loading Posts</h2>
//    ): postData.error ? (
//	    <h2>{postData.error}</h2>
//    ):(
//	    <div>
//	    {
//		postData && postData.posts && postData.posts.map(post => <p>post.title</p>)
//	    }
//	    </div>)
//
//}

