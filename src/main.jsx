import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddReview from './Components/Pages/AddReview.jsx';
import UpdateReview from './Components/Pages/UpdateReview.jsx';
import MainLayout from './layout/MainLayout.jsx';
import Home from './Components/Pages/Home.jsx';
import AllReviews from './Components/Pages/AllReviews.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>
      },
      {
        path: "/updateReview",
        element: <UpdateReview></UpdateReview>
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
