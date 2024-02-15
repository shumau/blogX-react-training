import {HTTP_ACTION_TYPES} from './action.types';
import {ActionType} from "../../types/app.types";

export const httpStart = (): ActionType => ({
    type: HTTP_ACTION_TYPES.START
});
export const httpSuccess = (data: any, responseAction: string): ActionType => ({
    type: responseAction,
    payload: data
});
export const httpError = (error: any): ActionType => ({
    type: HTTP_ACTION_TYPES.REQUEST_FAILED,
    payload: {
        error
    }
});
export const httpEnd = (): ActionType => ({
    type: HTTP_ACTION_TYPES.END,
});
