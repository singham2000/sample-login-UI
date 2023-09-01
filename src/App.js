import React from 'react';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Table from './Pages/Table';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}