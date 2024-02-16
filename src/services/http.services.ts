import axios from "axios";
import ActionCreator from "../state/actions/root.actions";
import {httpError, httpStart, httpSuccess, httpEnd} from "../state/actions/http.actions";

const config = {
    baseURL:  "https://jsonplaceholder.org"
}
export const createAsyncCall = (path: string, method: string, action: string, data?: any) => {
    ActionCreator(httpStart());
    axios(createUrl(path), data)
        .then(responseHandler(action))
        .catch(errorHandler)
        .finally(finalHandler);
};

export const postData = (path: string, action: string, data?: any) => {
    ActionCreator(httpStart());
    axios
        .post(createUrl(path), data)
        .then(responseHandler(action))
        .catch(errorHandler)
        .finally(finalHandler);
};

export const getData = (path: string, action: string) => {
    ActionCreator(httpStart());
    axios
        .get(createUrl(path))
        .then(responseHandler(action))
        .catch(errorHandler)
        .finally(finalHandler);
};

const createUrl = (path: string): string => {
    return `${config.baseURL}${path}`
}
const responseHandler = (responseAction: string) => {
    return (res: any): void => {
        ActionCreator(httpSuccess(res.data, responseAction));
    }
}

const errorHandler = (err: any): void => {
    ActionCreator(httpError(err.message));
}

const finalHandler = (): void => {
    ActionCreator(httpEnd());
}
