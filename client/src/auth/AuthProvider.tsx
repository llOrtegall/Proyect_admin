import { createContext, useContext, useEffect, useState } from 'react'
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
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated')
    return (storedAuth != null) ? JSON.parse(storedAuth) : false
  })

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated))
  }, [isAuthenticated])

  const login = (): void => {
    setIsAuthenticated(true)
    navigate('/home') // * Redirige a la ruta '/home' al autenticarse
  }
  const logout = (): void => {
    setIsAuthenticated(false)
    navigate('/') // * Redirige a la ruta '/' al cerrar sesión
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
