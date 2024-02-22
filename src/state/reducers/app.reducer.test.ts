import { APP_ACTIONS } from "../../enums/app.enum";
import AppReducer from "./app.reducer";

describe('app reducer', ()=>{
    const INITIAL_APP_STATE = {
        isOpen: false
    }

    it('should return default state when passed an empty action', ()=>{
        const result = AppReducer(undefined, {type: ''});
        expect(result).toEqual({isOpen: false})
    })

    it('changing state with action toggleNavBar', ()=>{
        const action = {type: APP_ACTIONS.TOGGLE_NAVBAR}
        const result = AppReducer(INITIAL_APP_STATE, action)
        expect(result.isOpen).toBe(true)
    })
})