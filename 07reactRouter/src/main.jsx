import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/AboutUs/About'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'



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
    },
    {
      path: "contact",
      element: <Contact />
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}  />
   
  </React.StrictMode>,
)
