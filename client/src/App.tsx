import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Category from './Pages/Category'
import Home from './Pages/Home'
import Product from './Pages/Product'
import './scss/App.scss'
const Layout =()=>{
  return (
    <div className='app'>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Category/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App