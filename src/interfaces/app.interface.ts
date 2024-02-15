import {Post} from "../types/post.types";
export interface IState {
    http: {
        loading: boolean;
        error?: any;
    };
    user: {};
    posts: {
        list: Post[]
    };
}
