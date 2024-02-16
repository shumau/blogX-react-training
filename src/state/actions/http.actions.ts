import {HTTP_ACTIONS} from '../../enums/http.enum';
import {ActionType} from "../../types/app.types";

export const httpStart = (): ActionType => ({
    type: HTTP_ACTIONS.START
});
export const httpSuccess = (data: any, responseAction: string): ActionType => ({
    type: responseAction,
    payload: data
});
export const httpError = (error: any): ActionType => ({
    type: HTTP_ACTIONS.REQUEST_FAILED,
    payload: {
        error
    }
});
export const httpEnd = (): ActionType => ({
    type: HTTP_ACTIONS.END,
});
