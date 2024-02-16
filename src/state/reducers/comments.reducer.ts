import { COMMENT_ACTION_TYPES } from "../actions/action.types";
const INITIAL_COMMENTS_STATE = {}

const CommentsReducer = (state = INITIAL_COMMENTS_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case COMMENT_ACTION_TYPES.GET_COMMENT_FOR_POST:
            return { ...state, list: payload  };
        default: return state;
    }
}

export default CommentsReducer;