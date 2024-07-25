import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/AboutUs/About'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'



const router = createBrowserRouter ([
  {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Home />,

    },
    {
      path: "about",
      element: <About />
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  />
   
  </React.StrictMode>,
)
