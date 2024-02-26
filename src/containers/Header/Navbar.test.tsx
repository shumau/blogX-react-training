import Navbar from "./Navbar"
import { render, screen } from "@testing-library/react"
import { BrowserRouter, Router } from "react-router-dom"
import * as action from "../../state/actions/app.actions"
import userEvent from "@testing-library/user-event"
import * as reactRedux from 'react-redux'
import '@testing-library/jest-dom'
import { User } from "../../types/user.types"

jest.mock('react-redux')

const useActionMock = jest.spyOn(action, 'toggleNavBar')
const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

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

describe('Navbar', ()=>{
    it("click for button", ()=>{
        render(<BrowserRouter><Navbar/></BrowserRouter>)
        userEvent.click(screen.getByRole('button'));
        expect(useActionMock).toHaveBeenCalledTimes(1);
    })

    it("button 'Liked Posts' should't display if the user is logged in", ()=>{
        useSelectorMock.mockReturnValue({})
        render(<BrowserRouter><Navbar/></BrowserRouter>);
        expect(screen.queryByText('Liked Posts')).not.toBeInTheDocument;
    })

    it("button 'Liked Posts' should display if the user is logged in", ()=>{
        useSelectorMock.mockReturnValue(user)
        render(<BrowserRouter><Navbar/></BrowserRouter>);
        expect(screen.getByText('Liked Posts')).toBeInTheDocument;
    })

    it("after clicking on the button, you will be redirected to the page 'Liked Posts'", ()=>{
        useSelectorMock.mockReturnValue(user)
        render(<BrowserRouter><Navbar/></BrowserRouter>);
        userEvent.click(screen.getByText('Liked Posts'));
        expect(window.location.pathname).toBe('/liked_posts');
    })
})