import {IState} from "../../interfaces/app.interface";
import { Comment } from "../../types/comment.types";
import {Post} from "../../types/post.types";

export const getHttp = (state: IState) => state.http;
export const isLoading = (state: IState): boolean => getHttp(state).loading;
export const hasError = (state: IState): any => getHttp(state).error;
export const getPost = (state: IState): Post[] | Post => state.posts.list;
export const getComment = (state: IState, id: string | undefined):  Comment[] => state.posts.comments?.filter(comment => '' + comment.postId === id);
export const getUser = (state: IState) => state.user;
export const getToggle = (state: IState):boolean => state.app.isOpen;
