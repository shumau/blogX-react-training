import { combineReducers } from 'redux';
import PostsReducer from "./posts.reducer";
import HttpReducer from "./http.reducer";
import UserReducer from "./user.reducer";
import AppReducer from "./app.reducer";
import CommentsReducer from './comments.reducer';

const rootReducer = combineReducers({
    http: HttpReducer,
    posts: PostsReducer,
    user: UserReducer,
    app: AppReducer,
    comments: CommentsReducer,
})

export default rootReducer;
