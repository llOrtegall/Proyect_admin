import { ProtectedRoute } from './components/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import DetallesPage from './pages/DetallesPage'
import { useAuth } from './auth/AuthProvider'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'
import PuntoDetail from './pages/PuntoDetail'

function App (): JSX.Element {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} index />
        <Route element={<ProtectedRoute isAllowed={!isAuthenticated} redirectTo='/' />}>
          <Route path="/home" element={<Home />} />
          <Route path='/detalles' element={<DetallesPage />} />
          <Route path="/detalles/sucursal/:codigo" element={<PuntoDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
