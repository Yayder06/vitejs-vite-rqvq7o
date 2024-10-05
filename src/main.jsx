import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import App from './App.jsx';




const router = createBrowserRouter([
 {
   path: "/",
   element: <App />,
   children: [
     {
       path: "home",
       element: <Home />,
       element: <h1 style={{marginTop:100}}>Home</h1>,
     },
     /* other child route objects here */

     {
      path: "home",
      element: <Home />,
      element: <h1 style={{marginTop:100}}>Home</h1>,
     }


   ],
 },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
 );
 

