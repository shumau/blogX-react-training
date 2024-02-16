import {IState} from "../../interfaces/app.interface";
import {Post} from "../../types/post.types";

export const getHttp = (state: IState) => state.http;
export const isLoading = (state: IState): boolean => getHttp(state).loading;
export const hasError = (state: IState): any => getHttp(state).error;
export const getPost = (state: IState): Post[] => state.posts.list;
export const getUser = (state: IState) => state.user;
export const getToggle = (state: IState):boolean => state.app.isOpen;
