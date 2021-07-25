import {IState} from './interfaces';
import {IPosts} from './../components/Posts/interfaces';
import {ADD_POST} from './../actions/actionTypes'
// Use proper default values not like null or undefined
const defaultPost: IPosts[] = [];

// This is post reducer, for storing post related data
export const postReducer = (state:IState={posts: defaultPost}, action: any) => {

    const posts: IPosts[] = state.posts;
    switch (action.type) {
      // different different cases 
      case ADD_POST:
        return {...state, posts: [...posts, action.payload]};
      default:
        return state;
    }
  };