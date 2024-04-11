import { NavLink } from 'react-router-dom'
import { Button } from './iu/Button'

function NavBar (): JSX.Element {
  return (
    <nav className='bg-blue-200 py-3'>
      <ul className='flex items-center justify-around'>
        <li>
          <NavLink to='/' className='font-semibold hover:text-rose-600'>Home</NavLink>
        </li>
        <li>
          <Button>Cerrar Sesión</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
