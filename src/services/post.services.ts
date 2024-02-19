import {POST_ACTIONS} from "../enums/post.enums";
import {HTTP_METHOD} from "../enums/http.enum";
import {createAsyncCall} from "./common/http.services";
import {API} from "./common/http-url";

export const getAllPosts = (): void => {
    createAsyncCall(API.POST, HTTP_METHOD.GET, POST_ACTIONS.LOAD)
}
export const getPost = (id: string): void => {
    createAsyncCall(`${API.POST}/${id}`, HTTP_METHOD.GET, POST_ACTIONS.LOAD_POST)
}

export const getAllComments = (): void => {
    createAsyncCall(API.COMMENT, HTTP_METHOD.GET, POST_ACTIONS.LOAD_COMMENTS)
}

export const getComment = (id: string): void => {
    createAsyncCall(`${API.COMMENT}/${id}`, HTTP_METHOD.GET, POST_ACTIONS.GET_COMMENT)
}
