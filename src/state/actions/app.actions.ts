import {ActionType} from "../../types/app.types";
import {APP_ACTIONS} from "../../enums/app.enum";
import ActionCreator from "./root.actions";
import { USER_ACTIONS } from "../../enums/user.enums";

export const toggleNavBar = (): ActionType => ActionCreator({
     type: APP_ACTIONS.TOGGLE_NAVBAR
});

export const LogOut = (): ActionType => ActionCreator({
     type: USER_ACTIONS.LOG_OUT,
     payload: {}
})

