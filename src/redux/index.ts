import { createStore } from 'redux';
import {countReducer} from './../reducer/index';
import {IPosts} from './../components/Posts/interfaces';
const defaultPost: IPosts[] = [];

export let store = createStore(countReducer, {posts: defaultPost  } );