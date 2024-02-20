import {HTTP_METHOD} from "../enums/http.enum";
import {createAsyncCall} from "./common/http.services";
import {API} from "./common/http-url";
import { USER_ACTIONS } from "../enums/user.enums";

export const getAllUsers = (): void => {
    createAsyncCall(API.USER, HTTP_METHOD.GET, USER_ACTIONS.LOAD)
}

export const getUser = (id: string): void => {
    createAsyncCall(`${API.USER}/${id}`, HTTP_METHOD.GET, USER_ACTIONS.LOAD_USER)
}
