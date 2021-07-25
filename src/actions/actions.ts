import {IPosts} from './../components/Posts/interfaces';
import {ADD_POST} from './actionTypes';
export const addPost = (post: IPosts) => ({
    type: ADD_POST,
    payload: post
});