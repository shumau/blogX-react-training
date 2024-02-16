import {APP_ACTIONS} from "../../enums/app.enum";
const INITIAL_APP_STATE = {
        isOpen: false
}

const AppReducer = (state = INITIAL_APP_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case APP_ACTIONS.TOGGLE_NAVBAR:
            return {...state, isOpen: !state.isOpen };
        default: return state;
    }
}

export default AppReducer;
