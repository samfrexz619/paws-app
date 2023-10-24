import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/Home'
import DemoPage from './pages/Demo'
import Voting from './pages/Voting'
import Breeds from './pages/Breeds'
import Gallery from './pages/Gallery'
import './App.scss'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage  />
      },
      {
        path: '/voting',
        element: <Voting  />
      },
      {
        path: '/breeds',
        element: <Breeds  />
      },
      {
        path: '/gallery',
        element: <Gallery  />
      },
      {
        path: '/demo',
        element: <DemoPage  />
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
