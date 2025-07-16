import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import Shop from './pages/Shop'

const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path="/" element={<Shop/>}></Route>
    </Route>
  )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
