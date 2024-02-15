import { createStore, applyMiddleware } from "redux";
import {composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import rootReducer from "./reducers/root.reducer";

const middleWare = [thunk];

const composeEnhancers = composeWithDevToolsDevelopmentOnly(applyMiddleware(...middleWare));

const store = createStore(rootReducer, composeEnhancers);

export default store;
