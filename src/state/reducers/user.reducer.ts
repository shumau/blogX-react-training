import {USER_ACTIONS} from "../../enums/user.enums";
const INITIAL_USER_STATE = {
    list: [],
    user: {}
}

const UserReducer = (state = INITIAL_USER_STATE, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTIONS.LOAD:
            return { ...state, list: payload };
        case USER_ACTIONS.LOAD_USER:
            return {
                ...state,
                user:  payload
            };
        case USER_ACTIONS.LOG_OUT: 
            return {...state, user: payload}
        default: return state;
    }
}

export default UserReducer;
