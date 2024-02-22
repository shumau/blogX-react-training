import { getToggle } from "./app.selectors"

describe('app selectors', ()=>{
    const INITIAL_STATE = {
        http: {
            loading: false,
            error: '',
        },
        users: {
            list: [],
            user: {}
        },
        posts: {
            list: [],
            post: {},
            comments: []
        },
        app: {
            isOpen: true,
        }
    } 

    it('should return isOpen', ()=>{
        expect(getToggle(INITIAL_STATE)).toBe(true)
    })
})