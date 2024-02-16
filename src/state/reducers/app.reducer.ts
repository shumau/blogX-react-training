import {APP_ACTION_TYPES} from "../actions/action.types";
const INITIAL_APP_STATE = {
        isOpen: false
}

const AppReducer = (state = INITIAL_APP_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case APP_ACTION_TYPES.TOGGLE_NAVBAR:
            return {...state, isOpen: !state.isOpen };
        default: return state;
    }
}

export default AppReducer;
