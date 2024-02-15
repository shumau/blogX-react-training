import {ActionType} from "../../types/app.types";
import {APP_ACTION_TYPES} from "./action.types";
import ActionCreator from "./root.actions";

export const toggleNavBar = (): ActionType => ActionCreator({ type: APP_ACTION_TYPES.NAVBAR});

