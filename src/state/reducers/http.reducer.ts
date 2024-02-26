import {HTTP_ACTIONS} from "../../enums/http.enum";
const INITIAL_HTTP_STATE = {
    loading: false,
    error: ''
}

const HttpReducer = (state = INITIAL_HTTP_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case HTTP_ACTIONS.START:
            return { ...state, loading: true };
        case HTTP_ACTIONS.END:
            return { ...state, loading: false };
        case HTTP_ACTIONS.REQUEST_FAILED:
            return { ...state, error: payload, loading: false  };
        default: return state;
    }
}

export default HttpReducer;
