import {ActionType} from "../../types/app.types";
import {APP_ACTIONS} from "../../enums/app.enum";
import ActionCreator from "./root.actions";

export const toggleNavBar = (): ActionType => ActionCreator({
     type: APP_ACTIONS.TOGGLE_NAVBAR
});

