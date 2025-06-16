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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "addReview",
    element: <AddReview></AddReview>
  },
  {
    path: "updateReview",
    element: <UpdateReview></UpdateReview>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
