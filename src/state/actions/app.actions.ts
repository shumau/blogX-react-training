import {ActionType} from "../../types/app.types";
import {APP_ACTION_TYPES} from "./action.types";

export const toggleNavBar = (): ActionType => ({
     type: APP_ACTION_TYPES.TOGGLE_NAVBAR
});

