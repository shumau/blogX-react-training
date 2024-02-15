import store from "../store";
import {ActionType} from "../../types/app.types";
const ActionCreator = (action: ActionType) => store.dispatch(action)
export default ActionCreator;
