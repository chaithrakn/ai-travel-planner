import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip'
import Header from './components/ui/custom/Header'
import { Toaster } from 'sonner'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Toaster/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
