import { ProtectedRoute } from './components/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Login from './pages/LoginPage'
import { useAuth } from './auth/AuthProvider'

function App (): JSX.Element {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="/home" element={<Home />} />
          <Route path='/example1' element={<h1>Example 1</h1>} />
          <Route path='/example2' element={<h1>Example 2</h1>} />
          <Route path='/example3' element={<h1>Example 3</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
