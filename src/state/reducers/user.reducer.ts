import {USER_ACTIONS} from "../../enums/user.enums";
const INITIAL_USER_STATE = {}

const PostsReducer = (state = INITIAL_USER_STATE, action: any) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTIONS.GET_USER:
            return { ...state, user: payload };
        default: return state;
    }
}

export default PostsReducer;
