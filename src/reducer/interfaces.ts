// it is good programming practise to use interface in a different file. This will make code modular. 
import {IPosts} from './../components/Posts/interfaces';
export interface IState {
    posts: IPosts[],
}