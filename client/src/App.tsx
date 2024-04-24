import { ProtectedRoute } from './components/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './auth/AuthProvider'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'
import DetallesPage from './pages/DetallesPage'
import { Prueba } from './pages/Empresa'

function App (): JSX.Element {
  const { isAuthenticated, user } = useAuth()
  console.log('user.empresa', user.username)

  // const isServired = (user.empresa === 'Servired' ? '39628' : null)
  // const isMultired = (user.empresa === 'Multired' ? '39627' : null)
  // const isprueba = (user.empresa === 'Multired y Servired' ? user.empresa : null)

  // if (isServired !== null) {
  //   user.empresa = isServired
  //   console.log('user', user.empresa)
  // }
  // if (isMultired !== null) {
  //   user.empresa = isMultired
  //   console.log('user', user.empresa)
  // }
  // if (isprueba !== null) {
  //   user.empresa = isprueba
  //   console.log('user', user.empresa)
  // }

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!isAuthenticated} redirectTo='/' />}>
          <Route path="/prueba" element={<Prueba />} />
          <Route path="/home" element={<Home />} />
          <Route path='/detalles' element={<DetallesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
