
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Pastes from './Components/Pastes'
import ViewPaste from './Components/ViewPaste'

const router = createBrowserRouter([
  {
    path:"/",
    element:<div>
        <NavBar/>
        <Home/>
     </div>
  },
  {
    path:"/paste",
    element:<div>
      <NavBar/>
      <Pastes/>
     </div>
  },
  {
    path:"/paste/:id",
    element:<div>
        <NavBar/>
        <ViewPaste/>
     </div>
  },
])

function App() {
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
