import { ReactNode } from "react";
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

type RouteType = {
    url: string,
    component: ReactNode,
    subroutes?: RouteType[]
}

const Router = () => {
    return(
        <Routes>
            {
                routes.map((route: RouteType, index: number) =>
                    <Route key={index} path={route.url} element={route.component} />
                )
            }
        </Routes>
    )
}

export default Router;
