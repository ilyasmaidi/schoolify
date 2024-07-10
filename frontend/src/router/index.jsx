// router.js or router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"
import Users from "../pages/users"
import NotFound from "../pages/notfound"
import Layouts from '../layouts/Layouts';

export const router = createBrowserRouter([
    {
        element: <Layouts/>,
        children: [
            {
                path: '/',
                element: <Home/>
              },
              {
                path: '/login',
                element: <Login/>
              },
              {
                path: '/register',
                element: <Register/>
              },
              {
                path: '/users',
                element: <Users/>
              },
              {
                path: '*',
                element: <NotFound/>
              },
        ]
    },
  
]);
