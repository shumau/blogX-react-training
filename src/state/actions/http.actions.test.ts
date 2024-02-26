import store from "../store";
import { httpStart, httpError, httpEnd } from "./http.actions"

describe('http actions', ()=>{
    it('after calling the method httpStart, the loading change', ()=>{
        store.dispatch(httpStart());
        expect(store.getState().http.loading).toBe(true)
    })

    it('after calling the method httpError, the error change', ()=>{
        store.dispatch(httpError( 'error'));
        expect(store.getState().http.error).toEqual({error:'error'})
    })

    it('after calling the method httpEnd, the loading change', ()=>{
        store.dispatch(httpEnd());
        expect(store.getState().http.loading).toBe(false)
    })
})