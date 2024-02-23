import {render, screen} from '@testing-library/react'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux')

describe("Header", ()=>{
    it("render Header", ()=>{
        const header = render(<BrowserRouter><Header/></BrowserRouter>);
        expect(header).toMatchSnapshot()
    })

    it("render Header with title 'BlogX'", ()=>{
        render(<BrowserRouter><Header/></BrowserRouter>);
        expect(screen.getByText('BlogX')).toBeInTheDocument
    })
})