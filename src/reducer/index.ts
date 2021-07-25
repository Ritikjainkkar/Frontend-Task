import {IState} from './interfaces';
import {IPosts} from './../components/Posts/interfaces';
import {ADD_POST} from './../actions/actionTypes'
const defaultPost: IPosts[] = []
export const countReducer = function (state:IState={posts: defaultPost}, action: any) {

    const posts: IPosts[] = state.posts;
    switch (action.type) {
      case ADD_POST:
        return {...state, posts: [...posts, action.payload]};
      default:
        return state;
    }
  };