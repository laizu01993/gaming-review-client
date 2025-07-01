import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'

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
import ReviewDetails from './Components/Pages/ReviewDetails.jsx';
import AuthProvider from './providers/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/review')
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
