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
import PrivateRoute from './routes/PrivateRoute.jsx';
import NotFound from './Components/Pages/NotFound.jsx';
import MyReviews from './Components/Pages/MyReviews.jsx';
import Watchlist from './Components/Pages/Watchlist.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/topReview')
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)

      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch('http://localhost:5000/review')
      },
      {
        path: "/myReviews",
        element: <PrivateRoute><MyReviews></MyReviews> </PrivateRoute>
      },
      {
        path: "/updateReview/:id",
        element: <PrivateRoute><UpdateReview></UpdateReview> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
      },
      {
        path: "/watchlist",
        element: <PrivateRoute><Watchlist></Watchlist></PrivateRoute>
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
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },

    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
