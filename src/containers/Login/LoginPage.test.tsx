import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import LoginPage from './LoginPage';
import * as reactRedux from 'react-redux'
import { User } from '../../types/user.types';
import userEvent from '@testing-library/user-event';
import * as action from '../../services/user.services'

jest.mock('react-redux')

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

const userActionMock = jest.spyOn(action, 'getUser')

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

describe("LoginPage", ()=>{
    it("render LoginPage", ()=>{
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        expect(login).toMatchSnapshot()
    })

    it("login form should be in the document", ()=>{
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        expect(login.getByTestId('form-login')).toBeInTheDocument;
    })

    it("username value should be valid", ()=>{
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const username = login.getByTestId('username')
        fireEvent.change(username, {target: {value: 'sdseretyuiod'}});
        expect(login.getAllByTestId('error')[0].innerHTML).toBe('')
    })

    it("username value should't be valid", ()=>{
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const username = login.getByTestId('username')
        fireEvent.change(username, {target: {value: 'sdd'}});
        expect(login.getAllByTestId('error')[0].innerHTML).toBe('Username must be 5 characters long!')
    })

    it("password value should be valid", ()=>{
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const password = login.getByTestId('password')
        fireEvent.change(password, {target: {value: 'sdseretyuiod'}});
        expect(login.getAllByTestId('error')[0].innerHTML).toBe('')
    })

    it("password value should't be valid", ()=>{
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const password = login.getByTestId('password')
        fireEvent.change(password, {target: {value: 'sdd'}});
        expect(login.getAllByTestId('error')[1].innerHTML).toBe('Password must be eight characters long!')
    })

    it("authorization must be completed", ()=>{
        useSelectorMock.mockReturnValue(users)
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const username = login.getByTestId('username')
        fireEvent.change(username, {target: {value: 'johndoe'}});
        const password = login.getByTestId('password')
        fireEvent.change(password, {target: {value: 'jsonplaceholder.org'}});
        const btnSubmit = login.getByRole('button')
        userEvent.click(btnSubmit)
        expect(userActionMock).toHaveBeenCalledTimes(1)
    })

    it("authorization must be completed for a user with id 1", ()=>{
        useSelectorMock.mockReturnValue(users)
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const username = login.getByTestId('username')
        fireEvent.change(username, {target: {value: 'johndoe'}});
        const password = login.getByTestId('password')
        fireEvent.change(password, {target: {value: 'jsonplaceholder.org'}});
        const btnSubmit = login.getByRole('button')
        userEvent.click(btnSubmit)
        expect(userActionMock).toHaveBeenCalledWith('1')
    })

    it("authorization should not pass", ()=>{
        useSelectorMock.mockReturnValue(users)
        const login = render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const username = login.getByTestId('username')
        fireEvent.change(username, {target: {value: 'bobjohnson'}});
        const password = login.getByTestId('password')
        fireEvent.change(password, {target: {value: 'jsonplaceholder.org'}});
        const btnSubmit = login.getByRole('button')
        userEvent.click(btnSubmit)
        expect(userActionMock).toHaveBeenCalledTimes(0)
    })
})