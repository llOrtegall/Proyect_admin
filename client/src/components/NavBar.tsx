import { NavLink } from 'react-router-dom'
import { Button } from './iu/Button'

function NavBar (): JSX.Element {
  return (
    <nav className='bg-blue-200 py-3'>
      <ul className='flex items-center justify-around'>
        <div className='flex gap-4'>
          <li>
            <NavLink to='/' className='font-semibold hover:text-rose-600'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/example1' className='font-semibold hover:text-rose-600'>Example 1</NavLink>
          </li>
          <li>
            <NavLink to='/example2' className='font-semibold hover:text-rose-600'>Example 2</NavLink>
          </li>
          <li>
            <NavLink to='/example3' className='font-semibold hover:text-rose-600'>Example 3</NavLink>
          </li>
        </div>
        <li>
          <Button>Cerrar Sesión</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
