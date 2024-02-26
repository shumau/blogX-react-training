import HttpReducer from "./http.reducer"

describe('http reducer', ()=>{

    const INITIAL_HTTP_STATE = {
        loading: false,
        error: ''
    }

    it('changing state with action with type HTTP_REQUEST_START', ()=>{
        const action = {type: 'HTTP_REQUEST_START'}
        const result = HttpReducer(INITIAL_HTTP_STATE, action)
        expect(result.loading).toBe(true)
    })

    it('changing state with action with type HTTP_REQUEST_END', ()=>{
        const action = {type: 'HTTP_REQUEST_END'}
        const result = HttpReducer(INITIAL_HTTP_STATE, action)
        expect(result.loading).toBe(false)
    })

    it('changing state with action with type HTTP_REQUEST_FAILED', ()=>{
        const action = {type: 'HTTP_REQUEST_FAILED', payload: {error: 'error'}}
        const result = HttpReducer(INITIAL_HTTP_STATE, action)
        expect(result.error).toEqual({error: 'error'})
    })
})