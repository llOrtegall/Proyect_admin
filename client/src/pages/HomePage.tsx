import { CambiarCompany } from '../components/DefineCompany'
import { useAuth } from '../auth/AuthProvider'
import DahsBoard from '../components/DashBoard'

function HomePage (): JSX.Element {
  const { user } = useAuth()

  return (
    <>
      {
        user.empresa === 'Multired y Servired'
          ? (<CambiarCompany />)
          : (<DahsBoard company={user.empresa}/>)
      }
    </>
  )
}

export default HomePage
