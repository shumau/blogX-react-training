import { combineReducers } from 'redux';
import PostsReducer from "./posts.reducer";
import HttpReducer from "./http.reducer";
import UserReducer from "./user.reducer";
import AppReducer from "./app.reducer";

const rootReducer = combineReducers({
    http: HttpReducer,
    posts: PostsReducer,
    user: UserReducer,
    app: AppReducer
})

export default rootReducer;
