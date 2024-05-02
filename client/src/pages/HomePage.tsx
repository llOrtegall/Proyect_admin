import { CambiarCompany } from '../components/DefineCompany'
import { useAuth } from '../auth/AuthProvider'
import DahsBoard from '../components/DashBoard'

function HomePage (): JSX.Element {
  const { user } = useAuth()

  const empresa = user?.empresa

  console.log(user)
  return (
    <>
      {
        empresa === 'Multired y Servired'
          ? (<CambiarCompany />)
          : (<DahsBoard />)
      }
    </>
  )
}

export default HomePage
