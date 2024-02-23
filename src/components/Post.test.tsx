import * as reactRedux from 'react-redux'
import { render, screen } from "@testing-library/react"
import Post from './Post'
import * as action from "../state/actions/app.actions"
import { Post as PostType } from '../types/post.types'
import { User } from '../types/user.types'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

jest.mock('react-redux')

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
const useActionMock = jest.spyOn(action, 'likedPost')

const user: User = {
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
}

const post: PostType = {
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut. Gravida morbi, sagittis blandit quis ipsum mi mus semper dictum amet himenaeos. Accumsan non congue praesent interdum habitasse turpis orci. Ante curabitur porttitor ullamcorper sagittis sem donec, inceptos cubilia venenatis ac. Augue fringilla sodales in ullamcorper enim curae; rutrum hac in sociis! Scelerisque integer varius et euismod aenean nulla. Quam habitasse risus nullam enim. Ultrices etiam viverra mattis aliquam? Consectetur velit vel volutpat eget curae;. Volutpat class mus elementum pulvinar! Nisi tincidunt volutpat consectetur. Primis morbi pulvinar est montes diam himenaeos duis elit est orci. Taciti sociis aptent venenatis dui malesuada dui justo faucibus primis consequat volutpat. Rhoncus ante purus eros nibh, id et hendrerit pellentesque scelerisque vehicula sollicitudin quam. Hac class vitae natoque tortor dolor dui praesent suspendisse. Vehicula euismod tincidunt odio platea aenean habitasse neque ad proin. Bibendum phasellus enim fames risus eget felis et sem fringilla etiam. Integer.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
}


describe('Post', ()=>{
    it("'Like' button should't be displayed on the post if the user is logged in", ()=>{
        useSelectorMock.mockReturnValue({})
        render(<BrowserRouter><Post post={post}/></BrowserRouter>);
        expect(screen.queryByRole('button')).not.toBeInTheDocument;
    })

    it("'Like' button should be displayed on the post if the user is logged in", ()=>{
        useSelectorMock.mockReturnValue(user)
        render(<BrowserRouter><Post post={post}/></BrowserRouter>);
        expect(screen.getByRole('button')).toBeInTheDocument;
    })

    it("by clicking on the Like button, the method is called 'likedPost'", ()=>{
        useSelectorMock.mockReturnValue(user)
        render(<BrowserRouter><Post post={post}/></BrowserRouter>);
        userEvent.click(screen.getByRole('button'));
        expect(useActionMock).toHaveBeenCalledTimes(1);
    })

    it("by clicking on the Like button, the method is called 'likedPost' with the right arguments", ()=>{
        useSelectorMock.mockReturnValue(user)
        render(<BrowserRouter><Post post={post}/></BrowserRouter>);
        userEvent.click(screen.getByRole('button'));
        expect(useActionMock).toHaveBeenCalledWith(post.id)
    })
})