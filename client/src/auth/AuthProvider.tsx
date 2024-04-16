import { createContext, useContext, useEffect, useState } from 'react'
import { autentificaToken } from '../services/tokenService'
import { useNavigate } from 'react-router-dom'

interface IAuthContext {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

interface Props {
  children: React.ReactNode
}

// * Creación del contexto de autenticación
const AuthContext = createContext<IAuthContext | undefined>(undefined)

// * Definición del componente AuthProvider que provee el contexto de autenticación
export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // * Verifica si el usuario está autenticado con el token si existe en el local storage
    const token = localStorage.getItem('token')
    if (token !== null) {
      void autentificaToken({ token })
        .then(res => {
          if (res.status === 200) {
            login() // * Autentica al usuario si el token es válido
          }
        })
        .catch(error => {
          console.error(error.response.data.message)
          logout()
        })
    } else {
      console.log('No hay token')
    }
  }, [])

  const login = (): void => {
    setIsAuthenticated(true)
    navigate('/home') // * Redirige a la ruta '/home' al autenticarse
  }
  const logout = (): void => {
    setIsAuthenticated(false)
    navigate('/') // * Redirige a la ruta '/' al cerrar sesión
    localStorage.removeItem('token') // * Elimina el token del local storage al cerrar sesión cuando expira el token ó se cierra la sesión
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// * Hook que permite acceder al contexto de autenticación
export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
