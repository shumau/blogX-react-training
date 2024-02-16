import { Post, Comment } from "../types/post.types";

export interface IState {
    http: {
        loading: boolean;
        error?: any;
    };
    user: {};
    posts: {
        list: Post[];
        post: {
            [key: string]: Post
        };
        comments: Comment[]
    };
    app: {
        isOpen: boolean;
    }
}
