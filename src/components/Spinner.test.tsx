import {render, screen} from '@testing-library/react'
import * as reactRedux from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import Spinner from './Spinner';

jest.mock('react-redux')

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

describe("Spinner", ()=>{
    
    it("render Spinner ", ()=>{
        const spinner = render(<BrowserRouter><Spinner/></BrowserRouter>);
        expect(spinner).toMatchSnapshot()
    })

    it("render Spinner with loading", ()=>{
        useSelectorMock.mockReturnValue(true)
        render(<BrowserRouter><Spinner/></BrowserRouter>);
        expect(screen.getByTestId('spinner')).toBeInTheDocument
    })

    it("render Spinner without loading", ()=>{
        useSelectorMock.mockReturnValue(false)
        render(<BrowserRouter><Spinner/></BrowserRouter>);
        expect(screen.queryByTestId('spinner')).not.toBeInTheDocument
    })
})