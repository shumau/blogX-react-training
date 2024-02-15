import {USER_ACTION_TYPES} from "../actions/action.types";
const INITIAL_USER_STATE = {}

const PostsReducer = (state = INITIAL_USER_STATE, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.GET:
            return { ...state, user: payload };
        default: return state;
    }
}

export default PostsReducer;
