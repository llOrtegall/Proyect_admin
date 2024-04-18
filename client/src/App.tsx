import { ProtectedRoute } from './components/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './auth/AuthProvider'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'
import DetallesPage from './pages/DetallesPage'

function App (): JSX.Element {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!isAuthenticated} redirectTo='/' />}>
          <Route path="/home" element={<Home />} />
          <Route path='/detalles' element={<DetallesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
