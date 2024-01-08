import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// sample page routing
// const DefaultPage = Loadable(lazy(() => import('../views/DefaultPage')));
const Home = Loadable(lazy(() => import('../views/Home/Home')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <Navigate to="/" />
        }
    ]
};

export default MainRoutes;
