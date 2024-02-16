import { Comment } from "../types/comment.types";
import {Post} from "../types/post.types";
export interface IState {
    http: {
        loading: boolean;
        error?: any;
    };
    user: {};
    posts: {
        list: Post[];
        comments: Comment[]
    };
    app: {
        isOpen: boolean;
    }
}
