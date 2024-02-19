import {POST_ACTIONS} from "../../enums/post.enums";
const INITIAL_POSTS_STATE = {
    list: [],
    post: {},
    comments: []
}

const PostsReducer = (state = INITIAL_POSTS_STATE, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case POST_ACTIONS.LOAD:
            return { ...state, list: payload  };
        case POST_ACTIONS.LOAD_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    [payload.id]: payload
                }
            };
        case POST_ACTIONS.LOAD_COMMENTS:
            return { ...state, comments: payload  };
        case POST_ACTIONS.GET_COMMENT:
            return { ...state, comment: payload  };
        default: return state;
    }
}

export default PostsReducer;
