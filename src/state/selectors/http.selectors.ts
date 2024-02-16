import {IState} from "../../interfaces/app.interface";

export const getHttp = (state: IState) => state.http;
export const isLoading = (state: IState): boolean => getHttp(state).loading;
export const hasError = (state: IState): any => getHttp(state).error;
