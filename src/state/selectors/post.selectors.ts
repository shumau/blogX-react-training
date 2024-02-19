import {IState} from "../../interfaces/app.interface";
import {Post} from "../../types/post.types";
import {Comment} from "../../types/post.types";

export const selectAllPosts = (state: IState): Post[] => state.posts.list;
export const getPost = (id: string | undefined) => {
    return (state: IState): Post | {} => id && state.posts && state.posts.post ? state.posts.post[id] : {};
}
export const getAllComments = (state: IState): Comment[] => state.posts.comments;
export const getComment = (id: string | undefined) => {
    return (state: IState): Comment[] => id && state.posts && state.posts.comments ? state.posts.comments.filter(comment => '' + comment.postId === id): [];
}
