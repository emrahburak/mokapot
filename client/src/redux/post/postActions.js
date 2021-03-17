import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './postTypes';
import { useQuery } from '@apollo/client';
import {GET_POSTS} from '../../queries';

export const fetchPostRequest = ()=>{
    return {
	type:FETCH_POST_REQUEST,
    }
}

export const fetchPostSuccess = (posts) => {
    return{
	type:FETCH_POST_SUCCESS,
	payload:posts
    }
}

export const fetchPostFailure = (error) => {
    return {
	type:FETCH_POST_FAILURE,
	payload:error
    }
}


export const GetPosts = ()=>{

    const {loading, error, data} = useQuery(GET_POSTS);
    return (dispatch)=>{
	if(loading){
	    dispatch(fetchPostRequest)
	}
	if(error){
	    dispatch(fetchPostFailure(error))
	}
	const posts = data;
	dispatch(fetchPostSuccess(posts))
    }

}


