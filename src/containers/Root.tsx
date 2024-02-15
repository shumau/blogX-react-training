import React from 'react';
import StoreProvider from "../providers/store.provider";
import {BrowserRouter} from "react-router-dom";
import Application from "./Application/Application";

const Root = () => (
    <StoreProvider>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </StoreProvider>
)

export default Root;
