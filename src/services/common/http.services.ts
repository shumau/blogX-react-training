import axios from "axios";
import ActionCreator from "../../state/actions/root.actions";
import { httpError, httpStart, httpSuccess, httpEnd } from "../../state/actions/http.actions";
import { HTTP_METHOD } from "../../enums/http.enum";

const config = {
    baseURL:  "https://jsonplaceholder.org"
}

export const createAsyncCall = (path: string, method: HTTP_METHOD, action: string, data?: any): void => {
    ActionCreator(httpStart());
    const config = {
        method,
        url: createUrl(path),
        data
    }
    axios(config)
        .then(responseHandler(action))
        .catch(errorHandler)
        .finally(finalHandler);
};

const createUrl = (path: string , params = ''): string => {
    return `${config.baseURL}${path}${params}`
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
