import {IState} from "../../interfaces/app.interface";

export const getToggle = (state: IState): boolean => state.app.isOpen;
