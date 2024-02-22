import store from "../store";
import { toggleNavBar } from "./app.actions"

describe('app actions', ()=>{
    it('after calling the method toggleNavBar, the state changes', ()=>{
        toggleNavBar();
        expect(store.getState().app.isOpen).toBe(true)
    })
})