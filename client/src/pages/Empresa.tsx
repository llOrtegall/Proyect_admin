import { CambiarCompany } from '../components/DefineCompany'
import { useAuth } from '../auth/AuthProvider'
import HomePage from './HomePage'

export const Prueba = (): JSX.Element => {
  const { user } = useAuth()
  const empresa = user?.empresa

  return (
    empresa !== '39627' && empresa !== '39628' && empresa !== null && empresa !== undefined
      ? <CambiarCompany />
      : <HomePage />
  )
}
