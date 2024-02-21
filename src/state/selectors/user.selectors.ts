import {IState} from "../../interfaces/app.interface";
import { User } from "../../types/user.types";

export const selectAllUsers = (state: IState): User[] => state.users.list;
export const getUser = (state: IState): User | {} => state.users.user;
