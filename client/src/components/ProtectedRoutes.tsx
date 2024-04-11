import { Navigate, Outlet } from 'react-router-dom'
import { type FC } from 'react'
import NavBar from './NavBar'

interface ProtectedRouteProps {
  redirectTo?: string
  isAllowed: boolean
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/login' }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      <section className='w-full'>
        <NavBar />
      </section>
      <section className='h-[90vh] overflow-auto'>
        <Outlet />
      </section>

      <div className="text-black absolute bottom-0 left-0 ">
        <p className="font-semibold dark:text-white">Database:
          <span className="text-red-500"> {} </span>
        </p>
      </div>
    </>
  )
}
