import { getHttp, hasError, isLoading } from "./http.selectors"

describe('http selectors', ()=>{

    const INITIAL_STATE = {
        http: {
            loading: false,
            error: 'error',
        },
        users: {
            list: [],
            user: {
                "id": 2,
                "firstname": "Jane",
                "lastname": "Smith",
                "email": "janesmith@example.com",
                "birthDate": "1983-02-22",
                "login": {
                    "uuid": "2a0eed02-9430-4d68-901f-c0d4c1c3bf22",
                    "username": "janesmith",
                    "password": "jsonplaceholder.org",
                    "md5": "c1328472c5794a25723600f71c1b4586",
                    "sha1": "35544a31cc19bd6520af116554873167117f4d94",
                    "registered": "2022-06-10T12:45:20.022Z"
                },
                "address": {
                    "street": "456 Oak Street",
                    "suite": "Suite 200",
                    "city": "Anytown",
                    "zipcode": "12345-6789",
                    "geo": {
                        "lat": "42.3456",
                        "lng": "-71.6789"
                    }
                },
                "phone": "(555) 555-5678",
                "website": "www.janesmith.com",
                "company": {
                    "name": "XYZ Corporation",
                    "catchPhrase": "Leading the way in innovation",
                    "bs": "Finance"
                }
            }
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

    it('should return http object', ()=>{
        expect( getHttp(INITIAL_STATE)).toEqual({
                                                    loading: false,
                                                    error: 'error',
                                                })
    })

    it('should return loading status', ()=>{
        expect( isLoading(INITIAL_STATE)).toBe(false)
    })

    it('should return error', ()=>{
        expect( hasError(INITIAL_STATE)).toEqual('error')
    })
})