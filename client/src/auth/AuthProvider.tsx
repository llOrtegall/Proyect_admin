import { createContext, useContext, useState } from 'react'

interface IAuthContext {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

interface Props {
  children: React.ReactNode
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (): void => { setIsAuthenticated(true) }
  const logout = (): void => { setIsAuthenticated(false) }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
