import {render, screen} from '@testing-library/react'
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import Notification from './Notification';

jest.mock('react-redux')

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

describe("Notification", ()=>{
    
    it("render Notification ", ()=>{
        const notification = render(<BrowserRouter><Notification/></BrowserRouter>);
        expect(notification).toMatchSnapshot()
    })

    it("render Notification with error", ()=>{
        useSelectorMock.mockReturnValue({error: 'error'})
        render(<BrowserRouter><Notification/></BrowserRouter>);
        expect(screen.getByText('error')).toBeInTheDocument
    })

    it("render Notification with success", ()=>{
        useSelectorMock.mockReturnValue('')
        render(<BrowserRouter><Notification/></BrowserRouter>);
        expect(screen.getByText('Данные загружены успешно!')).toBeInTheDocument
    })
})