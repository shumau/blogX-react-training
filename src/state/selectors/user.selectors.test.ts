import { User } from "../../types/user.types"
import { getUser, selectAllUsers } from "./user.selectors"

const users: User[] = [
    {
        "id": 1,
        "firstname": "John",
        "lastname": "Doe",
        "email": "johndoe@example.com",
        "birthDate": "1973-01-22",
        "login": {
            "uuid": "1a0eed01-9430-4d68-901f-c0d4c1c3bf22",
            "username": "johndoe",
            "password": "jsonplaceholder.org",
            "md5": "c1328472c5794a25723600f71c1b4586",
            "sha1": "35544a31cc19bd6520af116554873167117f4d94",
            "registered": "2023-01-10T10:03:20.022Z"
        },
        "address": {
            "street": "123 Main Street",
            "suite": "Apt. 4",
            "city": "Anytown",
            "zipcode": "12345-6789",
            "geo": {
                "lat": "42.1234",
                "lng": "-71.2345"
            }
        },
        "phone": "(555) 555-1234",
        "website": "www.johndoe.com",
        "company": {
            "name": "ABC Company",
            "catchPhrase": "Innovative solutions for all your needs",
            "bs": "Marketing"
        }
    },
    {
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
]

describe('user selectors', ()=>{

    const INITIAL_STATE = {
        http: {
            loading: false,
            error: 'error',
        },
        users: {
            list: users,
            user:  users[0]
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

    it('should return users list', ()=>{
        expect(selectAllUsers(INITIAL_STATE)).toEqual(users)
    })

    it('should return user', ()=>{
        expect(getUser(INITIAL_STATE)).toEqual(users[0])
    })
})