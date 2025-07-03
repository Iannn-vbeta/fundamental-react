import './App.css'
import Homepage from './pages/Index'
import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import  {router} from './routers'


function App() {
  const user = 'John Doe';
  return (
    <>
    <GlobalContext.Provider value={{ user }}>
    <RouterProvider router={router} />
    </GlobalContext.Provider>
    </>
  )
}

export default App
