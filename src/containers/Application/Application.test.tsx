import {render} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import Application from './Application';
import { Provider } from 'react-redux';
import store from '../../state/store';

describe("Application", ()=>{
    it("render Application", ()=>{
        const app = render(<Provider store = {store}><BrowserRouter><Application/></BrowserRouter></Provider>);
        expect(app).toMatchSnapshot()
    })
})