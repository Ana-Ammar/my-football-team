import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Layouts/RootLayout'
import About from './Pages/About'
import Home from './Pages/Home'
import PlayerDetails from './Pages/PlayerDetails'
import Login from './Registers & Login/Login'

const router = createBrowserRouter ([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Login
      },
      {
        path: "/home",
        loader: () => fetch("/player.json"),
        Component: Home
      },
      {
        path: '/player-details/:id',
        loader: () => fetch("/player.json"),
        Component: PlayerDetails
      },
      {
        path: "/about",
        Component: About
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
