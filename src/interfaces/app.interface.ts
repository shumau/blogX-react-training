import { Post, Comment } from "../types/post.types";
import { User } from "../types/user.types";

export interface IState {
    http: {
        loading: boolean;
        error?: any;
    };
    users: {
        list: User[];
        user: User
    };
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
