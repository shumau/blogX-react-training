import Navbar from "./Navbar"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import * as action from "../../state/actions/app.actions"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'

jest.mock('react-redux')

const useActionMock = jest.spyOn(action, 'toggleNavBar')


describe('Navbar', ()=>{
    it("click for button", ()=>{
        render(<BrowserRouter><Navbar/></BrowserRouter>)
        userEvent.click(screen.getByRole('button'));
        expect(useActionMock).toHaveBeenCalledTimes(1);
    })
})