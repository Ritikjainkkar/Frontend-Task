import { createStore } from 'redux';
import {postReducer} from './../reducer/index';
import {IPosts} from './../components/Posts/interfaces';
const defaultPost: IPosts[] = [];

export let store = createStore(postReducer, {posts: defaultPost  } );