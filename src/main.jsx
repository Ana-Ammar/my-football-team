import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './Layouts/RootLayout'
import About from './Pages/About'
import Home from './Pages/Home'
import playersData from '../public/player.json'
import PlayerDetails from './Pages/PlayerDetails'

const router = createBrowserRouter ([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => {return playersData},
        Component: Home
      },
      {
        path: '/player-details/:id',
        loader: () => {return playersData},
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
