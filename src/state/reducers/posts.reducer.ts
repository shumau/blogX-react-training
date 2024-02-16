import {POST_ACTION_TYPES} from "../actions/action.types";
const INITIAL_POSTS_STATE = {}

const PostsReducer = (state = INITIAL_POSTS_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case POST_ACTION_TYPES.LOAD:
            return { ...state, list: payload  };
        case POST_ACTION_TYPES.GET_BY_ID:
            return { ...state, list: payload  };
        case POST_ACTION_TYPES.GET_COMMENTS:
            return { ...state, comments: payload  };
        default: return state;
    }
}

export default PostsReducer;
