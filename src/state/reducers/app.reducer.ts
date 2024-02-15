import {APP_ACTION_TYPES} from "../actions/action.types";
const INITIAL_APP_STATE = {}

const AppReducer = (state = INITIAL_APP_STATE, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case APP_ACTION_TYPES.NAVBAR:
            return { ...state };
        default: return state;
    }
}

export default AppReducer;
