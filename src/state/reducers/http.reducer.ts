import {HTTP_ACTION_TYPES} from "../actions/action.types";
const INITIAL_HTTP_STATE = {}

const HttpReducer = (state = INITIAL_HTTP_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case HTTP_ACTION_TYPES.START:
            return { ...state, loading: true };
        case HTTP_ACTION_TYPES.END:
            return { ...state, loading: false };
        case HTTP_ACTION_TYPES.REQUEST_FAILED:
            return { ...state, error: payload, loading: false  };
        default: return state;
    }
}

export default HttpReducer;
